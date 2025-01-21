import Link from "next/link";
import React from "react";
import LogoComponent from "./LogoComponent";
import { Button } from "../ui/button";
import { BsGithub } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className=" z-50 flex items-center justify-between  w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href={"/"}>
        <LogoComponent />
      </Link>
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex ">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <div className="items-center gap-3 hidden md:flex">
        <Link href={"https://github.com/ShadowAdi/convo"} target="_blank">
          <Button
            variant="default"
            className="items-center hidden gap-2 bg-primary rounded-full w-fit md:flex"
            size="lg"
          >
            <span>Github Repo</span>
            <span className="text-xl">
              <BsGithub />
            </span>
          </Button>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <LuMenu />
        </SheetTrigger>
        <SheetContent className="pt-16">
          <SheetHeader>
            {/* Add an accessible title */}
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex w-full flex-col items-center justify-center  gap-4 h-full">
              <SheetTrigger asChild>
                <Link href="/">
                  <Button
                    variant={"link"}
                    className="w-full font-semibold dark:text-white text-black"
                  >
                    Home
                  </Button>
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/about">
                  <Button
                    variant={"link"}
                    className="w-full font-semibold dark:text-white text-black"
                  >
                    About
                  </Button>
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link href="/privacy-policy">
                  <Button
                    variant={"link"}
                    className="w-full font-semibold dark:text-white text-black"
                  >
                    Privacy Policy
                  </Button>
                </Link>
              </SheetTrigger>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
