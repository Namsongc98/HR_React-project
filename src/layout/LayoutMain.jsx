import React from "react";
import { Outlet } from "react-router";
import { HeaderMain } from "./components/HeaderMain";
import { SidebarMain } from "./components/SidebarMain";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";



const LayoutMain = () => {
  return (
    <Layout className="h-screen">
      <HeaderMain />
      <Layout >
        <Sider className="bg-white">
          <SidebarMain />
        </Sider>
        <Content >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain
