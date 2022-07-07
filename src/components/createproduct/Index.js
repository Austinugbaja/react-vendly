import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Layout, Button } from "antd";
const { Header, Sider, Content } = Layout;

const Home = () => {
  return (
    <Layout>
      <Sider className="h-screen bg-red-500">
        <p className="text-lg text-white">sidebar</p>
      </Sider>
      <Layout>
        <Header className=" bg-green-500 w-full">
          <Link to="/addproduct">
            <Button
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
            >
              CREATE PRODUCT
            </Button>
          </Link>
        </Header>
        <Content>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
