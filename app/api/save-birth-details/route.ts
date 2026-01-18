import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

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

    if (
      !name ||
      !placeOfBirth ||
      !timeOfBirth ||
      !timeOfBirthPeriod ||
      !dateOfBirth ||
      !email
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "birthDetails.json");

    if (!fs.existsSync(path.dirname(filePath))) {
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    // Read existing data
    const fileData = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, "utf-8")
      : "[]";

    const jsonData: any[] = JSON.parse(fileData);

    const emailExists = jsonData.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      return NextResponse.json(
        {
          success: false,
          message: "This email is already registered",
        },
        { status: 409 } // Conflict
      );
    }

  jsonData.push({
      name,
      placeOfBirth,
      timeOfBirth,
      timeOfBirthPeriod,
      dateOfBirth,
      email,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json(
      { success: true, message: "Data saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Save error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}
