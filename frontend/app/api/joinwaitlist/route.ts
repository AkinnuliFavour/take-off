import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, telephone } = body;

  try {
    const apiKey = process.env.MAILERLITE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Updated to use MailerLite v3 API
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: {
          name: name,
          phone: telephone,
        },
        groups: ["159810485240202514"],
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("MailerLite API error:", {
        status: res.status,
        statusText: res.statusText,
        error: error,
        requestData: { email, name, telephone },
      });
      return NextResponse.json({ error }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ message: "Subscribed!", data });
  } catch (error) {
    console.error("Error subscribing to waitlist:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
