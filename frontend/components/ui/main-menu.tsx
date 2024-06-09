"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import Link from "next/link";

const MainMenu = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return isDesktop ? (
    <div>desktop</div>
  ) : (
    <div className="flex justify-evenly items-center bg-blue-500 w-full h-20 px-4">
      <main>
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/21/37/logo-for-bicycle-rental-vector-25512137.jpg"
          alt="SARA BIKE RENTAL"
          className="h-12 w-[100%]"
        />
      </main>
      <Drawer direction="right">
        <DrawerTrigger>
          <FontAwesomeIcon className="text-5xl" icon={faBars} beatFade />
        </DrawerTrigger>

        <DrawerContent>
            <nav className=" flex flex-col h-full items-center justify-evenly">

            <div className="flex justify-evenly items-center w-full">
              <Link href={""}>Login</Link>
              <p>|</p>
              <Link href={""}>Signup</Link>
            </div>
            <Link href={""}>Tariff</Link>
            <Link href={""}>About Us</Link>
            <Link href={""}>Reach Us</Link>
            <Link href={""}>Terms & Conditions</Link>
            <Link href={""}>Privacy Policy</Link>
            <Link href={""}>FAQ</Link>
            </nav>

        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MainMenu;
