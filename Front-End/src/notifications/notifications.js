import toast from "react-hot-toast";

const toastStylesSuccess = {
  duration: 2500,
  position: "top-center",
  style: {
    marginTop: "64px",
    padding: 16,
    fontFamily: "sans-serif",
    backgroundColor: "#004197",
    color: "#ffffff",
  },
};

const toastStylesError = {
  duration: 2500,
  position: "top-center",
  style: {
    marginTop: "64px",
    padding: 16,
    fontFamily: "sans-serif",
    backgroundColor: "#004197",
    color: "#ffffff",
  },
};

export const successNotifications = (message) => {
  toast.success(message, toastStylesSuccess);
};

export const errorNotifications = (message) => {
  toast.error(message, toastStylesError);
};
