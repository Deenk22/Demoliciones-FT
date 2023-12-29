import styled from "@emotion/styled";
import {Box, Paper, Typography} from "@mui/material";

export default function CardHeader({titulo, descripcion, img}) {
  const Img = styled("img")({
    width: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  });

  return (
    <Paper
      elevation={7}
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
      <Box bgcolor={"primary.main"} p={1} mt={-1}>
        <Typography variant="h6" color={"white.main"} ml={2} mb={-0.5} p={1}>
          {titulo}
        </Typography>
      </Box>
      <Typography variant="body1" color={"typography"} width={"96%"} p={3}>
        {descripcion}
      </Typography>
    </Paper>
  );
}
