import Link from "next/link";

import { Logo } from "@/components/Logo";

export const Header = () => {
  return (
    <header className="container mx-auto flex flex-row items-center p-12">
      <Logo />
      <nav className="hidden list-none gap-12 font-medium text-white tracking-widest md:flex">
        <li>ABOUT</li>
        <li>MAP</li>
        <li>FOOD</li>
        <li>RENTAL</li>
        <li>EVENT</li>
        <li>OTHER</li>
      </nav>
    </header>
  );
};
