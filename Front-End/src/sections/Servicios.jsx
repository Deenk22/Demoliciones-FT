import CardHeader from "../components/CardHeader/CardHeader";
import {servicios} from "../constants/servicios";
import {infoCards} from "../constants/infoCards";
import {Box, Grid, Typography} from "@mui/material";
import BasicModal from "../components/Modal/BasicModal";
import Ubi from "../components/Ubi/Ubi";

export default function Servicios() {
  return (
    <section id="servicios" className="bg-section-one">
      <Grid
        container
        direction={"row"}
        justifyContent={"center"}
        className="animation-cards"
        gap={8}
      >
        {infoCards.map((card) => {
          const {titulo, descripcion, img} = card;
          return (
            <Grid key={titulo} item xs={8} sm={4} md={4} lg={2} xl={2}>
              <CardHeader titulo={titulo} descripcion={descripcion} img={img} />
            </Grid>
          );
        })}
      </Grid>
      {/* Seccion Uno */}
      <Box
        display={"flex"}
        flexDirection={{xs: "column", md: "row"}}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="h1" color={"primary"} borderRight={2} p={2}>
          Servicios
        </Typography>
        <Typography
          variant="body1"
          color={"paragraph"}
          width={{xs: "88%", sm: "32%"}}
          textAlign={{xs: "center", sm: "left"}}
        >
          Para satisfacer las necesidades cambiantes del mercado contamos con un
          gran capital humano, dotado de amplia experiencia y profesionalidad,
          contamos con una extensa y moderna flota de máquinas y camiones
          equipados con los últimos avances tecnológicos.
        </Typography>
      </Box>
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        maxWidth={"96%"}
        px={{xs: 1, lg: 12}}
        gap={{xs: 8, lg: 14}}
        my={16}
        py={2}
        borderLeft={4}
        borderColor={"primary.main"}
        bgcolor={"primary.opacity"}
      >
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5}>
          <Box
            mb={{xs: 1, lg: 0}}
            p={2}
            bgcolor={"primary.main"}
            height={"320px"}
            width={"100%"}
            sx={{
              backgroundImage: `url("img/servicios/demoliciones.webp")`,
              backgroundSize: "cover",
            }}
          ></Box>
        </Grid>
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5} py={2}>
          <Box textAlign={"left"}>
            <Typography variant="h1" color={"primary"} fontSize={"3rem"}>
              {servicios[0].titulo}
            </Typography>
            <Typography variant="body1" color={"paragraph.main"} mt={1}>
              {servicios[0].descripcion}
            </Typography>
            <Typography variant="body1" color={"primary"} mt={3} mb={-3}>
              Solicita información sobre demoliciones.
            </Typography>
            <BasicModal titulo={servicios[0].titulo} />
          </Box>
        </Grid>
      </Grid>
      {/* Seccion Dos */}
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        maxWidth={"96%"}
        px={{xs: 1, lg: 12}}
        gap={{xs: 8, lg: 14}}
        my={16}
        py={2}
        borderRight={4}
        borderColor={"primary.main"}
        bgcolor={"primary.opacity"}
      >
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5} py={2}>
          <Box textAlign={"left"}>
            <Typography variant="h1" color={"primary"} fontSize={"3rem"}>
              {servicios[1].titulo}
            </Typography>
            <Typography variant="body1" color={"paragraph.main"} mt={1}>
              {servicios[1].descripcion}
            </Typography>
            <Typography variant="body1" color={"primary"} mt={3} mb={-3}>
              Solicita información sobre retiro de amianto.
            </Typography>
            <BasicModal titulo={servicios[1].titulo} />
          </Box>
        </Grid>
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5}>
          <Box
            mb={{xs: 1, lg: 0}}
            p={2}
            bgcolor={"primary.main"}
            height={"320px"}
            width={"100%"}
            sx={{
              backgroundImage: `url("img/servicios/amianto.webp")`,
              backgroundSize: "cover",
            }}
          ></Box>
        </Grid>
      </Grid>
      {/* Seccion Tres */}
      <Grid
        container
        direction={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        maxWidth={"96%"}
        px={{xs: 1, lg: 12}}
        gap={{xs: 8, lg: 14}}
        my={16}
        py={2}
        borderLeft={4}
        borderColor={"primary.main"}
        bgcolor={"primary.opacity"}
      >
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5}>
          <Box
            mb={{xs: 1, lg: 0}}
            p={2}
            bgcolor={"primary.main"}
            height={"320px"}
            width={"100%"}
            sx={{
              backgroundImage: `url("img/servicios/reciclado.webp")`,
              backgroundSize: "cover",
            }}
          ></Box>
        </Grid>
        <Grid item xs={10} sm={8} md={6} lg={5} xl={5} py={2}>
          <Box textAlign={"left"}>
            <Typography variant="h1" color={"primary"} fontSize={"3rem"}>
              {servicios[2].titulo}
            </Typography>
            <Typography
              variant="body1"
              color={"paragraph.main"}
              mt={1}
              maxWidth={"96%"}
            >
              {servicios[2].descripcion}
            </Typography>
            <Typography variant="body1" color={"primary"} mt={3} mb={-3}>
              Solicita información sobre reciclaje / residuos.
            </Typography>
            <BasicModal titulo={servicios[2].titulo} />
          </Box>
        </Grid>
      </Grid>
      <Box
        display={"flex"}
        flexDirection={{xs: "column", md: "row"}}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Typography variant="h1" color={"primary"} borderRight={2} p={2}>
          Contacto
        </Typography>

        <Typography
          variant="body1"
          color={"paragraph"}
          width={{xs: "88%", sm: "32%"}}
          textAlign={{xs: "center", sm: "left"}}
          sx={{textWrap: "balance"}}
        >
          Francisco Ternero es una empresa especializada en derribos, retirada
          de amianto, excavaciones y demoliciones en Málaga. Más de 50 años de
          experiencia nos avalan. Llámenos sin compromiso!.
        </Typography>
      </Box>
      <Ubi />
    </section>
  );
}
