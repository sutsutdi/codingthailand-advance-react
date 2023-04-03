import { Button } from "@mui/material";
import { toast ,Toaster } from "react-hot-toast";


const showAlert = () => {
  toast.success("this is success", {
    position: "top-right",
    style: {
      borderRadius: "50px",
    },
  });
};

const ToastTest = () => {
  return (
    <>
      <Button onClick={showAlert} variant="outlined">
        Click for Toast
      </Button>
      <Toaster />
    </>
  );
};
export default ToastTest;
