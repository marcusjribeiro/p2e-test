import useCrabs from "hooks/useCrabs";
import Image from "next/image";
import { thousandSeparator } from "utils/util";

export const CrabRows = ({ isLoading }: { isLoading?: boolean }) => {
  const { useCrabRows } = useCrabs();
  const { crabRows } = useCrabRows();

  return (
    <div
      className={`bg-filters sm:bg-transparent w-11/12 sm:w-2/5 ${
        isLoading ? "hidden" : "flex"
      } flex-col p-4 sm:p-0 mt-6 gap-4 mb-24 sm:px-7 sm:flex-auto`}
    >
      <span className="font-normal text-xs text-white sm:hidden">
        POPULATION BREAKDOWN
      </span>
      <div className="gap-4 sm:gap-2 flex flex-col sm:pt-10">
        {crabRows.map((item) => (
          <div
            key={`${item.name + item.value + item.percentage}`}
            className={`flex border-bbutton bg-${item.name} p-2 sm:py-0 rounded items-center`}
          >
            <Image src={item.icon} alt={`${item.name} icon`} />
            <span className="pl-2 mr-2 text-2xl sm:text-lg font-medium">
              {thousandSeparator(item.value)}
            </span>
            <span
              className={`mr-2 text-lg sm:text-xs font-light ${
                item.percentage.startsWith("-")
                  ? "text-red-500"
                  : item.percentage.startsWith("0%")
                  ? "text-mobile-gray"
                  : "text-green-500"
              }`}
            >
              {item.percentage.startsWith("-") ||
              item.percentage.startsWith("0%")
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
