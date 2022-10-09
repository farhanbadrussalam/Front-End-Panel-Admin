import React, { useState } from "react";

import { Link } from "react-router-dom";

import TableTitle from "../TableTitle.jsx";

import { Card, Row, Col, List } from "antd";

export default function CommisionList({ dataWO }) {
  const data = [
    {
      title: "WO 1",
      description: "phone | email",
      key: "id-wo-1",
    },
    {
      title: "WO 2",
      description: "phone | email",
      key: "id-wo-2",
    },
    {
      title: "WO 3",
      description: "phone | email",
      key: "id-wo-3",
    },
    {
      title: "WO 4",
      description: "phone | email",
      key: "id-wo-4",
    },
  ];

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col>
          <TableTitle />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            pagination={{
              size: "small",
            }}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={
                    <Link to={`group-user/${item.key}`}>
                      {item.title} ({item.key})
                    </Link>
                  }
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </Card>
  );
}
