"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import hirehubLogo from '/public/Hirehub_Logo.png';

const menus = [
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Blog", path: "/#blog" },
];

const NavbarObserver = () => {
  const [isSticky, setIsSticky] = useState(false);
  const observerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={observerRef} className="h-12"></div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky ? "bg-white backdrop-blur-2xl shadow-md py-1.5" : "bg-transparent py-1.5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-16">
          <nav className="w-full flex items-center justify-between">
            {/* Logo */}
            <Link href={"/"}>
              <Image src={hirehubLogo} alt="logo" width={80} />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden text-sm md:flex items-center gap-6 lg:gap-8">
              {menus.map((menu, index) => (
                <li key={index}>
                  <Link
                    href={menu.path}
                    className="text-gray-700 hover:text-gray-900 transition duration-200"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
              {/* Signup Button (Desktop) */}
              <div className="flex items-center gap-2">
                <Link href={"/login"} className="hidden lg:flex gap-2">
                  <Button size="sm" className="py-2 px-4 rounded-lg bg-transparent border border-slate-700 text-slate-700 hover:text-white hover:bg-slate-800">
                    Signin
                  </Button>
                </Link>
                <Link href={"/signup"}>
                  <Button size="sm" className="bg-slate-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-slate-800 transition duration-200">
                    Signup
                  </Button>
                </Link>
              </div>
            </ul>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>

          <ul className="flex flex-col items-center gap-6 pt-20">
            {menus.map((menu, index) => (
              <li key={index}>
                <Link
                  href={menu.path}
                  className="text-gray-700 hover:text-gray-900 transition duration-200 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <div className="flex flex-col gap-2">
              <Link href={"/login"} onClick={() => setIsOpen(false)}>
                <Button className="py-2 px-4 rounded-lg bg-transparent border border-gray-600 text-gray-600 hover:text-white">
                  Signin
                </Button>
              </Link>
              <Link href={"/signup"} onClick={() => setIsOpen(false)}>
                <Button className="bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-200">
                  Signup
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavbarObserver;
