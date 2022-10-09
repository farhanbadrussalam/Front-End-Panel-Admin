import Card from "./components/commission-card";

import { Row, Col } from "antd";

export default function WOUserCommissionGroup({ match }) {
  return (
    <>
      <h1>{match.params.userid}</h1>
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
