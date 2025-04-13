import React, { useState } from "react";
import Link from "./Link";
import { LogIn, Menu } from "lucide-react";
import { X } from "lucide-react";

const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    submenus: [
      { id: 31, title: "Web Development", path: "/services/web-development" },
      { id: 32, title: "Mobile Apps", path: "/services/mobile-apps" },
      { id: 33, title: "UI/UX Design", path: "/services/ui-ux" },
      { id: 34, title: "SEO Optimization", path: "/services/seo" },
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    submenus: [
      { id: 41, title: "Tech News", path: "/blog/tech-news" },
      { id: 42, title: "Tutorials", path: "/blog/tutorials" },
      { id: 43, title: "Case Studies", path: "/blog/case-studies" },
    ],
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = navItems.map((item) => <Link key={item.id} item={item}></Link>);
  return (
    <nav className="flex justify-between max-w-11/12 mx-auto pt-5 items-center">
      <div onClick={() => setOpen(!open)} className="flex gap-3">
        {open ? <X className="md:hidden" /> : <Menu className="md:hidden" />}
        <h1 className="text-4xl font-bold">FitFusion Gym</h1>
        <ul
          className={`md:hidden absolute bg-amber-300 text-black duration-1000  ${
            open ? "top-8" : "-top-80"
          }`}
        >
          {links}
        </ul>
      </div>

      <ul className="md:flex hidden gap-6">{links}</ul>
      <div className=" ">
        <button className=" flex gap-1 items-center text-xl font-medium text-gray-400 hover:text-white ">
          Sign In <LogIn className="" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
