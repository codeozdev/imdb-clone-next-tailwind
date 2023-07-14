'use client'

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkmodeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMount] = useState(false);

  useEffect(() => setMount(true), [])

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {
        mounted && (currentTheme === 'dark' ? (
          <MdLightMode
            onClick={() => setTheme('light')}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        ) : (
          <BsFillMoonFill
            onClick={() => setTheme('dark')}
            className="text-xl cursor-pointer hover:text-amber-500"
          />
        )
        )}
    </>
  )
}


//useState kullanabilmek icin use client ekledik
//fragment kullandigimiz icin ogeler yan yana geldi

//dark modu kullanabilmek icin useTheme hookunu import ettik
//dark tema icin iconlari ters koyuyoruz ve dark modda ise light mode iconu, light modda ise dark mode iconu gosteriyoruz

//Hydration failed: Client tarafinda light mode kalirken server tarafinda dark mode oluyor, bu yuzden hata veriyor. Bunun onune gecmek icin useEffect ve useState kullaniyoruz