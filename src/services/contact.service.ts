import { TContact, TCustomQuote, TQuote } from "../types/contact.types"

import Mail from "nodemailer/lib/mailer"
import transporter from "../config/nodemailer.config"

const EMAIL_HOST = process.env.SMTP_USER

export const contactUs = async (payload: TContact) => {
  try {
    const { name, email, message } = payload

    const options: Mail.Options = {
      subject: `¡${name} te ha enviado un mensaje mediante el formulario de contacto de pi.com.gt!`,
      from: `${name} <${email}>`,
      to: EMAIL_HOST,
      html: `
        <div style="display: block; padding: 16px">
            <p>${message}</p>
            <p>Enviado por <strong>${name}, ${email}</strong></p>
            <p>Para <strong>${EMAIL_HOST}</strong></p>
        </div>
      `,
    }
    await transporter.sendMail(options)
  } catch (error) {
    throw new Error("Ocurrió un error al enviar el formulario de contácto.")
  }
}

export const projectQuote = async (payload: TQuote) => {
  try {
    const { name, email, message, date, phone, services } = payload

    const options: Mail.Options = {
      subject: `¡${name} ha solicitado una nueva cotización!`,
      from: `${name} <${email}>`,
      to: EMAIL_HOST,
      html: `
        <div style="display: block; padding: 16px">
            <h2>Nueva cotización</h2>
            <p><strong>Datos del cliente:</strong> ${name} - ${email} - ${phone}</p>
            <p><strong>Fecha</strong>: ${new Date(date).toLocaleDateString(
              "es-GT"
            )}</p>
            <p><strong>Servicios</strong>: ${services.join(", ")}</p>
            <p><strong>Mensaje adicional</strong>: ${message}</p>
            <p>Para <strong>${EMAIL_HOST}</strong></p>
        </div>
      `,
    }
    await transporter.sendMail(options)
  } catch (error) {
    throw new Error("Ocurrió un error al enviar el formulario de contácto.")
  }
}

export const projectCustomQuote = async (payload: TCustomQuote) => {
  try {
    const { name, email, phone, location, perforations, position } = payload

    const options: Mail.Options = {
      subject: `¡${name} ha solicitado una nueva cotización de perforación en concreto!`,
      from: `${name} <${email}>`,
      to: EMAIL_HOST,
      html: `
        <div style="display: block; padding: 16px">
            <h2>Nueva cotización de perforación en concreto</h2>
            <p><strong>Datos del cliente:</strong> ${name} - ${email} - ${phone}</p>
            <p><strong>Posición</strong>: ${position}</p>
            <p><strong>Ubicación de la obra</strong>: ${location}</p>
            <div style="display: block">
                <strong>Cantidad</strong>
                <div style="display: block">
                ${perforations.map(
                  (item) =>
                    `<p>Loza: ${item.whickness} - Perforación: ${item.size}</p>`
                )}
                </div>
            </div>
            <p>Para <strong>${EMAIL_HOST}</strong></p>
        </div>
      `,
    }
    await transporter.sendMail(options)
  } catch (error) {
    throw new Error("Ocurrió un error al enviar el formulario de contácto.")
  }
}
