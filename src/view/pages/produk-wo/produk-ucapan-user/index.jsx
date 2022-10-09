import React from "react";
import List from "../../../components/custom-components/wo-list";

const data = [
  {
    title: "WO-1",
    description: "phone | email",
    key: "id-wo-1",
    link: "produk-ucapan-user/id-wo-1",
  },
  {
    title: "WO-2",
    description: "phone | email",
    key: "id-wo-2",
    link: "produk-ucapan-user/id-wo-2",
  },
  {
    title: "WO-3",
    description: "phone | email",
    key: "id-wo-3",
    link: "produk-ucapan-user/id-wo-3",
  },
  {
    title: "WO-4",
    description: "phone | email",
    key: "id-wo-4",
    link: "produk-ucapan-user/id-wo-4",
  },
];

const index = () => {
  return <List dataWO={data} />;
};

export default index;
