import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";

import columns from "./ArticleColumn";

import { getArticles } from "../../../../api/artikel";
import { asset } from "../../../../configs/apiConfig";
import { usePermissionContext } from "../../../../context/PermissionContext";

export default function index() {
  let { data, error, destroy } = getArticles();
  const { permission } = usePermissionContext()

  data = data
    .filter((d) => d.id !== undefined)
    .map((d) => {
      return {
        thumbnail: `http://127.0.0.1:8000/uploads/${d.thumbnail}`,
        name: d.title,
        status: d.status == 1 ? "Aktif" : "Non Aktif",
        article_category: d.article_category ? d.article_category.name : "",
        id: d.id,
        destroy,
        permission
      };
    });

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
              otherButton={[
                {
                  name: "Kelola Kategori",
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
