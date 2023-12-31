import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import HeaderItem from "./HeaderItem";
import DarkmodeSwitch from "./DarkmodeSwitch";



export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <HeaderItem title="HOME" adress="/" Icon={AiFillHome} />
        <HeaderItem title="ABOUT" adress="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <DarkmodeSwitch />
        <Link href='/'>
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">
              Clone
            </span>
          </h2>
        </Link>
      </div>
    </div>
  )
}

//navbari propslarla olusturduk
//MenuItem.jsx => Header.jsx'in iceriklerini olusturmak icin kullanilan componenttir. Propslarla bilgileri gonderdik
//darkmode iconu da burada olusturuldu