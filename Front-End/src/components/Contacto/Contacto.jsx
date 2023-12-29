import {Box, Typography} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import {useState} from "react";
import {
  errorNotifications,
  successNotifications,
} from "../../notifications/notifications";

export default function Contacto() {
  const [isActive, setIsActive] = useState(false);

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

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={{xs: "column", sm: "row"}}
      alignItems={"center"}
      gap={1}
      position={"fixed"}
      bottom={32}
      right={-2}
      color={"white.main"}
      bgcolor={"white.main"}
      border={2}
      borderColor={"primary.main"}
      p={1}
      sx={{
        cursor: "pointer",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isActive ? (
        <PermPhoneMsgIcon color="primary" />
      ) : (
        <ContactsIcon color="primary" />
      )}
      <Typography
        onClick={handlePhoneCopy}
        fontSize={"0.88rem"}
        color={"primary"}
        sx={{cursor: "pointer"}}
      >
        {isActive ? "629 823 538" : "Llámanos"}
      </Typography>
    </Box>
  );
}
