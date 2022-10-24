import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";

import columns from "./UserColumn";

import { getArticleCategories } from "../../../../api/artikel/category";

export default function index() {
  let { data, error, destroy } = getArticleCategories();

  data = data.map((d) => {
    return {
      name: d.name,
      description: d.description,
      id: d.id,
      destroy,
    };
  });

  return (
    <>
      <TableCard back>
        <Row>
          <Col span={24}>
            <TableDisplay
              data={data}
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
