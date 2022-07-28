import useCrabs from "hooks/useCrabs";
import Image from "next/image";
import { thousandSeparator } from "utils/util";

export const CrabRows = () => {
  const { useCrabRows } = useCrabs();
  const { crabRows } = useCrabRows();

  return (
    <div className="bg-filters sm:bg-transparent w-11/12 sm:w-4/5 flex flex-col p-4 mt-6 gap-4 mb-24 sm:px-7 sm:flex-auto sm:h-screen">
      <span className="font-normal text-xs text-white sm:hidden">
        POPULATION BREAKDOWN
      </span>
      <div className="gap-4 flex flex-col">
        {crabRows.map((item) => (
          <div
            key={`${item.value + item.percentage}`}
            className={`flex border-bbutton bg-${item.name} p-2 rounded items-center`}
          >
            <Image src={item.icon} alt={`${item.name} icon`} />
            <span className="pl-2 mr-2 text-2xl font-medium">
              {thousandSeparator(item.value)}
            </span>
            <span
              className={`mr-2 text-lg font-light ${
                item.percentage.startsWith("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {item.percentage.startsWith("-")
                ? item.percentage
                : `+${item.percentage}`}
            </span>
            {/* bg-surge */}
            {/* bg-sunken */}
            {/* bg-prime */}
            {/* bg-bulk */}
            {/* bg-craboid */}
            {/* bg-ruined */}
            {/* bg-gem */}
            {/* bg-organic */}
          </div>
        ))}
      </div>
    </div>
  );
};
