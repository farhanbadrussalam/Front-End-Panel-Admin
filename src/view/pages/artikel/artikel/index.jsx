import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";

import columns from "./UserColumn";

import { getArticles } from "../../../../api/artikel";

export default function index() {
  let { data, error, destroy } = getArticles();

  data = data.map((d) => {
    return {
      name: d.title,
      status: d.status,
      article_category: d.article_category ? d.article_category.name : "",
      id: d.id,
      destroy,
    };
  });

  return (
    <>
      <TableCard>
        <Row>
          <Col span={24}>
            <TableDisplay
              data={data}
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
