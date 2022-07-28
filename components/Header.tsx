import Icons from "icons";
import Images from "images";
import Image from "next/image";
import { Dropdown } from "./Dropdown";

export const Header = () => (
  <div className="fixed top-0 z-10">
    <div className="sm:hidden bg-mobile-menu/95 flex justify-center items-center py-7">
      <button className="bg-transparent flex items-center">
        <Image src={Images.P2eLogo} alt="P2E Company Logo" />
        <Image src={Icons.chevronDown} alt="Chevron down icon" />
      </button>
    </div>
    <div className="sm:hidden flex flex-col justify-center items-center">
      <Image src={Images.CrabadaBanner} alt="Crabada game banner" />
      <Dropdown />
    </div>
  </div>
);
