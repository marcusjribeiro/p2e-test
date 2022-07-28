import { useQuery } from "@tanstack/react-query";
import Images from "images";
import { IChartData } from "interfaces/crab-chart";
import { ICrabRow } from "interfaces/crab-rows";
import { ICrabSalesPost, ICrabSalesReturn } from "interfaces/crabSales-service";
import { useMemo } from "react";
import { getCrabSales } from "services/crabSales-service";
import { getCrabPercentage, mountChartData, sortCrabsData } from "utils/util";

const useCrabs = () => {
  const useCrabSales = (props: ICrabSalesPost) =>
    useQuery(["crab-sales", props], () => getCrabSales(props));

  const useSingleCrabsData = () => {
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
    const { data: primeData } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: ["PRIME"],
    });
    const { data: bulkData } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: ["BULK"],
    });
    const { data: craboidData } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: ["CRABOID"],
    });
    const { data: ruinedData } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: ["RUINED"],
    });
    const { data: gemData } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: ["GEM"],
    });
    const { data: organicData } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: ["ORGANIC"],
    });

    return {
      surgeData,
      sunkenData,
      primeData,
      bulkData,
      craboidData,
      ruinedData,
      gemData,
      organicData,
    };
  };

  const useCrabRows = () => {
    const {
      surgeData,
      sunkenData,
      primeData,
      bulkData,
      craboidData,
      ruinedData,
      gemData,
      organicData,
    } = useSingleCrabsData();

    const crabRows = useMemo(() => {
      const sortedSurge = surgeData ? sortCrabsData(surgeData) : [];
      const sortedSunken = sunkenData ? sortCrabsData(sunkenData) : [];
      const sortedPrimeData = primeData ? sortCrabsData(primeData) : [];
      const sortedBulkData = bulkData ? sortCrabsData(bulkData) : [];
      const sortedCraboidData = craboidData ? sortCrabsData(craboidData) : [];
      const sortedRuinedData = ruinedData ? sortCrabsData(ruinedData) : [];
      const sortedGemData = gemData ? sortCrabsData(gemData) : [];
      const sortedOrganicData = organicData ? sortCrabsData(organicData) : [];

      let rows: ICrabRow[] = [];
      if (surgeData && !rows.find((item) => item.name === "surge")) {
        rows = [
          ...rows,
          {
            icon: Images.surge,
            value: sortedSurge[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedSurge),
            name: "surge",
            bg: "bg-surge",
          },
        ];
      }
      if (sunkenData && !rows.find((item) => item.name === "sunken")) {
        rows = [
          ...rows,
          {
            icon: Images.sunken,
            value: sortedSunken[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedSunken),
            name: "sunken",
            bg: "bg-sunken",
          },
        ];
      }
      if (primeData && !rows.find((item) => item.name === "prime")) {
        rows = [
          ...rows,
          {
            icon: Images.prime,
            value: sortedPrimeData[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedPrimeData),
            name: "prime",
            bg: "bg-prime",
          },
        ];
      }
      if (bulkData && !rows.find((item) => item.name === "bulk")) {
        rows = [
          ...rows,
          {
            icon: Images.bulk,
            value: sortedBulkData[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedBulkData),
            name: "bulk",
            bg: "bg-bulk",
          },
        ];
      }
      if (craboidData && !rows.find((item) => item.name === "craboid")) {
        rows = [
          ...rows,
          {
            icon: Images.craboid,
            value: sortedCraboidData[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedCraboidData),
            name: "craboid",
            bg: "bg-craboid",
          },
        ];
      }
      if (ruinedData && !rows.find((item) => item.name === "ruined")) {
        rows = [
          ...rows,
          {
            icon: Images.ruined,
            value: sortedRuinedData[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedRuinedData),
            name: "ruined",
            bg: "bg-ruined",
          },
        ];
      }
      if (gemData && !rows.find((item) => item.name === "gem")) {
        rows = [
          ...rows,
          {
            icon: Images.gem,
            value: sortedGemData[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedGemData),
            name: "gem",
            bg: "bg-gem",
          },
        ];
      }
      if (organicData && !rows.find((item) => item.name === "organic")) {
        rows = [
          ...rows,
          {
            icon: Images.organic,
            value: sortedOrganicData[0].totalSales.toFixed().toString() || "",
            percentage: getCrabPercentage(sortedOrganicData),
            name: "organic",
            bg: "bg-organic",
          },
        ];
      }

      return rows;
    }, [
      surgeData,
      sunkenData,
      primeData,
      bulkData,
      craboidData,
      ruinedData,
      gemData,
      organicData,
    ]);

    return { crabRows };
  };

  const useCrabChart = () => {
    const {
      surgeData,
      sunkenData,
      primeData,
      bulkData,
      craboidData,
      ruinedData,
      gemData,
      organicData,
    } = useSingleCrabsData();

    const { data } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: [
        "SURGE",
        "SUNKEN",
        "PRIME",
        "BULK",
        "CRABOID",
        "RUINED",
        "GEM",
        "ORGANIC",
      ],
    });

    const lastDay = useMemo(() => {
      let date = new Date();
      date.setDate(date.getDate() - 1);
      date.setHours(0, 0, 0, 0);
      return new Date(date).toISOString();
    }, []);

    const { data: lastDayData } = useCrabSales({
      from: lastDay,
      breedCount: [0, 3],
      legend: [0, 6],
      purity: [0, 6],
      crabClass: [
        "SURGE",
        "SUNKEN",
        "PRIME",
        "BULK",
        "CRABOID",
        "RUINED",
        "GEM",
        "ORGANIC",
      ],
    });

    const crabadaCount = useMemo(
      () =>
        data
          ? sortCrabsData(data)
              .reduce((acc, cur) => {
                return acc + cur.totalSales;
              }, 0)
              .toString()
          : "",
      [data]
    );

    const todaysLow = useMemo(
      () =>
        lastDayData
          ? sortCrabsData(lastDayData)
              .reduce(
                (acc, cur, curIdx) =>
                  curIdx !== 0 && acc <= cur.lowerPrice ? acc : cur.lowerPrice,
                0
              )
              .toString()
          : "",
      [lastDayData]
    );

    const chartData = useMemo(() => {
      let mountingData: IChartData = [];

      if (surgeData)
        mountingData = mountChartData(mountingData, sortCrabsData(surgeData));
      if (sunkenData)
        mountingData = mountChartData(mountingData, sortCrabsData(sunkenData));
      if (primeData)
        mountingData = mountChartData(mountingData, sortCrabsData(primeData));
      if (bulkData)
        mountingData = mountChartData(mountingData, sortCrabsData(bulkData));
      if (craboidData)
        mountingData = mountChartData(mountingData, sortCrabsData(craboidData));
      if (ruinedData)
        mountingData = mountChartData(mountingData, sortCrabsData(ruinedData));
      if (gemData)
        mountingData = mountChartData(mountingData, sortCrabsData(gemData));
      if (organicData)
        mountingData = mountChartData(mountingData, sortCrabsData(organicData));

      return mountingData;
    }, [
      surgeData,
      sunkenData,
      primeData,
      bulkData,
      craboidData,
      ruinedData,
      gemData,
      organicData,
    ]);

    return { crabadaCount, todaysLow, chartData };
  };

  return { useCrabSales, useCrabRows, useCrabChart };
};

export default useCrabs;
