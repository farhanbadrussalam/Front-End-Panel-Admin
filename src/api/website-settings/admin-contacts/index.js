import { useEffect, useState } from "react";
import { api } from "../../../configs/apiConfig";

const METHOD_ID = {
  GET_ALL_DATA: "getAll",
  DESTROY_DATA: "destroy",
  UPDATE_DATA: "update",
  CREATE_DATA: "create",
};

export const contactsTest = () => {
  const [data, setData] = useState([{}]);
  const [changed, setChanged] = useState(true);
  const [error, setError] = useState({
    getAll: null,
    destroy: null,
    update: null,
    create: null,
  });
  const [loading, setLoading] = useState({
    getAll: true,
    destroy: false,
    update: false,
    create: false,
  });

  const generateApi = (methodId, url, id = null, value = null) => {
    setLoading((prev) => ({ ...prev, [methodId]: true }));
    setError({ ...error, [methodId]: null });

    let req;

    url = id ? `${url}/${id}` : url;

    switch (methodId) {
      case METHOD_ID.GET_ALL_DATA:
        req = api.get(url);
        break;
      case METHOD_ID.CREATE_DATA:
        setChanged(false);
        req = api.post(url, value);
        break;
      case METHOD_ID.UPDATE_DATA:
        setChanged(false);
        req = api.put(url, value);
        break;
      case METHOD_ID.DESTROY_DATA:
        setChanged(false);
        req = api.delete(url);
        break;
      default:
        throw "methodId may be wrong!";
    }

    req =
      methodId === METHOD_ID.GET_ALL_DATA
        ? req.then((d) => {
            setData(d.data.data);
            return d;
          })
        : req.then((d) => {
            setChanged(true);
            setChanged(true);
            return d;
          });

    return req
      .catch((e) => setError({ ...error, [methodId]: e }))
      .finally(() =>
        setTimeout(() => {
          setLoading((prev) => ({ ...prev, [methodId]: false }));
        }, 0)
      );
  };

  useEffect(() => {
    if (changed) {
      generateApi(METHOD_ID.GET_ALL_DATA, "admin-contacts");
    }
  }, [changed]);

  const getAll = () => {
    return generateApi(METHOD_ID.GET_ALL_DATA, "admin-contacts");
  };

  const destroy = (id) => {
    return generateApi(METHOD_ID.DESTROY_DATA, "admin-contacts/destroy", id);
  };

  const update = (id, data) => {
    return generateApi(
      METHOD_ID.UPDATE_DATA,
      "admin-contacts/update",
      id,
      data
    );
  };

  const create = (value) => {
    return generateApi(
      METHOD_ID.CREATE_DATA,
      "admin-contacts/store",
      null,
      value
    );
  };

  return {
    data,
    error,
    loading,
    method: { getAll, destroy, update, create },
  };
};
