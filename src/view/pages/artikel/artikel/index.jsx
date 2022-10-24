import { useParams } from "react-router-dom";

import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";

import columns from "./UserColumn";

import { getArticles } from "../../../../api/artikel/getArticles";

export default function index() {
  let { simpleData, error } = getArticles();
  const { userid } = useParams();

  return (
    <>
      <TableCard>
        <Row>
          <Col span={24}>
            <TableDisplay
              data={simpleData}
              column={columns}
              addButton={true}
              createLink={`${window.location.pathname}create`}
              otherButton={[
                {
                  name: "Kategori Artikel",
                  link: "/admin/kategori-artikel",
                },
              ]}
            />
          </Col>
        </Row>
      </TableCard>
    </>
  );
}
