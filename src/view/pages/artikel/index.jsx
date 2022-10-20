import { useParams } from "react-router-dom";

import { Row, Col } from "antd";

import TableCard from "../../components/custom-components/TableCard";
import TableDisplay from "../../components/custom-components/TableDisplay";

import Column from "./UserColumn";
import { useState } from "react";

export default function index() {
  const [data, setData] = useState([
    {
      name: "tes",
      slug: "tes",
      description: "tes",
      status: 1,
    },
    {
      name: "tes",
      slug: "tes",
      description: "tes",
      status: 1,
    },
    {
      name: "tes",
      slug: "tes",
      description: "tes",
      status: 1,
    },
    {
      name: "tes",
      slug: "tes",
      description: "tes",
      status: 1,
    },
    {
      name: "tes",
      slug: "tes",
      description: "tes",
      status: 1,
    },
  ]);
  const { userid } = useParams();

  return (
    <>
      <TableCard>
        <Row>
          <Col span={24}>
            <TableDisplay
              data={data}
              column={Column}
              addButton={true}
              createLink={`${window.location.pathname
                .replace(`/${userid}`, "")
                .replace(/\s\s+/g, " ")}/create/${userid}`}
            />
          </Col>
        </Row>
      </TableCard>
    </>
  );
}
