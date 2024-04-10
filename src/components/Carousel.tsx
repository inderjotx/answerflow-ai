import Image from 'next/image'

export function Carousel() {

    const logos = [
        { src: '/facebook.svg', alt: 'Facebook' },
        { src: '/disney.svg', alt: 'Disney' },
        { src: '/airbnb.svg', alt: 'Airbnb' },
        { src: '/apple.svg', alt: 'Apple' },
        { src: '/spark.svg', alt: 'Spark' },
        { src: '/samsung.svg', alt: 'Samsung' },
        { src: '/quora.svg', alt: 'Quora' },
        { src: '/sass.svg', alt: 'Sass' },
    ]

    return (
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, index) => (
                    <li key={index}>
                        <Image src={logo.src} placeholder='blur' blurDataURL={logo.src} height={110} width={110} alt={logo.alt} />
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-14 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {logos.map((logo, index) => (
                    <li key={index}>
                        <Image src={logo.src} placeholder='blur' blurDataURL={logo.src} height={110} width={110} alt={logo.alt} />
                    </li>
                ))}
            </ul>
        </div>
    )
}