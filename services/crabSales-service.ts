import axios from "axios";
import { ICrabSalesReturn, ICrabSalesPost } from "interfaces/crabSales-service";

export const getCrabSales = async (props: ICrabSalesPost) => {
  const res = await axios.post<ICrabSalesReturn[]>(
    "https://api.p2eanalytics.com/marketplace/game/crabada/prices",
    props
    // {
    //   headers: {
    //     "content-type": "application/json",
    //   },
    // }
  );

  return res.data;
};
