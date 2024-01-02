import {Box, Grid, Typography} from "@mui/material";
import {socialMedia} from "../constants/socialMedia";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <section id="footer" className="footer-section">
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        gap={4}
      >
        <Grid item xs={8} sm={8} md={8} lg={5} xl={6}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Typography
              variant="h1"
              fontSize={"2rem"}
              color={"white.main"}
              sx={{letterSpacing: 1}}
              mb={1}
            >
              Demoliciones FT S.L.
            </Typography>
            <Typography
              variant="body1"
              color={"white.main"}
              maxWidth={{
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "72%",
              }}
            >
              Líderes en Demolición con 80 Años de Excelencia. Con más de 80
              años de experiencia en demoliciones, Demoliciones Malagueñas S.A.
              se destaca como líder en el sector a nivel local y nacional.
              Contamos con una flota de maquinaria de última generación y un
              equipo altamente calificado para abordar proyectos de cualquier
              tamaño o complejidad con eficiencia y seguridad.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          lg={4}
          xl={3}
          border={1}
          p={4}
          borderColor={"white.main"}
          borderRadius={2}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={4}
          >
            {socialMedia.map((redSocial) => {
              const {title, src, link, description} = redSocial;
              return (
                <Link key={title} to={link} className="link-redes-sociales">
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={1}
                  >
                    <img src={src} alt={description} width={32} />
                    <Typography variant="body2" color={"white.main"}>
                      {title}
                    </Typography>
                  </Box>
                </Link>
              );
            })}
          </Box>
          <Box borderTop={1} borderColor={"white.main"} mt={2}>
            <Typography variant="body2" color={"white.main"} mt={2}>
              Siguenos en redes sociales para más información.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
