import React from "react";
import axios from "axios";

import { Col, Row } from "antd";
import Cards from "./Cards";
import { dummy } from "./dummy.js";

export default function DashBoard() {
  React.useEffect(() => {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/wedding-organizers",
      headers: {
        Authorization: "Bearer 12|3LPTRjCLtv4QapwNzdUJPRz9vJPNDic0Qp5HMp48",
      },
    }).then((d) => console.log(d));
  }, []);
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

{
  /* <Col span={24}>
  <Card bordered={false} size='small' className="card">
    <div className="greet">
      <Sun1 className="sun-icon" />
      <p>Selamat Pagi, Admin</p>
    </div>
  </Card>
</Col> */
}
