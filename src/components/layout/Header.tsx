import Link from "next/link";
import { FiLogIn } from "react-icons/fi";

const Header = () => {
  return (
    <div className="w-full flex justify-between bg-blue-700 my-5 rounded-md font-medium">
      <div>
        <ul className="flex flex-row gap-2">
          <li className="p-3 text-white cursor-pointer ">
            <Link href="./">صفحه اصلی</Link>
          </li>
          <li className="p-3 text-white cursor-pointer">
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-center items-center mx-5">
        <Link
          className="flex flex-row justify-center gap-1 items-center  bg-white rounded-sm text-blue-700  px-2 "
          href="./signup"
        >
          <FiLogIn />
          <span className="text-sm">ورود</span>
        </Link>
      </div>
    </div>
  );
};
export default Header;
