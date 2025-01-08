import Image from 'next/image'
import React from 'react'
import SearchInterface from './herosection-components/SearchInterface'

const HeroSection = () => {
    return (
        <div>
            <div className="relative w-full h-screen">
                <Image
                    src="https://localkaro.com/images/26367local-karo-home-banner.jpg"
                    alt="hero"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    className='fixed top-0 left-0 w-full h-screen -z-[10] aspect-auto'
                />
                <div className='flex items-center justify-center h-full'>
            <SearchInterface />

                </div>
                <div className='bg-black-black_transparent h-screen w-full top-0 absolute z-[-1]'></div>
            </div>
        </div>
    )
}

export default HeroSection
