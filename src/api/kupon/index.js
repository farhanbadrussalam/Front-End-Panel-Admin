import { useData } from "../apiTemplate";

export const useKuponData = () => {
  return useData("vouchers");
};
