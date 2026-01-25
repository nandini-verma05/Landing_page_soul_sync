 import { NextResponse } from "next/server";
import { sendRegistrationEmail } from "@/lib/mailer";
import { createClient } from "@/lib/supabase/server";

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

    // Validation
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

    const supabase = await createClient();
    // Insert into Supabase
    const { error } = await supabase.from("birth_details").insert({
      name: name.trim(),
      place_of_birth: placeOfBirth.trim(),
      time_of_birth: timeOfBirth.trim(),
      time_of_birth_period: timeOfBirthPeriod.trim(),
      date_of_birth: dateOfBirth.trim(),
      email: email.trim().toLowerCase(),
    });

    // Duplicate email handling
    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { success: false, message: "This email is already registered" },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", error);
      throw error;
    }

    // Send email (non-blocking)
    try {
      await sendRegistrationEmail(email, name);
    } catch (mailError) {
      console.error("Email failed:", mailError);
    }

    return NextResponse.json(
      { success: true, message: "Registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save data" },
      { status: 500 }
    );
  }
}