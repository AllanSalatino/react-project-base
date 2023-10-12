import { IChildren } from "../interfaces/generics";
import WindowProvider from "./WindowContext";

const Providers = ({ children }: IChildren) => {
  return <WindowProvider>{children}</WindowProvider>;
};

export default Providers;
