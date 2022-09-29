import React from "react";
import { Col, Row } from "antd";
import Cards from './Cards'
import { dummy } from './dummy.js'

export default function DashBoard() {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Row gutter={[24, 24]} className="card-container">
              {dummy?.map((data) => (
                <Cards data={data} />
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