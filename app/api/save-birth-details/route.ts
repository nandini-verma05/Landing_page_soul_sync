import { NextResponse } from "next/server";
import fs from "fs/promises"; // ← better to use promises version
import path from "path";
import { sendRegistrationEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      placeOfBirth,
      timeOfBirth,
      timeOfBirthPeriod,
      dateOfBirth,
      email,
    } = body;

    // Better validation
    if (
      !name?.trim() ||
      !placeOfBirth?.trim() ||
      !timeOfBirth?.trim() ||
      !timeOfBirthPeriod?.trim() ||
      !dateOfBirth?.trim() ||
      !email?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "birthDetails.json");

    // Ensure directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true });

    let jsonData: any[] = [];

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      const parsed = JSON.parse(fileContent);

      if (!Array.isArray(parsed)) {
        console.warn("birthDetails.json was not an array → resetting");
        jsonData = [];
      } else {
        jsonData = parsed;
      }
    } catch (err: any) {
      // File doesn't exist OR invalid JSON → start with empty array
      if (err.code !== "ENOENT") {
        console.warn("Invalid JSON in birthDetails.json:", err.message);
      }
      jsonData = [];
    }

    // Check duplicate (case-insensitive)
    const emailLower = email.toLowerCase().trim();
    const emailExists = jsonData.some(
      (entry) => entry?.email?.toLowerCase?.() === emailLower
    );

    if (emailExists) {
      return NextResponse.json(
        { success: false, message: "This email is already registered" },
        { status: 409 }
      );
    }

    // Add new record
    jsonData.push({
      name: name.trim(),
      placeOfBirth: placeOfBirth.trim(),
      timeOfBirth: timeOfBirth.trim(),
      timeOfBirthPeriod: timeOfBirthPeriod.trim(),
      dateOfBirth: dateOfBirth.trim(),
      email: email.trim(),
      createdAt: new Date().toISOString(),
    });

    // Atomic write (safer)
    await fs.writeFile(
      filePath,
      JSON.stringify(jsonData, null, 2) + "\n", // trailing newline is nice
      "utf-8"
    );

    // Send email - don't fail the request if email fails
    try {
      await sendRegistrationEmail(email, name);
    } catch (mailError) {
      console.error("Email sending failed:", mailError);
    }

    return NextResponse.json(
      { success: true, message: "Registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Save birth details error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to save data",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}