'use client'

import { MutableRefObject, useEffect, useState } from "react"

export default function Header({
    refs
}: {
    refs: MutableRefObject<HTMLElement>[]
}) {

    const [isScroll, setIsScroll] = useState(false)
    const [activeScreen, setActiveScreen] = useState(1)


    useEffect(() => {
        const screenTwoDims = refs[0].current.getBoundingClientRect()
        const screenThreeDims = refs[1].current.getBoundingClientRect()

        const onScroll = () => {
            if (window?.scrollY >= 32) {
                setIsScroll(true)

                let tempActiveScreen = 1

                if (window.innerHeight + window.scrollY > screenTwoDims.top) {
                    tempActiveScreen = 2
                } else {
                    tempActiveScreen = 1
                }

                if (window.scrollY > screenTwoDims.bottom - 72) {
                    tempActiveScreen = 1
                }

                if (
                    window.innerHeight + window.scrollY > screenThreeDims.top &&
                    window.scrollY > screenTwoDims.bottom - 72
                ) {
                    tempActiveScreen = 3
                }

                if (window.scrollY > screenThreeDims.bottom - 72) {
                    tempActiveScreen = 1
                }

                setActiveScreen(tempActiveScreen)

                return
            }

            setIsScroll(false)
        }

        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return <header className={isScroll ? 'header header__scroll' : 'header header__default'}>
        <div className='header-logo' />
        <nav className='header-nav'>
            <button
                className={activeScreen === 2 ? 'header-nav-button header-nav-button__active' : 'header-nav-button'}
                onClick={() => refs[0].current.scrollIntoView({ behavior: 'smooth' })}
            >
                Преимущества
            </button>
            <button
                className={activeScreen === 3 ? 'header-nav-button header-nav-button__active' : 'header-nav-button'}
                onClick={() => refs[1].current.scrollIntoView({ behavior: 'smooth' })}
            >
                Как работаем
            </button>
        </nav>
    </header>
}