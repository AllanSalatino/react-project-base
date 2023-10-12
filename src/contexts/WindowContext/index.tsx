import { createContext, useState } from "react";
import { IChildren } from "../../interfaces/generics";
import { IWindowContext } from "../../interfaces/windowContext";
import { useNavigate, useParams } from "react-router-dom";

export const WindowContext = createContext({} as IWindowContext);

const WindowProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const pathname = useParams();

  // Verifica se o menu está aberto ou fechado
  const [isMenu, setIsMenu] = useState<boolean>(false);

  // Verifica a largura da pagina
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  window.addEventListener("resize", function () {
    setWindowSize(window.innerWidth);
    if (this.window.innerWidth < 1024) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  });
  //

  // Sobre até o topo da pagina
  const toUp = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  //

  // Scroll até a parte celecionada
  const getCoordinates = async (elem: string) => {
    const redirect = document.getElementById(elem);

    const coordinates = redirect?.getBoundingClientRect();

    window.scrollTo({ top: coordinates?.top, behavior: "smooth" });
  };
  //

  return (
    <WindowContext.Provider
      value={{
        windowSize,
        setWindowSize,
        getCoordinates,
        toUp,
        isMenu,
        setIsMenu,
        navigate,
        pathname,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
