// Recordemos que no tenemos NODEMON!!! Hay que cerrar y volver a abrir la consola!!!

const express = require("express");
const { Resend } = require("resend");
const cors = require("cors");
const port = 3000;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

const resend = new Resend("re_RcPznmfh_QKWzHXeXEG6eoT2u4fAycqvR");

app.get("/jhon", async (req, res) => {
  res.send("hola cara cola");
});

app.post("/api/send", async (req, res) => {
  const { nombre, mensaje, email, phone, titulo } = req.body;
  if (!nombre || !mensaje || !email || !phone || !titulo) {
    return res.status(400).json({
      success: false,
      message: "Completa todos los campos",
    });
  }
  try {
    const data = await resend.emails.send({
      from: "Solicitud de Servicios <onboarding@resend.dev>",
      // Buscar un correo de la empresa, pedirselo a ellos.
      to: "FSJ11112023@gmail.com",
      subject: `Servicio para: ${titulo}`,
      // Cambiar HTML, añadir el texto que necesita para un correo profesional.
      html: `${nombre},<br/><strong>${mensaje}</strong>,${email}, ${phone}`,
      text: "",
    });

    // Creo que esta comprobación no es necesaria.
    if (!data) {
      return res
        .status(404)
        .json({ message: "No hemos podido encontrar información" });
    } else {
      return res
        .status(200)
        .json({ message: "Email enviado correctamente", success: true });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al enviar el correo", success: false });
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
