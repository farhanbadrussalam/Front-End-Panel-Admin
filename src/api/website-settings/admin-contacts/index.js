import { useData } from "../apiTemplate";

export const contacts = (url) => {
  return useData("admin-contacts");
};
