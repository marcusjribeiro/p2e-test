import { useMutation, useQuery } from "@tanstack/react-query";
import { ICrabSalesPost } from "interfaces/crabSales-service";
import { getCrabSales } from "services/crabSales-service";

const useCrabs = () => {
  const useCrabSales = (props: ICrabSalesPost) =>
    useQuery(["crab-sales", props], () => getCrabSales(props));

  return { useCrabSales };
};

export default useCrabs;
