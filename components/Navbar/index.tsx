import { NextPage } from "next";
import Link from "next/link";

import { navList } from "components/Navbar/navConfig";
import Image from "next/image";

const Navbar: NextPage = () => {
  return (
    <div className="h-16 px-6 shadow-sm flex flex-row justify-between items-center">
      <Image height={40} width={120} src="https://www.mihoyo.com/_nuxt/img/mihoyo-logo.754bbce.png" alt="logo"/>
      <div className="">
        {
          navList?.map((item) => (
            <Link key={item.label} href={item.value}>
              <a className="font-serif cursor-pointer hover:text-mihoyo px-2.5 py-2 ml-5">{item.label}</a>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Navbar;