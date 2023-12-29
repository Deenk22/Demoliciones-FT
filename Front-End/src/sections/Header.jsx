import {Box, Typography, styled} from "@mui/material";
import "./style.css";
import Contacto from "../components/Contacto/Contacto";

export default function Header() {
  const Img = styled("img")({
    width: 256,
    margin: 0,
  });

  return (
    <section id="header" className="bg-section-header">
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        minHeight={"88vh"}
        mx={2}
      >
        <Box
          textAlign={"center"}
          bgcolor={"bg.opacity"}
          py={4}
          width={{xs: "100%", sm: "80%", md: "70%", lg: "60%", xl: "50%"}}
          borderRadius={2}
        >
          <Img src="img/logo/logotipo.webp" alt="FT Demoliciones Logo" />
          <Typography variant="h1" color={"white.main"}>
            Empresa Malagueña
          </Typography>
          <Typography
            variant="h1"
            component={"h2"}
            fontSize={"2rem"}
            color={"white.main"}
            mt={2}
          >
            Al servicio de todos
          </Typography>
        </Box>
      </Box>
      <Contacto />
    </section>
  );
}
