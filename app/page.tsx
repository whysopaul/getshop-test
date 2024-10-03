'use client'

import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Shapes from './_assets/shapes.png';
import { ScreenOne } from "./_components/ScreenOne";
import { ScreenDivOne } from "./_components/ScreenDivOne";
import { ScreenTwo } from "./_components/ScreenTwo";
import { ScreenDivTwo } from "./_components/ScreenDivTwo";
import { ScreenThree } from "./_components/ScreenThree";
import './home.scss';
import { useRef } from "react";

export default function Page() {

  const screenTwoRef = useRef<HTMLElement>(null)
  const screenThreeRef = useRef<HTMLElement>(null)

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
