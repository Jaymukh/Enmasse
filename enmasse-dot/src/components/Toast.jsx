import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
    const config = {
        autoClose: 2000,
        theme: "dark",
        draggable: false,
        position: toast.POSITION.TOP_CENTER,
        rtl: true,
        hideProgressBar: true,
        closeButton: false,
      };
    return (
        <div>
            <ToastContainer />
        </div>
    )
}

export default Toast;