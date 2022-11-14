import { Row, Col } from "antd";

import TableDisplay from "../../../../components/custom-components/TableDisplay";
import TableCard from "../../../../components/custom-components/TableCard";
import Column from "./kategoriCol";
import { getProductCategories2 } from "../../../../../api/produk/product-categories/getProductCategories2";

const ProdukUcapanDigital = () => {
  let { data, deleteProductCategory } = getProductCategories2();

  data = data?.map((product) => {
    return {
      ...product,
      deleteProductCategory: deleteProductCategory,
    };
  });

  return (
    <TableCard back>
      <Row>
        <Col span={24}>
          <TableDisplay data={data} column={Column} addButton />
        </Col>
      </Row>
    </TableCard>
  );
};

export default ProdukUcapanDigital;
