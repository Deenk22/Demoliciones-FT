import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {useState} from "react";
import CloseIcon from "@mui/icons-material/Close";
import MailForm from "../MailForm/MailForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "16px",
  p: 4,
};

export default function BasicModal({...props}) {
  const {titulo} = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box marginTop={4}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{display: "flex", gap: 1}}
      >
        <ContactMailIcon /> Contáctanos
      </Button>
      <Modal
        sx={{width: "100%"}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          width={336}
        >
          <CloseIcon
            fontSize="medium"
            sx={{
              position: "relative",
              top: -16,
              left: 140,
              cursor: "pointer",
              border: 2,
              borderRadius: 2,
              transition: "0.2s",
              "&:hover": {
                backgroundColor: "primary.main",
                color: "white.main",
              },
            }}
            color="primary"
            onClick={handleClose}
          />
          <MailForm titulo={titulo} setOpen={setOpen} />
        </Box>
      </Modal>
    </Box>
  );
}
