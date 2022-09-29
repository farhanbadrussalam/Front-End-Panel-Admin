import React from "react";
import { Card, Col, Row } from "antd";
import { Sun1 } from "iconsax-react";

const dummy = [
  {
    icon: Sun1,
    value: 10,
    text: "Dummy Data"
  },
  {
    icon: Sun1,
    value: 10,
    text: "Dummy Data"
  },
  {
    icon: Sun1,
    value: 10,
    text: "Dummy Data"
  },
  {
    icon: Sun1,
    value: 10,
    text: "Dummy Data"
  },
]

export default function DashBoard() {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Row gutter={[24, 24]} className="card-container">
              {dummy.map((data) => (
                <Col lg={6} sm={12} span={24}>
                  <Card bordered={false} size="small" className="cards">
                    <div className="content">
                      <data.icon className="icon" />
                      <div className="desc">
                        <p>{data.value}</p>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

{/* <Col span={24}>
  <Card bordered={false} size='small' className="card">
    <div className="greet">
      <Sun1 className="sun-icon" />
      <p>Selamat Pagi, Admin</p>
    </div>
  </Card>
</Col> */}