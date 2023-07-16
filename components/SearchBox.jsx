'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function SearchBox() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()
    if (!search) return //eger search bos ise hicbir sey yapma
    router.push(`/search/${search}`) //ama varsa search sayfasina gidiyoruz
    setSearch('') //ve search'i siliyoruz
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center max-w-6xl mx-auto px-5"
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        type="text"
        placeholder="Search keywords..."
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search} //eger search bos ise butonu disabled yap
      >
        Search
      </button>
    </form>
  )
}

//e.preventDefault(); bir arama yaptigimizda sayfanin yenilenmesini engelliyor
//router.push ile aramaya gore bir route olusturuyoruz ve kullanici oraya gidiyor. Kullanicinin arama ile gitti route'u dynamic olarak (sayfa) olusturuyoruz. Onun icin dynamic sayfa ismine [searchTerm] koyduk
//onChange: inputa her bir karakter girildiginde setSearch ile state'i guncelliyoruz