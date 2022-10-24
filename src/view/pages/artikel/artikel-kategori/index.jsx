import { useParams } from "react-router-dom";

import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";

import columns from "./UserColumn";

import { getArticleCategories } from "../../../../api/artikel/category/getCategories";

export default function index() {
  let { simpleData, error } = getArticleCategories();
  const { userid } = useParams();

  return (
    <>
      <TableCard back>
        <Row>
          <Col span={24}>
            <TableDisplay
              data={simpleData}
              column={columns}
              addButton={true}
              createLink="/admin/kategori-artikel/create"
            />
          </Col>
        </Row>
      </TableCard>
    </>
  );
}
