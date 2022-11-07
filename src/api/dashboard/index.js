import { useEffect, useState } from "react";

import { api } from "../../configs/apiConfig";

// export const getCount = (url = "dashboard/counts") => {
//   const [data, setData] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     setError("");

//     api
//       .get(url)
//       .then((d) => setData(d))
//       .catch((e) => setError(e))
//       .finally(() => setLoading(false));
//   }, []);

//   return {
//     dataCountDashboard: data,
//     errorCountDashboard: error,
//     loadingCountDashboard: loading,
//   };
// };

// export const getBestSelling = (url = "dashboard/best-selling") => {
//   const [data, setData] = useState({});
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     setError("");

//     api
//       .get(url)
//       .then((d) => setData(d))
//       .catch((e) => setError(e))
//       .finally(() => setLoading(false));
//   }, []);

//   return {
//     dataBestSelling: data,
//     errorBestSelling: error,
//     loadingBestSelling: loading,
//   };
// };

function factoryFetcher(url) {
  return () => {
    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
      setError("");

      api
        .get(url)
        .then((d) => setData(d.data.data))
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }, []);

    return { data, error, loading };
  };
}

export const getCount = factoryFetcher("dashboard/counts");
export const getBestSelling = factoryFetcher("dashboard/best-selling");
