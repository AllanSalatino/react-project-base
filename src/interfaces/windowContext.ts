export interface IWindowContext {
  windowSize: number;
  setWindowSize: React.Dispatch<React.SetStateAction<number>>;
  toUp: () => void;
  getCoordinates: (elem: string) => Promise<void>;
  isMenu: boolean;
  setIsMenu: React.Dispatch<React.SetStateAction<boolean>>;
  navigate: any;
  pathname: any;
}
