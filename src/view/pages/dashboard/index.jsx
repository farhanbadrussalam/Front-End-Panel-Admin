import React from "react";

import { Col, Row, Card, Statistic, Button, List, Avatar, Table } from "antd";
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

import { dummy } from "./dummy";
import { dummyColumns } from "./dummyColumns";

import "./style.css";

export default function DashBoard() {
  return (
    <>
      <Row gutter={[32, 32]}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total User"
              value={10827}
              prefix={<UserOctagon color="#f47373" size={30} />}
              // prefixCls="custom-dashboard-statistic"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Wedding Organizer"
              value={830}
              prefix={<SecurityUser color="#F45000" size={30} />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Pelanggan"
              value={9997}
              prefix={<Profile2User color="#F45000" size={30} />}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Pesanan"
              value={215402}
              prefix={<ShoppingCart color="#37d67a" />}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card>
            <Table
              dataSource={dummy}
              columns={dummyColumns}
              title={() => "Best Seller Products"}
              footer={() => {
                return (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button>Selengkapnya</Button>
                  </div>
                );
              }}
              pagination={false}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card>
            <Table
              dataSource={dummy}
              columns={dummyColumns}
              title={() => "Pesanan Terbaru"}
              footer={() => {
                return (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button>Selengkapnya</Button>
                  </div>
                );
              }}
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
