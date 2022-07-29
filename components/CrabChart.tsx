import { IChartData } from "interfaces/crab-chart";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { Loading } from "components/Loading";

export const CrabChart = ({ data }: { data: IChartData }) => {
  const primaryAxis = React.useMemo(
    (): AxisOptions<{ date: string; price: string }> => ({
      getValue: (datum) => new Date(datum.date),
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<{ date: string; price: string }>[] => [
      {
        getValue: (datum) => Number(datum.price),
        position: "right",
      },
    ],
    []
  );

  if (data.length <= 0) return <></>;

  return (
    <div className="w-full h-64 sm:w-full sm:flex sm:flex-auto">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          dark: true,
        }}
      />
    </div>
  );
};
