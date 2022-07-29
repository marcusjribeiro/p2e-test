import Icons from "icons";
import Images from "images";
import Image from "next/image";
import Link from "next/link";
import { Dropdown } from "./Dropdown";

const getNavIcons = (key: string) =>
  ({
    search: Icons.search,
    fourButtons: Icons.fourButtons,
    joystick: Icons.joystick,
    compass: Icons.compass,
    diamond: Icons.diamond,
    squareWithDots: Icons.squareWithDots,
    twitter: Images.twitter,
    twitch: Images.twitch,
    discord: Images.discord,
  }[key] || Icons.fourButtons);

const navButton = (item: string, isSocial?: boolean) => (
  <div
    key={item}
    className={`flex flex-auto cursor-pointer ${isSocial ? "p-1" : "p-4"} `}
  >
    <Image src={getNavIcons(item)} alt={`${item} logo`} />
  </div>
);

export const Navigator = () => (
  <div className="fixed top-0 z-10 sm:left-0">
    <div className="sm:hidden bg-mobile-menu/95 flex py-7">
      <button className="bg-transparent flex w-full justify-center items-center focus:bg-mobile-menu/95">
        <Image src={Images.P2eLogo} alt="P2E Company Logo" />
        <Image src={Icons.chevronDown} alt="Chevron down icon" />
      </button>
    </div>
    <div className="sm:hidden flex flex-col justify-center items-center">
      <Image src={Images.CrabadaBanner} alt="Crabada game banner" />
      <Dropdown />
    </div>
    <div className="hidden sm:flex h-screen flex-col items-center bg-black">
      <div className="cursor-pointer p-6">
        <Link href={"/"}>
          <Image src={Images.P2eIcon} alt="P2E Logo" width={50} height={38} />
        </Link>
      </div>
      <div className="flex flex-col mb-6">
        {[
          "search",
          "fourButtons",
          "joystick",
          "compass",
          "diamond",
          "squareWithDots",
        ].map((item) => navButton(item))}
      </div>
      <div className="flex flex-col gap-4">
        {["twitter", "twitch", "discord"].map((item) => navButton(item, true))}
      </div>
    </div>
  </div>
);
