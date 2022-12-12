import { useAffiliatesData } from "../../../../api/afiliasi";
import { useCommisionData } from "../../../../api/komisi";

import { Row, Col } from "antd";

import TableCard from "../../../components/custom-components/TableCard";
import TableDisplay from "../../../components/custom-components/TableDisplay";
import ErrorPage from "../../../components/custom-components/Feedback/ErrorPage";

import columns from "./Commisions";
import { usePermissionContext } from "../../../../context/PermissionContext";

export default function index() {
  const { data, error, loading, method } = useCommisionData();
  const { permission } = usePermissionContext()

  if (error.getAll) return <ErrorPage message={"Gagal mengambil data!"} />;

  return (
    <>
      <TableCard customTitle="Pesanan">
        <Row>
          <Col span={24}>
            {loading.getAll ? (
              <TableDisplay
                loading
                column={columns}
                addButton
                colomWidth={600}
              />
            ) : (
              <TableDisplay
                data={data.map((d) => ({
                  name: d.name,
                  type: d.type,
                  nominal: d.nominal,
                  wo: d.wedding_organizer?.name,
                  status: d.status,
                  id: d.id,
                  destroy: method.destroy,
                  permission
                }))}
                column={columns}
                addButton
                createLink={`${window.location.pathname}/create`}
                colomWidth={600}
              />
            )}
          </Col>
        </Row>
      </TableCard>
    </>
  );
}
