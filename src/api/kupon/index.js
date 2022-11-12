import { useData } from "../apiTemplate";
import { create } from "../apiTemplate";
import { getDetail } from "../apiTemplate";

export const useKuponData = () => useData("vouchers");

export const useKuponDetail = (id) => getDetail("vouchers", id);

export const createKupon = (value) => create("vouchers", value);
