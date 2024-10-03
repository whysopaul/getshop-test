'use client'

import { useRef } from "react";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import Shapes from './_assets/shapes.png';
import { ScreenOne } from "./_components/ScreenOne";
import { ScreenDivOne } from "./_components/ScreenDivOne";
import { ScreenTwo } from "./_components/ScreenTwo";
import { ScreenDivTwo } from "./_components/ScreenDivTwo";
import { ScreenThree } from "./_components/ScreenThree";
import './home.scss';

export default function Page() {

  const screenTwoRef = useRef<HTMLDivElement>(null)
  const screenThreeRef = useRef<HTMLDivElement>(null)

  return <>
    <div className='wrapper'>
      <Header refs={[screenTwoRef, screenThreeRef]} />

      <div className='background'>
        <div className='background-image' style={{ backgroundImage: `url(${Shapes.src})` }} />
        <div className='background-blur' />
      </div>

      <main className='main'>
        <ScreenOne />

        <ScreenDivOne />

        <ScreenTwo ref={screenTwoRef} />

        <ScreenDivTwo />

        <ScreenThree ref={screenThreeRef} />
      </main>

      <Footer />
    </div>
  </>;
}
