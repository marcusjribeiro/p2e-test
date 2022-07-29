import Icons from "icons";
import Images from "images";
import Image from "next/image";

const getTradingImages = (key: string) =>
  ({
    avax: Images.avax,
    cra: Images.cra,
    tus: Images.tus,
    cram: Images.cram,
  }[key] || Images.avax);

export const HomeHeader = () => (
  <>
    <div className="hidden sm:flex flex-auto w-11/12 ml-[5.25rem] mb-3 mt-12">
      <span className="font-bold text-4xl mr-2">CRABADA</span>
      {[
        { name: "avax", value: "$86.65", change: "-1.45" },
        { name: "cra", value: "$86.65", change: "+1.21" },
        { name: "tus", value: "$86.65", change: "-1.45" },
        { name: "cram", value: "$86.65", change: "-1.45" },
      ].map((item) => (
        <div key={item.name} className="flex items-center">
          <Image src={getTradingImages(item.name)} alt={`${item.name} icon`} />
          <span className="ml-2 mr-3 text-xs">
            {item.name.toLocaleUpperCase()}
          </span>
          <span className="text-xs mr-3">{item.value}</span>
          <span
            className={`
                mr-8
                p-1
                rounded-sm
                ${
                  item.change.startsWith("-")
                    ? "bg-red-900/50"
                    : "bg-green-900/50"
                }
                ${
                  item.change.startsWith("-")
                    ? "text-red-500"
                    : "text-green-500"
                }
                `}
          >
            {item.change}
          </span>
        </div>
      ))}
    </div>

    <div className="hidden sm:flex py-1 flex-auto w-11/12 justify-between ml-[5.25rem] overflow-hidden bg-menu rounded-sm text-xl font-medium mb-10">
      <div className="text-xl px-14 cursor-pointer hover:bg-menu-selected/20">
        PROFILE
      </div>
      <div className="text-xl px-14 cursor-pointer hover:bg-menu-selected/20">
        ECONOMY
      </div>
      <div className="text-xl px-14 cursor-pointer hover:bg-menu-selected/20">
        POPULATION
      </div>
      <div className="text-xl px-14 cursor-pointer bg-menu-selected hover:bg-menu-selected/60">
        CRAB PRICES
      </div>
    </div>

    <div className="hidden sm:flex flex-auto w-11/12 justify-between ml-[5.25rem] text-xl font-medium mb-8">
      <span className="text-2xl">Crab Prices</span>
      <div className="flex items-center">
        <div className="flex items-center">
          <Image src={Images.avatar} alt="avatar" />
          <span className="pl-2 pr-20">Miko’s Insights</span>
        </div>
        <Image src={Icons.eyeOff} alt="eye off icon" />
      </div>
    </div>
  </>
);
