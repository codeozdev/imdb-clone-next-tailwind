export default function Loading() {
    return (
        <div className="flex justify-center">
            <img src="spinner.svg" alt="loading..." className="h-96"></img>
        </div>
    )
}

//https://loading.io/
//svg'yi public içine atıyoruz ve burada kullanıyoruz
//bazen geliştirme ortamında loading görünmeyebilir