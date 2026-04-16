import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      return NextResponse.json(
        { success: false, error: "Email ou mot de passe non configuré" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: user,
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `<p>${message}</p><p>Envoyé par : ${name} (${email})</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Une erreur inconnue est survenue";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
