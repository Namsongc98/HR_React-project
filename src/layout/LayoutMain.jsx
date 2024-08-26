import React from "react";
import { Outlet } from "react-router";
import { HeaderMain } from "./components/HeaderMain";
import { SidebarMain } from "./components/SidebarMain";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";


const contentStyle = {
  padding: '32px',
};
const LayoutMain = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderMain />
      <Layout >
        <Sider >
          <SidebarMain />
        </Sider>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain
