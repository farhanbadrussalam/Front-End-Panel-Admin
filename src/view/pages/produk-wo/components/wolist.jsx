// import { useEffect, useState } from "react";
// import axios from "axios";

// import List from "../../../components/custom-components/wo-list";

export default function WoList({ baseLink }) {
  // const [data, setData] = useState([{}]);
  // useEffect(async () => {
  //   await axios({
  //     method: "GET",
  //     url: "https://apiwo.tokoweb.live/api/wedding-organizers",
  //     headers: {
  //       Authorization: localStorage.getItem("token"),
  //     },
  //   })
  //     .then((d) => {
  //       console.log(d.data.data);
  //       setData(
  //         d.data.data.map((dataChunk) => {
  //           return {
  //             title: dataChunk.name,
  //             description: `${dataChunk.phone} | ${dataChunk.email}`,
  //             key: dataChunk.id,
  //             link: `${baseLink}/${dataChunk.id}`,
  //           };
  //         })
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  // console.log(data);

  return <div></div>;
}
