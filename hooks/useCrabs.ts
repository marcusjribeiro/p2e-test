import { useQuery } from "@tanstack/react-query";
import { useCrabsContext } from "contexts/crabs.context";
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
  const { crabsState } = useCrabsContext();

  const useSingleCrabsData = () => {
    const { data: surgeData, isLoading: surgeIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["SURGE"],
    });
    const { data: sunkenData, isLoading: sunkenIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["SUNKEN"],
    });
    const { data: primeData, isLoading: primeIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["PRIME"],
    });
    const { data: bulkData, isLoading: bulkIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["BULK"],
    });
    const { data: craboidData, isLoading: craboidIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["CRABOID"],
    });
    const { data: ruinedData, isLoading: ruinedIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["RUINED"],
    });
    const { data: gemData, isLoading: gemIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["GEM"],
    });
    const { data: organicData, isLoading: organicIsLoading } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
      crabClass: ["ORGANIC"],
    });

    const isLoading =
      surgeIsLoading ||
      sunkenIsLoading ||
      primeIsLoading ||
      bulkIsLoading ||
      craboidIsLoading ||
      ruinedIsLoading ||
      gemIsLoading ||
      organicIsLoading;

    return {
      surgeData,
      sunkenData,
      primeData,
      bulkData,
      craboidData,
      ruinedData,
      gemData,
      organicData,
      isLoading,
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
            value:
              sortedSurge.length > 0
                ? sortedSurge[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedSunken.length > 0
                ? sortedSunken[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedPrimeData.length > 0
                ? sortedPrimeData[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedBulkData.length > 0
                ? sortedBulkData[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedCraboidData.length > 0
                ? sortedCraboidData[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedRuinedData.length > 0
                ? sortedRuinedData[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedGemData.length > 0
                ? sortedGemData[0].avgPrice.toFixed().toString()
                : "0.0",
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
            value:
              sortedOrganicData.length > 0
                ? sortedOrganicData[0].avgPrice.toFixed().toString()
                : "0.0",
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
      isLoading,
    } = useSingleCrabsData();

    const { data } = useCrabSales({
      from: "2022-07-01T00:00:00.000000Z",
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
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
      breedCount: crabsState.breedCount,
      legend: crabsState.legend,
      purity: crabsState.purity,
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
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(surgeData),
          "Surge"
        );
      if (sunkenData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(sunkenData),
          "Sunken"
        );
      if (primeData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(primeData),
          "Prime"
        );
      if (bulkData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(bulkData),
          "Bulk"
        );
      if (craboidData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(craboidData),
          "Craboid"
        );
      if (ruinedData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(ruinedData),
          "Ruined"
        );
      if (gemData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(gemData),
          "Gem"
        );
      if (organicData)
        mountingData = mountChartData(
          mountingData,
          sortCrabsData(organicData),
          "Organic"
        );

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

    return { crabadaCount, todaysLow, chartData, isLoading };
  };

  return { useCrabSales, useCrabRows, useCrabChart };
};

export default useCrabs;
