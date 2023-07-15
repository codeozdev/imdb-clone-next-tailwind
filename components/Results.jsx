import ResultsCard from "./ResultsCard";

export default function Results({ results }) {
    return (
        //Kardlarin çözünürlüğe göre grid yapısı burada ayarlandı
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-full sm:mx-5 py-4">
            {
                results.map((result) => (
                    <ResultsCard key={result.id} result={result} />
                ))

            }
        </div>
    )
}

//page.js dosyasından props alıyor. Alınan verileri map ile dönüyor bu sayede 20 tane filmi ekrana basıyor
//Card.js'ye props olarak result'u gönderiyor