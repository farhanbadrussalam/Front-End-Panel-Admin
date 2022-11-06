import { useEffect, useState } from "react";
import { api } from "../../../configs/apiConfig";

const METHOD_ID = {
  GET_ALL_DATA: "getAll",
  DESTROY_DATA: "destroy",
  UPDATE_DATA: "update",
  CREATE_DATA: "create",
};

export const contactsTest = () => {
  const [contacts, setContacts] = useState([{}]);
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

  const resetControlFlowState = (methodId) => {
    setError({ ...error, [methodId]: null });
    setLoading({ ...loading, [methodId]: true });
    setChanged(false);
  };

  const generateApi = (methodId, id = null, value = null, url) => {
    resetControlFlowState(methodId);
    let req;

    switch (methodId) {
      case METHOD_ID.GET_ALL_DATA:
        req = api.get(url);
        break;
      case METHOD_ID.CREATE_DATA:
        req = api.post(url);
        break;
      case METHOD_ID.UPDATE_DATA:
        req = api.put(url);
        break;
      case METHOD_ID.DESTROY_DATA:
        req = api.delete(url);
        break;
      default:
        throw "methodId may be wrong!";
    }

    if (methodId === METHOD_ID.GET_ALL_DATA) {
      return req
        .then((d) => {
          setContacts(d.data.data);
          return d;
        })
        .catch((e) => setError({ ...error, getAll: e }))
        .finally(() => setLoading({ ...loading, getAll: false }));
    }

    return req
      .then((d) => {
        setChanged(true);
        return d;
      })
      .catch((e) => setError({ ...error, [methodId]: e }))
      .finally(() => setLoading({ ...loading, [methodId]: false }));
  };

  useEffect(() => {
    if (changed) {
      resetControlFlowState(METHOD_ID.GET_ALL_DATA);

      setTimeout(() => {
        api
          .get("admin-contacts")
          .then((d) => setContacts(d.data.data))
          .catch((e) => setError({ ...error, getAll: e }))
          .finally(() => setLoading({ ...loading, getAll: false }));
      }, 2000);
    }
  }, [changed]);

  const getAll = async () => {
    resetControlFlowState(METHOD_ID.GET_ALL_DATA);

    return await api
      .get("admin-contacts")
      .then((d) => d.data.data)
      .catch((e) => setError({ ...error, getAll: e }))
      .finally(() =>
        setLoading({ ...loading, [METHOD_ID.GET_ALL_DATA]: false })
      );
  };

  const destroy = async (id) => {
    resetControlFlowState(METHOD_ID.DESTROY_DATA);

    return await api
      .delete(`admin-contacts/destroy/${id}`)
      .then((d) => {
        setChanged(true);
        return d;
      })
      .catch((e) => setError({ ...error, destroy: e }))
      .finally(() => setLoading({ ...loading, destroy: false }));
  };

  const update = async (id, data) => {
    resetControlFlowState(METHOD_ID.UPDATE_DATA);

    return await api
      .put(`admin-contacts/update/${id}`, data)
      .then((d) => {
        setChanged(true);
        return d;
      })
      .catch((e) => setError({ ...error, update: e }))
      .finally(() => setLoading({ ...loading, update: false }));
  };

  const create = async (value) => {
    resetControlFlowState(METHOD_ID.CREATE_DATA);

    return await api
      .post("admin-contacts", value)
      .then((d) => {
        setChanged(true);
        return d;
      })
      .catch((e) => setError({ ...error, create: e }))
      .finally(() => setLoading({ ...loading, create: false }));
  };

  return {
    contacts,
    error,
    loading,
    method: { getAll, destroy, update, create },
  };
};
