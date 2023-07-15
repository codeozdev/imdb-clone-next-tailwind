import Results from "@/components/Results"

const API_KEY = process.env.API_KEY

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending'
  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 500 } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  //fetch islemimizde hatamiz olursa hata mesaji firlatacak

  const data = await res.json()
  const results = data.results


  return (
    <main>
      <Results results={results} />
    </main>
  )
}

//searchParams: Server Side kullanılan parametredir
//fetch işlemi burada yapılmıştır. Bütün veriyi results yapıp Results.jsx de gösteriyoruz
//.env.localdeki gizli api kodunu const API_KEY = process.env.API_KEY; almamıza yarar


//Results componeneti burada kullanmamizin sebebi home sayfasinin sanki dynamic bir sayfa gibi kullanmamizdan kaynaklaniyor
//http://localhost:3001/?genre=fetchTrending  aslinda kullanilan ana yol home sayfasidir


//movie/[id] klasorunde de bir fetch islemi vardir