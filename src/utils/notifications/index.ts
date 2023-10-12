import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Função para exibir uma notificação de sucesso
export const showSuccess = (message: string, duration: number = 3000) => {
  toast.success(message, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

// Função para exibir uma notificação de atenção
export const showAttention = (message: string, duration: number = 3000) => {
  toast.warning(message, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

// Função para exibir uma notificação de falha
export const showFail = (message: string, duration: number = 3000) => {
  toast.error(message, {
    position: "top-right",
    autoClose: duration,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
