import { Row, Col } from "antd";

import TableCard from "../../components/custom-components/TableCard";
import TableDisplay from "../../components/custom-components/TableDisplay";

import columns from "./KuponColumns";

export default function index() {
  return (
    <>
      <TableCard customTitle="Artikel">
        <Row>
          <Col span={24}>
            <TableDisplay
              data={data}
              column={columns}
              addButton={true}
              createLink={`${window.location.pathname}/create`}
            />
          </Col>
        </Row>
      </TableCard>
    </>
  );
}
