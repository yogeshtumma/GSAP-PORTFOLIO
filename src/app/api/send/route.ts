import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = EmailSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: parsed.error.errors.map(e => e.message).join(", ") },
        { status: 400 }
      );
    }

    const { fullName, email, message } = parsed.data;

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Must be verified or use Resend sandbox
      to: [config.email],
      subject: "Contact me from portfolio",
      react: React.createElement(EmailTemplate, { fullName, email, message }),
    });

    if (resendError) {
      console.error(resendError);
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
