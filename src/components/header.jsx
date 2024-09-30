import React, { useEffect, useState } from 'react';
import Logo from '../assets/LogoFnC.webp';
import animLogo from '../assets/animLogo.gif';

export default function Header() {
    const [isAnimVisible, setIsAnimVisible] = useState(true);
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimVisible(false);
            setIsLogoVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, [])

    return (
        <header className='header'>
            <div className="masthead">
                <img
                    className={`masthead__brand--animation ${isAnimVisible ? 'fade-in' : 'fade-out'}`}
                    src={animLogo}
                    alt="Logo animé de F&C Web Studio"
                    style={{ display: isAnimVisible ? 'block' : 'none' }}
                />
                <img
                    className={`masthead__brand ${isLogoVisible ? 'fade-in' : 'fade-out'}`}
                    src={Logo}
                    alt="Logo F&C Web Studio"
                    style={{ display: isLogoVisible ? 'block' : 'none' }}
                />
            </div>
        </header>
    )
}