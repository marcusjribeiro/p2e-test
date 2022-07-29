import { MultiRangeSlider } from "components";
import { ICrabsActionType, useCrabsContext } from "contexts/crabs.context";
import { useState } from "react";

export const Filters = () => {
  const [minBreed, setMinBreed] = useState(0);
  const [maxBreed, setMaxBreed] = useState(3);
  const [minLegend, setMinLegend] = useState(0);
  const [maxLegend, setMaxLegend] = useState(6);
  const [minPurity, setMinPurity] = useState(0);
  const [maxPurity, setMaxPurity] = useState(6);

  const { dispatchCrabs } = useCrabsContext();

  const setFilters = () => {
    dispatchCrabs({
      type: ICrabsActionType.UPDATE_STATE,
      payload: {
        breedCount: [minBreed, maxBreed],
        legend: [minLegend, maxLegend],
        purity: [minPurity, maxPurity],
      },
    });
  };

  return (
    <div className="hidden sm:flex flex-auto w-11/12 gap-16 justify-evenly items-center mb-28 ml-[5.25rem] bg-filters border-bfilters border-solid border-2 rounded overflow-hidden pb-8 pl-11">
      <div>
        <span className="text-base">Breed Count</span>
        <MultiRangeSlider
          min={0}
          max={3}
          onChange={({ min, max }: { min: number; max: number }) => {
            setMinBreed(min);
            setMaxBreed(max);
          }}
        />
      </div>
      <div>
        <span className="text-base">Legend</span>
        <MultiRangeSlider
          min={0}
          max={6}
          onChange={({ min, max }: { min: number; max: number }) => {
            setMinLegend(min);
            setMaxLegend(max);
          }}
        />
      </div>
      <div>
        <span className="text-base">Purity</span>
        <MultiRangeSlider
          min={0}
          max={6}
          onChange={({ min, max }: { min: number; max: number }) => {
            setMinPurity(min);
            setMaxPurity(max);
          }}
        />
      </div>
      <div className="flex pt-8">
        <button
          onClick={setFilters}
          className="flex flex-grow justify-center items-center text-base mr-2 py-1 px-6 bg-button border-bbutton hover:bg-button/60 rounded-full"
        >
          Apply Filter
        </button>
        <span className="flex flex-grow-0 text-xs justify-center items-center cursor-pointer text-blue-700 underline">
          More Filters
        </span>
      </div>
    </div>
  );
};
