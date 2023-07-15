import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function ResultsCard({ result }) {
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-300 group">
            <Link href={`/movie/${result.id}`}>
                <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    alt="image"
                    width={500}
                    height={300}
                    className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-300"
                    placeholder="blur"
                    blurDataURL='/spinner.svg'
                    // mobil cihazlarda resimlerin boyutu ayarlanıyor
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className="py-2">
                    <p className="line-clamp-2 text-base">{result.overview}</p>
                    <h2 className="truncate text-lg font-bold">
                        {result.title || result.name}
                    </h2>
                    <p className="flex items-center">
                        {result.release_date || result.first_air_date}
                        <FiThumbsUp className="mr-1 ml-3 h-5" />
                        {result.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}

//small one column, medium two column, large three column, extra large four column, Tv five column
//Bu islemler icin hic route olusturmadik. Sadece parametre olarak gelen genre'i kullandik
//Results.jsx den props aliyor
//blurDataURL ile resim yüklenene kadar spinner görüntüsü veriyor
//truncate paragrafları tek satırda gösterir
//https://tailwindcss.com/docs/line-clamp

// <Link href={`/movie/${result.id}`}> burada daha movie page'ni olusturmadan link olarak ayarladik ve resme tikladigimizda movie page'e gidiyoruz. idler dinamik oldugu icin bizimde dinamik bir sayfa olusturmamiz lazim