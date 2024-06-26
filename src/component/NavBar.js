"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-5/6 max-w-screen-2xl relative pt-16">
      <img
        className="logo w-12"
        width={100}
        height={100}
        src="/resources/logo.png"
        alt="logo"
      />

      <div className="md:flex hidden nav-links w-80 justify-between gap-5 font-extrabold">
        <Link className="text-gray-700" href="/">
          Home
        </Link>
        <Link className="text-gray-700" href="/portfolio">
          Portfolio
        </Link>
        <Link className="text-gray-700" href="/my-chilling-corner">
          My Chilling Corner
        </Link>
      </div>

      <a href="#" className="block md:hidden">
        <FontAwesomeIcon
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
          icon={faBars}
          size="2x"
          className="text-gray-700 "
        />
      </a>

      {open ? (
        <div className="pl-4 pt-4 fixed top-0 right-0 z-10 bg-lime-50 nav-links h-lvh w-lvw flex flex-col gap-5 font-extrabold">
          <img
            className="logo w-12"
            width={100}
            height={100}
            src="/resources/logo.png"
            alt="logo"
          />
          <a href="#">
            <FontAwesomeIcon
              className="absolute right-8 top-8 h-8"
              icon={faXmark}
              onClick={(e) => {
                e.preventDefault();
                setOpen(!open);
              }}
            />
          </a>
          <Link className="text-gray-700" href="/">
            Home
          </Link>
          <Separator className="bg-[#d9dfca]" />
          <Link className="text-gray-700" href="/portfolio">
            Portfolio
          </Link>
          <Separator className="bg-[#d9dfca]" />
          <Link className="text-gray-700" href="/my-chilling-corner">
            My Chilling Corner
          </Link>
        </div>
      ) : null}
    </div>
  );
}
