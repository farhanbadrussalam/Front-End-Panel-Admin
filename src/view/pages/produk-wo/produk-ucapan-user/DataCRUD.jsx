import { Row, Col } from "antd";
import { useState } from "react";

import TableDisplay from "../../../components/custom-components/TableDisplay";
import TableCard from "../../../components/custom-components/TableCard";
import Column from "./DataColumn";
import Data from "./Data";

const DataCRUD = () => {
  const [data, setData] = useState([]);

  return (
    <TableCard setData={setData} Data={Data}>
      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} />
        </Col>
      </Row>
    </TableCard>
  );
};

export default DataCRUD;
