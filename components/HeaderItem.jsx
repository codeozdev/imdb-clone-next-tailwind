import Link from "next/link";

export default function HeaderItem({ title, adress, Icon }) {
    return (
        <div>
            <Link href={adress} className="mx-4 lg:mx-6 hover:text-amber-600">
                {/* iconlar sadece sm altinda gorunecek */}
                <Icon className='text-2xl sm:hidden mx-4' />
                <p className="hidden sm:inline my-2 text-sm">
                    {title}
                </p>
            </Link>
        </div>
    )
}

// MenuItem.jsx => Header.jsx'in iceriklerini olusturmak icin kullanilan componenttir