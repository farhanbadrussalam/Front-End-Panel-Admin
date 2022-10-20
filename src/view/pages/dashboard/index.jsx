import React from "react";

import { Col, Row, Card, Statistic, Button, List, Avatar } from "antd";
import {
  UserAddOutlined,
  SettingOutlined,
  GiftTwoTone,
} from "@ant-design/icons";
import {
  UserOctagon,
  SecurityUser,
  Profile2User,
  ShoppingCart,
} from "iconsax-react";
import { dummy } from "./dummy.js";

import "./style.css";

export default function DashBoard() {
  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={7}>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            actions={[
              <UserAddOutlined key="edit" />,
              <SettingOutlined key="setting" />,
            ]}
          >
            <Statistic
              title="Total User"
              value={10827}
              prefix={<UserOctagon color="#f47373" size={30} />}
              // prefixCls="custom-dashboard-statistic"
            />
          </Card>
        </Col>
        <Col span={10}>
          <Row>
            <Col span={24}>
              <Card>
                <Statistic
                  title="Wedding Organizer"
                  value={830}
                  prefix={<SecurityUser color="#F45000" size={30} />}
                  suffix="/ 10,827"
                />
              </Card>

              <Card>
                <Statistic
                  title="Pelanggan"
                  value={9997}
                  prefix={<Profile2User color="#F45000" size={30} />}
                  suffix="/ 10,827"
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col span={7}>
          <Card
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            actions={[<Button>Kelola Products</Button>]}
          >
            <Statistic
              title="Pesanan"
              value={215402}
              prefix={<ShoppingCart color="#37d67a" />}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card>
            <List
              header="Best Seller"
              itemLayout="horizontal"
              dataSource={[
                { title: "product 1", description: "lorem ipsum dolor" },
                { title: "product 2", description: "lorem ipsum dolor" },
                { title: "product 3", description: "lorem ipsum dolor" },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<GiftTwoTone />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <List
              header="Pesanan Terbaru"
              itemLayout="horizontal"
              dataSource={[
                { title: "si A", description: "wo 1" },
                { title: "si B", description: "wo 2" },
                { title: "si C", description: "wo 3" },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                  ini adalah deskripsi dari produk. ini adalah deskripsi dari
                  produk. ini adalah deskripsi dari produk. ini adalah deskripsi
                  dari produk.
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
