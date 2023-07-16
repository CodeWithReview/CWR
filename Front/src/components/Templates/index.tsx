import { Outlet } from "react-router";
import Header from "@/components/Header";
import Content from "@/components/Content";

const Templates = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Templates;
