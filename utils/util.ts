import { IChartData } from "interfaces/crab-chart";
import { ICrabSalesReturn } from "interfaces/crabSales-service";

export const getCrabPercentage = (crabs: ICrabSalesReturn[]) =>
  `${(
    ((crabs[0].totalSales - crabs[1].totalSales) / crabs[1].totalSales) *
    100
  ).toFixed(2)}%`;

export const sortCrabsData = (crabs: ICrabSalesReturn[]) =>
  crabs?.sort(function (a, b) {
    // @ts-ignore
    return new Date(b.bucketDate) - new Date(a.bucketDate);
  }) || [];

export const thousandSeparator = (x: string) =>
  x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const usdFormatter = (x: string) => `$${thousandSeparator(x)}`;

export const mountChartData = (
  mountingData: IChartData,
  data: ICrabSalesReturn[]
) => {
  return [
    ...mountingData,
    {
      data: sortCrabsData(data).map((item) => ({
        date: new Date(item.bucketDate).toISOString(),
        price: item.avgPrice.toFixed().toString(),
      })),
    },
  ];
};

export const roundToThousands = (x: string) => {
  const num = Number(x);
  const roundOff = (factor: number) =>
    thousandSeparator((Math.round(num / factor) * factor).toString());
  if (num >= 50000) return roundOff(50000);
  if (num >= 40000) return roundOff(40000);
  if (num >= 30000) return roundOff(30000);
  if (num >= 20000) return roundOff(20000);
  if (num >= 10000 || num < 10000) return roundOff(10000);
  return thousandSeparator(x);
};
