// import { NextResponse } from "next/server";
// import { createClient } from "@/lib/supabase/server";
// import { sendNewsletterWelcomeEmail } from "@/lib/mailer";

// export async function POST(req: Request) {
//   try {
//     const { email } = await req.json();

//     // Validation
//     if (!email || !email.trim()) {
//       return NextResponse.json(
//         { success: false, message: "Email is required" },
//         { status: 400 }
//       );
//     }

//     const supabase = await createClient();

//     // Insert email
//     const { error } = await supabase
//       .from("newsletter_subscribers")
//       .insert({
//         email: email.trim().toLowerCase(),
//       });

//     // Duplicate email
//     if (error) {
//       if (error.code === "23505") {
//         return NextResponse.json(
//           { success: false, message: "Email already subscribed" },
//           { status: 409 }
//         );
//       }

//       console.error("Supabase error:", error);
//       throw error;
//     }

//     // Send welcome email (non-blocking)
//     try {
//       await sendNewsletterWelcomeEmail(email);
//     } catch (mailError) {
//       console.error("Newsletter email failed:", mailError);
//     }

//     return NextResponse.json(
//       { success: true, message: "Subscribed successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Newsletter error:", error);
//     return NextResponse.json(
//       { success: false, message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// } 