import { useState } from "react";

import Card from "./components/commission-card";
import TableSearch from "../../../../components/custom-components/TableSearch";
import { Row, Col, Button } from "antd";

export default function WOUserCommissionGroup({ match }) {
  const [data, setData] = useState(null);
  return (
    <>
      <Row align="middle" justify="space-between" className="hp-mb-32">
        <Col lg={6} md={8} sm={10} span={21}>
          <TableSearch setData={setData} Data={data} />
        </Col>

        <Col span={3} className="button-right">
          <Button type="primary" danger size="small">
            Tambah Data
          </Button>
        </Col>
      </Row>

      <Row gutter={[32, 32]} className="hp-mb-32">
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
        <Col span={8}>
          <Card />
        </Col>
      </Row>
    </>
  );
}
