import { useEffect, useState } from "react";

import Card from "./components/commission-card";
import TableSearch from "../../../../components/custom-components/TableSearch";
import { Row, Col, Button } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function WOUserCommissionGroup({ match }) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(null);
  const { userid } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://127.0.0.1:8000/api/wedding-organizers/${userid}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => response.data.data)
      .then((data) => {
        setData(
          data.wedding_organizer_products.map((product) => {
            return {
              name: product.product_id,
              quota: product.quota,
              activeDate: product.active_date,
            };
          })
        );
      });
  }, []);

  console.log(data);
  return (
    <>
      <Row align="middle" justify="space-between" className="hp-mb-32">
        <Col lg={6} md={8} sm={10} span={21}>
          <TableSearch setData={setQuery} Data={query} />
        </Col>

        <Col span={3} className="button-right">
          <Button type="primary" danger size="small">
            Tambah Data
          </Button>
        </Col>
      </Row>
      <Row gutter={[32, 32]} className="hp-mb-32">
        {data.map((product) => {
          console.log(product.quota);
          return (
            <Col span={8}>
              <Card
                name={product.name}
                quota={product.quota}
                activeDate={product.activeDate}
              />
            </Col>
          );
        })}
        {/* <Col span={8}>
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
        </Col> */}
      </Row>
    </>
  );
}
