import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getUsers } from "../../../../../api/kelola-user/getUser";

import TableSearch from "../../../../components/custom-components/TableSearch";
import Card from "./components/commission-card";
import { Row, Col, Button } from "antd";

import TableCard from "../../../../components/custom-components/TableCard";
import TableDisplay from "../../../../components/custom-components/TableDisplay";

import Column from "./UserColumn";

export default function WOUserCommissionGroup({ match }) {
  const [data, setData] = useState();
  const [query, setQuery] = useState(null);
  const { userid } = useParams();

  // const { data } = getUsers();

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
        setData(data.wedding_organizer_products);
      });
  }, []);
  console.log(data);

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
