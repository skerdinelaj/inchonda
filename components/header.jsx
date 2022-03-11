
import { useState } from "react";
import Image from "next/image";
import logo from "../img/logo.png";
import { ChevronLeftIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from 'next/router'
function classNameNames(...classNamees) {
  return classNamees.filter(Boolean).join(" ");
}
export default function Navbar() {
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.back()
  };
  return (
    <header>
      <nav className="grid grid-rows-1 grid-flow-row grid-cols-12 ">
          <div className="flex flex-col justify-center items-center col-span-1">
            <div className="flex flex-row">
              <ChevronLeftIcon className="h-8 w-8" onClick={handleClick}></ChevronLeftIcon>
            </div>
            <div className="flex flex-row">
              <label>Zuruck</label>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-10">
            <div className="flex flex-col h-20 w-20">
              <Image src={logo} alt=""></Image>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row text-2xl">
                <label className="text-fuchsia-900 font-bold">bin<span className="text-lime-400">schon</span>da</label>
              </div>
              <div className="flex flex-row text-fuchsia-900 font-bold text-sm">
                <label>Hauptstadt-Pflegedienst</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center hover:shadow-md rounded-full col-span-1">
            <div className="flex flex-row">
              <UserCircleIcon className="h-8 w-8" onClick={handleClick}></UserCircleIcon>
            </div>
            <div className="flex flex-row">
              <label>KUNDEN BEREICH</label>
            </div>
          </div>
      </nav>
    </header>
  );
}