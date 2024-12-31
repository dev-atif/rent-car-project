import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const NavLinks = [
  {
    name: "Home",
    Link: "/",
  },
  {
    name: "Add Drivers",
    Link: "/adddriver",
  },

  {
    name: "All Cars",
    Link: "#",
  },
  {
    name: "All Drivers",
    Link: "#",
  },
];
const HeaderLinks = () => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6">
        {NavLinks.map((itm, idx) => (
          <div key={idx} className="">
            <Link
              className={`font-medium hover:text-[#FD8D14] transition-all transform duration-300 ${
                pathname === itm.Link ? "text-[#FD8D14]" : "text-white"
              }`}
              href={itm.Link}
            >
              {itm.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderLinks;
