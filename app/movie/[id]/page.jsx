import Image from "next/image"

const API_KEY = process.env.API_KEY

async function getMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
    return await res.json()
}

export default async function MoviePage({ params }) {
    const movieId = params.id
    const movie = await getMovie(movieId)

    return (
        <div className="w-full">
            {/* /responsive ayarini burada yaptik */}
            <div className="p-4 pt-8 mt-8  flex flex-col items-center content-center max-w-6xl mx-auto lg:space-x-6 lg:flex-row">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                    alt="Movie poster"
                    width={500}
                    height={300}
                    className="rounded-lg"
                    blurDataURL="/spinner.svg"
                    placeholder="blur"
                    priority={true}
                    quality={100}
                />
                <div className="p-2 mt-4 lg:mt-0 h-72">
                    <h2 className="text-lg mb-3 font-bold">
                        {movie.title || movie.name}
                    </h2>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1 text-red-500">Overview:</span>
                        {movie.overview}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1 text-red-500">Data Relased:</span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold mr-1 text-red-500">Rating:</span>
                        {movie.vote_average.toFixed(1)} / 10
                    </p>
                </div>
            </div>
        </div>
    )
}

//<Link href={`/movie/${result.id}`}> buradaki id kismi dosyadaki id ile eslesiyor. Bu sayede her film icin ayrı bir sayfa olusturuluyor

//params.id ile movie/[id] klasorunun dynamic route yoluna erisiyoruz. yukardaki result.id ile filim id'sine erisiyoruz. ikisi farkli seyler ama ayni degeri aliyorlar
//buradaki fetch islemi filimlerin idsine gore cekiliyor yani cardlarin icine girdigimizce bu sayfa calisacagi icin spesifik olarak fetch islemi yapiliyor