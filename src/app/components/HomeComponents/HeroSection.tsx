import Image from 'next/image'
import React from 'react'

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
                    className='fixed top-0 left-0 w-full h-screen -z-[10]'
                />
                <div className='bg-black-black_transparent h-screen w-full'></div>
            </div>
        </div>
    )
}

export default HeroSection
