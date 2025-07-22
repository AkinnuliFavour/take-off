// MailerLite integration - commented out, using Resend instead
// Can be re-enabled by uncommenting this code and updating the frontend

/*
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      console.error("MAILERLITE_API_KEY is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name || "",
        },
        groups: ["159810485240202514"], // Waitlist 1 group ID
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("MailerLite API error:", errorText);

      // Handle specific error cases
      if (res.status === 401) {
        return NextResponse.json(
          { error: "Authentication failed" },
          { status: 500 }
        );
      }

      if (res.status === 422) {
        try {
          const errorData = JSON.parse(errorText);
          return NextResponse.json(
            { error: errorData.message || "Invalid data provided" },
            { status: 400 }
          );
        } catch {
          return NextResponse.json(
            { error: "Invalid email address" },
            { status: 400 }
          );
        }
      }

      return NextResponse.json(
        { error: "Failed to subscribe to waitlist" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json({
      message: "Successfully subscribed to waitlist!",
      data,
    });
  } catch (error) {
    console.error("Waitlist subscription error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
*/
