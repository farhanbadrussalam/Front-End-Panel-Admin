import { useEffect, useState } from "react";

import List from "../../../components/custom-components/wo-list";

export default function WoList() {
  const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/wedding-organizers", {
  //     Authorization: "Bearer 4|9pYKgoiLEgVSAyG8ccvcy2PoQXaVEir95lpPGR2F",
  //     method: "GET",
  //   })
  //     .then((d) => console.log(d))
  //     .catch((e) => console.log(e));
  // }, []);
  return <List />;
}
