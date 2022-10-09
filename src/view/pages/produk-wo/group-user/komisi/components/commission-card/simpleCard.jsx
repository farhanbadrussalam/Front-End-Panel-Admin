import React from "react";

import { Card, Row, Col, Button } from "antd";
import { RiCodeSSlashLine } from "react-icons/ri";

export default function SimpleCard() {
  return (
    <Card title="Nama Komisi" className="hp-elevatior">
      <p className="hp-p1-body">nominal</p>
      <p className="hp-p1-body">status</p>
    </Card>
  );
}
