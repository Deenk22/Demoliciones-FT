import {Box, Typography} from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import {
  errorNotifications,
  successNotifications,
} from "../../notifications/notifications";

export default function Ubi() {
  const handleEmailClick = (event) => {
    window.location.href = `mailto:${event.target.textContent}`;
  };

  const handlePhoneCopy = (event) => {
    const phoneNumber = event.target.textContent;
    navigator.clipboard.writeText(phoneNumber).then(
      function () {
        const message = "Copiado con Éxito";
        successNotifications(message);
      },
      function () {
        const message = "Error al copiar el número de teléfono";
        errorNotifications(message);
      }
    );
  };

  return (
    <Box
      display={"flex"}
      flexDirection={{xs: "column", md: "row"}}
      justifyContent={"center"}
      gap={{xs: 4, sm: 4, md: 4, lg: 0}}
      mt={16}
      mb={8}
      mx={{xs: 4, sm: 4}}
      borderLeft={4}
      borderRight={4}
      borderColor={"primary.main"}
      bgcolor={"primary.opacity"}
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
        <Typography variant="body1" color={"white.main"}>
          Ubicación
        </Typography>
        <Typography
          variant="body2"
          color={"white.main"}
          mt={-1}
          textAlign={"center"}
        >
          Camino MedioAmbiental, Nº 23 / Málaga / CP: 29010.
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
        <Typography variant="body1" color={"white.main"}>
          Llámanos al
        </Typography>
        <Typography
          onClick={handlePhoneCopy}
          variant="body1"
          color={"white.main"}
          mt={-1}
          sx={{cursor: "pointer"}}
        >
          952 25 57 21
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
        <Typography variant="body1" color={"white.main"}>
          Escríbenos a
        </Typography>
        <Typography
          onClick={handleEmailClick}
          variant="body2"
          color={"white.main"}
          mt={-1}
          sx={{cursor: "pointer"}}
        >
          gerencia@franciscoternero.es
        </Typography>
      </Box>
    </Box>
  );
}
