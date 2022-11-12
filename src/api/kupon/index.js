import { useData } from "../apiTemplate";
import { create } from "../apiTemplate";

export const useKuponData = () => {
  return useData("vouchers");
};

export const createKupon = (value) => create("vouchers", value);
