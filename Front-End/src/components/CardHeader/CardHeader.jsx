import {Box, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled";

export default function CardHeader({...props}) {
  const {titulo, descripcion, img} = props;

  const Img = styled("img")({
    width: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  });

  return (
    <Paper
      elevation={16}
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        bottom: 128,
        borderRadius: 4,
        bgcolor: "white.main",
      }}
    >
      <Img src={img} alt={titulo} />
      <Box
        bgcolor={"primary.main"}
        mt={-1}
        p={2}
        sx={{
          backgroundImage: `linear-gradient(to left, rgba(0, 65, 151, 0.1) 0%, rgba(0, 65, 151, 1) 100%), url("img/bg-section.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography variant="h6" component={"h1"} color={"white.main"} mt={0.5}>
          {titulo}
        </Typography>
      </Box>
      <Typography variant="body1" color={"paragraph"} p={3}>
        {descripcion}
      </Typography>
    </Paper>
  );
}
