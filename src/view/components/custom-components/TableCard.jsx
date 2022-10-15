import React from "react";
import { Row, Col, Card } from "antd";
import TableTitle from "./TableTitle";

const TableCard = ({ children }) => {

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

      {children}
    </Card>
  );
};

export default TableCard;
