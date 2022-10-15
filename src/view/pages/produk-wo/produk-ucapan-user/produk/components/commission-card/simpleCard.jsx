import React from "react";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function SimpleCard({ name, pengantin, quota, activeDate }) {
  console.log(name);
  return (
    <Card title={name} className="hp-elevatior">
      <p className="hp-p1-body">Pengantin : A & B</p>
      <p className="hp-p1-body">Quota : {quota}</p>
      <p className="hp-p1-body">Activate Date: {activeDate}</p>
    </Card>
  );
}
