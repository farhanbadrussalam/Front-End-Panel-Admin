import { useParams } from "react-router-dom";

import { getProducts } from "../../../../api/produk-wo/getProducts";

import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";

import Column from "./UserColumn";

export default function index() {
  const { data } = getProducts();
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
