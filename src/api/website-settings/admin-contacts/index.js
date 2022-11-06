import { useEffect, useState } from "react";
import { api } from "../../../configs/apiConfig";

export const contactsTest = () => {
  const [contacts, setContacts] = useState([{}]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [changed, setChanged] = useState(true);

  useEffect(() => {
    if (changed) {
      resetControlFlowState();

      api
        .get("admin-contacts")
        .then((d) => setContacts(d.data.data))
        .catch((e) => setError(e))
        .finally(() => setLoading(false));
    }
  }, [changed]);

  const resetControlFlowState = () => {
    setError("");
    setLoading(true);
    setChanged(false);
  };

  const getAll = async () => {
    resetControlFlowState();

    return await api
      .get("admin-contacts")
      .then((d) => d.data.data)
      .catch((e) => e)
      .finally(() => setLoading(false));
  };

  const destroy = async (id) => {
    resetControlFlowState();
    return await api
      .delete(`admin-contacts/destroy/${id}`)
      .then(() => setChanged(true))
      .catch((e) => e)
      .finally(() => setLoading(false));
  };

  const update = async (id, data) => {
    resetControlFlowState();
    api
      .put(`admin-contacts/update/${id}`)
      .then(() => setChanged(true))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  return { contacts, error, loading, method: { getAll, destroy, update } };
};
