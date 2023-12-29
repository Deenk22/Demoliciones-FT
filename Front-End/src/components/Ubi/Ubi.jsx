import {Box, Typography} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

export default function Ubi() {
  return (
    <Box
      display={"flex"}
      flexDirection={{xs: "column", md: "row"}}
      justifyContent={"center"}
      gap={{xs: 4, sm: 4, md: 4, lg: 0}}
      mt={16}
      mb={8}
      mx={{xs: 4, sm: 0}}
      borderTop={2}
      borderColor={"primary.main"}
      p={8}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        bgcolor={"primary.main"}
        borderRadius={4}
        gap={1}
        p={2}
        width={{xs: "100%", sm: "88%", md: "72%", lg: "22%", xl: "24%"}}
      >
        <PersonPinIcon sx={{fontSize: 64}} color="white" />
        <Typography variant="h6" color={"white.main"}>
          Ubicación
        </Typography>
        <Typography variant="body2" color={"white.main"}>
          Calle Montserrat, 40 2ºA / Málaga
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        bgcolor={"primary.main"}
        borderRadius={4}
        gap={1}
        p={2}
        width={{xs: "100%", sm: "88%", md: "72%", lg: "22%", xl: "24%"}}
      >
        <PhoneForwardedIcon sx={{fontSize: 64}} color="white" />
        <Typography variant="h6" color={"white.main"}>
          Llámanos al
        </Typography>
        <Typography variant="body2" color={"white.main"}>
          <strong>952 25 57 21</strong>
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        bgcolor={"primary.main"}
        borderRadius={4}
        gap={1}
        p={2}
        width={{xs: "100%", sm: "88%", md: "72%", lg: "22%", xl: "24%"}}
      >
        <ForwardToInboxIcon sx={{fontSize: 64}} color="white" />
        <Typography variant="h6" color={"white.main"}>
          Escríbenos a
        </Typography>
        <Typography variant="body2" color={"white.main"}>
          gerencia@franciscoternero.es
        </Typography>
      </Box>
    </Box>
  );
}
