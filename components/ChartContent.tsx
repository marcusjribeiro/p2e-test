import useCrabs from "hooks/useCrabs";
import Icons from "icons";
import Image from "next/image";
import { thousandSeparator, usdFormatter } from "utils/util";
import { CrabChart } from "components/CrabChart";
import { CrabRows } from "components/CrabRows";

export const ChartContent = () => {
  const { useCrabChart } = useCrabs();
  const { crabadaCount, todaysLow, chartData } = useCrabChart();

  return (
    <div className="flex flex-col sm:flex-row flex-auto items-center w-11/12 pt-7 mb-6 bg-gradient-to-b from-chart-initial to-chart-end mx-3 sm:border-solid sm:border-2 sm:border-button sm:ml-24">
      <div className="w-full px-4 sm:pl-8 sm:pr-0 sm:flex sm:flex-col sm:flex-auto sm:h-screen">
        <div className="flex sm:flex-auto flex-col">
          <div className="flex mb-4">
            <h2 className="mr-1 text-sm">Cabrada Count</h2>
            <h1 className="mr-1 text-sm text-hold-gray">{`(today's low)`}</h1>
            <Image
              src={Icons.circleInformation}
              alt="Circle information icon"
              className="fill-hold-gray"
              width={14}
              height={14}
            />
          </div>
          <div className="flex mb-6">
            <h2 className="mr-1 text-2xl">{thousandSeparator(crabadaCount)}</h2>
            <h1 className="mr-1 text-2xl text-hold-gray">{`(${usdFormatter(
              todaysLow
            )})`}</h1>
          </div>
        </div>
        <CrabChart data={chartData} />
      </div>
      <CrabRows />

      <div className="h-px w-full bg-separator mb-12 sm:hidden" />
      <button className="bg-button py-2 px-4 mb-16 rounded-3xl sm:hidden">
        Submit Feedback
      </button>
    </div>
  );
};