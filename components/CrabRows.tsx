import useCrabs from "hooks/useCrabSales";
import { ICrabSalesReturn } from "interfaces/crabSales-service";
import { useEffect, useMemo } from "react";

export const CrabRows = () => {
  const { useCrabSales } = useCrabs();

  const { data: surgeData } = useCrabSales({
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["SURGE"],
  });
  const { data: sunkenData } = useCrabSales({
    from: "2022-07-01T00:00:00.000000Z",
    breedCount: [0, 3],
    legend: [0, 6],
    purity: [0, 6],
    crabClass: ["SUNKEN"],
  });

  // todo: create reducer
  const crabs = {
    SURGE: { value: "", percentage: "", bg: "", icon: "" },
    SUNKEN: { value: "", percentage: "", bg: "", icon: "" },
    PRIME: { value: "", percentage: "", bg: "", icon: "" },
    BULK: { value: "", percentage: "", bg: "", icon: "" },
    CRABOID: { value: "", percentage: "", bg: "", icon: "" },
    RUINED: { value: "", percentage: "", bg: "", icon: "" },
    GEM: { value: "", percentage: "", bg: "", icon: "" },
    ORGANIC: { value: "", percentage: "", bg: "", icon: "" },
  };

  useEffect(() => {
    let crabRows: ICrabSalesReturn[] = [];
    if (surgeData) crabRows = [...crabRows, ...surgeData];
    if (sunkenData) crabRows = [...crabRows, ...sunkenData];
  }, [surgeData, sunkenData]);

  return (
    <div className="bg-filters w-11/12 flex flex-col sm:flex-row p-4 mt-6 gap-4 mb-24">
      <span className="font-normal text-xs text-white">
        POPULATION BREAKDOWN
      </span>
      {[
        {
          icon: "",
          value: "34.020",
          name: "yellow",
          percentage: "29%",
          bg: "bg-[#40380F]",
        },
        {
          icon: "",
          value: "24.571",
          name: "brown",
          percentage: "21%",
          bg: "bg-[#401913]",
        },
      ].map((item) => (
        <div
          key={`${item.value + item.percentage}`}
          className={`flex border-bbutton ${item.bg} p-2 rounded items-center`}
        >
          {/* <Image src={item.icon} alt={`${item.name} icon`} /> */}
          <span className="mr-2 text-2xl font-medium">{item.value}</span>
          <span className="mr-2 text-lg font-light text-mobile-gray">
            {item.percentage}
          </span>
        </div>
      ))}
    </div>
  );
};
