import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};
const Content = ({ children }: ContentProps) => {
  return <div className="pt-14 w-full h-full">{children}</div>;
};

export default Content;
