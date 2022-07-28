import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { months } from "utils/constants";
// const data = [
//   {
//     label: "Series 1",
//     data: [
//       {
//         date: new Date("2022-02-03T00:00:00.000Z"),
//         likes: 130,
//       },
//       {
//         date: new Date("2022-03-03T00:00:00.000Z"),
//         likes: 150,
//       },
//     ],
//   },
//   {
//     label: "Series 2",
//     data: [
//       {
//         date: new Date("2022-02-03T00:00:00.000Z"),
//         likes: 200,
//       },
//       {
//         date: new Date("2022-03-03T00:00:00.000Z"),
//         likes: 250,
//       },
//     ],
//   },
// ];

export const CrabChart = ({ data }: any) => {
  const primaryAxis = React.useMemo(
    (): AxisOptions<{ date: Date }> => ({
      getValue: (datum) => months[datum.date.getUTCMonth()],
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<{ likes: number }>[] => [
      {
        getValue: (datum) => datum.likes,
        elementType: "line",
        position: "right",
      },
    ],
    []
  );

  console.log(data);
  return (
    <div className="w-full h-64">
      {/* <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          dark: true,
        }}
      /> */}
    </div>
  );
};
