import * as React from "react";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Priyanshu <aeshar370@gmail.com>",
      to: ["kingshuk@squirrels.co.in"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "Priyanshu" }) as React.ReactElement,
    });

    if (error) return Response.json({ error }, { status: 500 });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
