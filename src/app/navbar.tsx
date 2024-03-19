"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProductStore from "./product/redux/product-store";

export default function NavBar() {
  console.log("render navbar");
  const pathname = usePathname();
  const router = useRouter();
  function login() {
    router.push("/login");
  }

  return (
    <nav className="flex bg-gray-800 px-5 justify-between py-6 sticky">
      <div className="flex">
        <h1 className="text-white">Todo App</h1>

        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 cursor-pointer  ${
                pathname === "/" ? "text-blue-300" : "text-white"
              }`}
            >
              Home
            </li>
          </Link>

          <Link href="/product">
            <li
              className={`mr-3 cursor-pointer  ${
                pathname === "/product" ? "text-blue-300" : "text-white"
              }`}
            >
              Product
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-4">
        <div className="text-white cursor-pointer" onClick={login}>
          Cart: {ProductStore.ProductStore.getState().cart?.length}
        </div>
        <div className="text-white cursor-pointer" onClick={login}>
          Login
        </div>
      </div>
    </nav>
  );
}
