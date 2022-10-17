import { Table, Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import TableSearch from "./TableSearch";

const TableDisplay = ({
  data,
  column,
  addButton,
  createLink = `${window.location.pathname}/create`,
}) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  return (
    <>
      <Row
        align="middle"
        justify="space-between"
        className="table-tools-container"
      >
        <Col lg={6} md={8} sm={10} span={12}>
          <TableSearch data={data} setTableData={setTableData} />
        </Col>
        {addButton ? (
          <Col span={10} className="button-right">
            <Link to={createLink}>
              <Button type="primary" danger size="small">
                Tambah Data
              </Button>
            </Link>
          </Col>
        ) : undefined}
      </Row>

      <Table
        size="small"
        columns={column}
        dataSource={tableData}
        scroll={{ x: 400 }}
        className="master-table"
        expandable={{
          expandedRowRender: () => (
            <div className="expanded-row">
              <p>Judul expanded row : </p>
              <ol>
                <li>list 1</li>
                <li>list 2</li>
              </ol>
            </div>
          ),
        }}
        pagination={{
          size: "small",
        }}
      />
    </>
  );
};

export default TableDisplay;
