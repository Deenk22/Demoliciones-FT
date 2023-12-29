// import {useEffect, useState} from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import {Box} from "@mui/material";
// import MailForm from "../MailForm/MailForm";

// export default function Mail({titulo, setOpen}) {
//   const [formData, setFormData] = useState({
//     name: "",
//     message: "",
//     email: "",
//     titulo: titulo,
//   });

//   useEffect(() => {
//     setFormData((prevData) => ({
//       ...prevData,
//       titulo: titulo,
//     }));
//   }, [titulo]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/send",
//         formData
//       );

//       if (response === 200) {
//         toast.success("Solicitud Enviada.");
//         setOpen(false);
//       }

//       setFormData({
//         name: "",
//         message: "",
//         email: "",
//         titulo: titulo || "",
//       });
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response);
//         setOpen(false);
//         toast.error("Hola");
//         console.error("Error en la respuesta:", error.response.data);
//       } else if (error.request) {
//         toast.error("Hola");
//         setOpen(false);
//         console.error("Error en la solicitud:", error.request);
//       } else {
//         toast.error("Hola");
//         setOpen(false);
//         console.error("Error general:", error.message);
//       }
//     }
//   };

//   return (
//     <Box>
//       <MailForm />
//     </Box>
//   );
// }
