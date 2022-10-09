import React from "react";
import { Row, Col, Card, Button } from "antd";
import TableTitle from "./TableTitle";
import TableSearch from "./TableSearch";

const TableCard = ({ children, setData, Data }) => {
  return (
    <Card
      bodyStyle={{ padding: "15px 20px" }}
      xs={{ padding: "100px" }}
      className="custom-component-table-card"
    >
      <Row>
        <Col>
          <TableTitle />
        </Col>
      </Row>

      <Row
        align="middle"
        justify="space-between"
        className="table-tools-container"
      >
        <Col lg={6} md={8} sm={10} span={12}>
          <TableSearch setData={setData} Data={Data} />
        </Col>
        <Col span={10} className="button-right">
          <Button type="primary" danger size="small">
            Tambah Data
          </Button>
        </Col>
      </Row>

      {children}
    </Card>
  );
};

export default TableCard;
