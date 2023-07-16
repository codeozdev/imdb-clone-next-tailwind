import Results from "@/components/Results"

export default async function SearchPage({ params }) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`)

    const data = await res.json()
    const results = data.results

    if (!results) {
        throw new Error('No results found.')
    }

    return (
        <div>
            {results && results.length === 0 && (
                <h1 className="text-center pt-6">No results found</h1>
            )}
            {results && <Results results={results} />}  
            {/* results aramada girilen (wolf) temsil ederken Results componentini temsil ediyor ve sonuclari bastiriyor */}
        </div>
    )
}


//&query=${params.searchTerm}` dosya ismindeki [searchTerm] ile buradaki params.searchTerm ayni seyler. Bu sayede arama yapildiginda arama sonuclarini ekrana basiyoruz

