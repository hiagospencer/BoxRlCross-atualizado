import { toast } from "react-toastify";


export function notifyError() {
  toast.error("[ERROR] Tente novamente.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
