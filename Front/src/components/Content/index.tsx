import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};
const Content = ({ children }: ContentProps) => {
  return <>{children}</>;
};

export default Content;
