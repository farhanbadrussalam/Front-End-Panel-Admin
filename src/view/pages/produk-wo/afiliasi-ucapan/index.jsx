import React from "react";
import List from "../../../components/custom-components/wo-list";

const data = [
  {
    title: "Nama WO-1",
    description: "phone | email",
    key: "id-wo-1",
    link: "afiliasi-ucapan/id-wo-1",
  },
  {
    title: "Nama WO-2",
    description: "phone | email",
    key: "id-wo-2",
    link: "afiliasi-ucapan/id-wo-2",
  },
  {
    title: "Nama WO-3",
    description: "phone | email",
    key: "id-wo-3",
    link: "afiliasi-ucapan/id-wo-3",
  },
  {
    title: "Nama WO-4",
    description: "phone | email",
    key: "id-wo-4",
    link: "afiliasi-ucapan/id-wo-4",
  },
];

const index = () => {
  return <List dataWO={data} />;
};

export default index;
