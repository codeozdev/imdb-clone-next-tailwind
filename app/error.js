'use client'

import { useEffect } from "react"

export default function Error(error, reset) {

    useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className="text-center mt-10">
            <h1 className="font-bold text-red-500">Something went wrong!</h1>
            <button onClick={() => reset()} className="hover:text-amber-600">Try again</button>
        </div>
    )
}

//app klasoru icindeki ozel bir error componentidir ve 'use client' ile client tarafinda calisir
//reset fonksiyonu sayesinde tekrar denememizi saglar
//error parametresi ile hata mesajini aliriz