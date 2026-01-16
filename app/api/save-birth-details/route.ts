import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const filePath = path.join(process.cwd(), "data", "birthDetails.json");

    // Read existing data
    const fileData = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, "utf-8")
      : "[]";

    const jsonData = JSON.parse(fileData);

    // Append new entry with timestamp
    jsonData.push({
      ...body,
      createdAt: new Date().toISOString(),
    });

    // Save back to file
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    return NextResponse.json(
      { success: true, message: "Data saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Save error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}
