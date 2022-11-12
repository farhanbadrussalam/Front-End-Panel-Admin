import { Row, Col } from "antd";

import { useKuponData } from "../../../api/kupon";

import TableCard from "../../components/custom-components/TableCard";
import TableDisplay from "../../components/custom-components/TableDisplay";

import columns from "./KuponColumns";

export default function index() {
  const { data, detailData, error, loading, method } = useKuponData();

  return (
    <>
      <TableCard customTitle="Artikel">
        <Row>
          <Col span={24}>
            <TableDisplay
              data={data?.map((d) => {
                return {
                  name: d.name,
                  type: d.type,
                  nominal: d.nominal,
                  status: d.status,
                  id: d.id,
                  destroy: method.destroy,
                };
              })}
              column={columns}
              addButton={method.create}
              createLink={`${window.location.pathname}/create`}
              colomWidth={600}
            />
          </Col>
        </Row>
      </TableCard>
    </>
  );
}
