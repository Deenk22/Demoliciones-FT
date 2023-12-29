import {Box, Typography} from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import {useState} from "react";

export default function Contacto() {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <Box display={"flex"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={1}
        color={"white.main"}
        position={"fixed"}
        bottom={32}
        right={0}
        bgcolor={"white.main"}
        border={2}
        borderColor={"primary.main"}
        p={1}
        sx={{
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isActive ? (
          <PermPhoneMsgIcon fontSize="medium" color="primary" />
        ) : (
          <ContactsIcon fontSize="medium" color="primary" />
        )}
        <Typography variant="body2" fontSize={"0.88rem"} color={"primary"}>
          {isActive ? " +34 629 823 538" : "Llámanos"}
        </Typography>
      </Box>
    </Box>
  );
}
