// Recordemos que no tenemos NODEMON!!! Hay que cerrar y volver a abrir la consola!!!

const express = require("express");
const {Resend} = require("resend");
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

const resend = new Resend("re_dTWnN2Qj_LScQmqb7LdUDduLuv4ksKPAh");

app.post("/api/send", async (req, res) => {
  console.log(req.body);
  const {nombre, mensaje, email, phone, titulo} = req.body;
  if (!nombre || !mensaje || !email || !phone || !titulo) {
    return res.status(404).json({
      success: false,
      mensaje: "Debe ingresar todos los datos.",
    });
  }
  try {
    const data = await resend.emails.send({
      from: "Solicitud de Servicios <onboarding@resend.dev>",
      // Buscar un correo de la empresa, pedirselo a ellos.
      to: "jhonmacias08031994@gmail.com",
      subject: `Servicio para: ${titulo}`,
      // Cambiar HTML, añadir el texto que necesita para un correo profesional.
      html: `${nombre},<br/><strong>${mensaje}</strong>,${email}, ${phone}`,
      text: "",
    });

    if (!data) {
      return res.status(404).json({message: "No hemos encontrado información"});
    } else {
      return res
        .status(200)
        .json({message: "Email enviado correctamente.", success: true});
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({message: "Error al enviar el correo", success: false});
  }
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
