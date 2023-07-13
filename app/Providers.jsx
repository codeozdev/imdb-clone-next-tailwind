'use client'

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors 
            duration-300 min-h-screen select-none">
                {children}
            </div>
        </ThemeProvider>
    )
}

//kullanmak icin use client istiyor
//layout kismini bu componentle sardik, layout kismini client yapmamak icin bu componenti olusturduk

//enableSystem={true} ile kullanıcının sistemindeki temayı kullanmasını sağlıyoruz.
//attribute="class" tailwindcss ile kullanmak icin, bunu tailwind.config.js dosyasinda tanimladik


//Dark tema icin https://www.npmjs.com/package/next-themes
//transition-colors: renk degisimlerinde gecis efekti verir
//select-none: texti secilemez yapar