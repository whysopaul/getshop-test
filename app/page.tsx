import Image from "next/image";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import ScreenTwoCard from "./_components/ScreenTwoCard";
import Shapes from './_assets/shapes.png';
import Clickwave from './_assets/clickwave.png';
import Zyphronix from './_assets/zyphronix.png';
import Novasphere from './_assets/novasphere.png';
import Laptop from './_assets/laptop.png';
import './home.scss';
import ListItem from "./_components/ListItem";
import { ScreenOne } from "./_components/ScreenOne";
import { ScreenDivOne } from "./_components/ScreenDivOne";

export default function Page() {
  return <>
    <div className='wrapper'>
      <Header />

      <div className='background'>
        <div className='background-image' style={{ backgroundImage: `url(${Shapes.src})` }} />
        <div className='background-blur' />
      </div>

      <main className='main'>
        <ScreenOne />

        <ScreenDivOne />

        <section className='screen-two'>
          <div className='screen-two-header'>
            <h2 className='h2'>
              Баланс между выручкой и удовлетворённостью пользователей
            </h2>
          </div>
          <div className='screen-two-content'>
            <ScreenTwoCard header={`Частотность под\u00A0контролем`} description={`Чтобы не ронять NPS и\u00A0не\u00A0увеличивать отток пользователей`} />
            <div className='screen-two-content-visual'>
              <div className='screen-two-content-visual-line' />
              <div className='screen-two-content-visual-center'>
                <svg width="80" height="75" viewBox="0 0 80 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_345)">
                    <path d="M70.2185 9.40415C70.8663 10.7735 71.2549 12.3201 71.2549 14.0116V60.9883C71.2549 62.6638 70.8663 64.2103 70.2185 65.5797C75.2226 66.4174 79.9999 62.4543 79.9999 56.993V17.9908C79.9999 12.4973 75.2064 8.56643 70.2185 9.40415Z" fill="white" />
                    <path opacity="0.8" d="M70.2195 9.40416C68.0818 4.92558 62.9644 2.39632 57.9766 4.00731C59.7094 6.00495 60.7944 8.64699 60.7944 11.6434V63.3404C60.7944 66.3207 59.7094 68.9789 57.9928 70.9765C62.9968 72.5875 68.098 70.0421 70.2357 65.5797C70.8834 64.2103 71.2721 62.6477 71.2721 60.9883V14.0116C71.2721 12.3362 70.8834 10.7896 70.2357 9.40416H70.2195Z" fill="white" />
                    <path opacity="0.4" d="M22.8664 58.4106C18.7692 56.9446 16.0162 52.9654 16.0162 48.503V27.7372C16.0162 23.3875 18.6235 19.505 22.5749 17.9423L57.3603 4.21661C57.5708 4.13606 57.7652 4.08773 57.9757 4.02329C55.0121 0.591868 50.1538 -0.954691 45.5061 0.881848L7.20648 15.993C2.8664 17.7007 0 21.9859 0 26.7706V49.6146C0 54.5281 3.02834 58.8939 7.53036 60.521L45.8138 74.2628C50.3806 75.9061 55.0769 74.3434 57.9595 71.0086C57.8462 70.9764 57.749 70.9603 57.6356 70.9119L22.834 58.4267L22.8664 58.4106Z" fill="white" />
                    <path opacity="0.6" d="M60.7933 62.3406L39.9998 54.8665C36.6151 53.6421 34.3317 50.3396 34.3317 46.6504V29.4127C34.3317 25.8041 36.4856 22.5821 39.7568 21.2772L60.7933 12.9322V11.6595C60.7933 8.66305 59.7083 6.03712 57.9755 4.02338C57.7649 4.08782 57.5706 4.13615 57.3601 4.2167L22.5585 17.9585C18.607 19.5212 15.9998 23.4037 15.9998 27.7534V48.5192C15.9998 52.9816 18.7528 56.9447 22.85 58.4268L57.6516 70.912C57.7649 70.9443 57.8621 70.9765 57.9755 71.0087C59.7083 68.9949 60.7771 66.3529 60.7771 63.3726L60.7933 62.4019V62.3406Z" fill="white" />
                    <path d="M34.3307 29.3967V46.6343C34.3307 50.3396 36.5979 53.6422 39.9987 54.8504L60.7922 62.3416V12.9323L39.7558 21.2772C36.4845 22.566 34.3307 25.8041 34.3307 29.4128V29.3967Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_345">
                      <rect width="80" height="74.8148" fill="white" transform="translate(0 0.0925903)" />
                    </clipPath>
                  </defs>
                </svg>

              </div>
              <div className='screen-two-content-visual-line right' />
            </div>
            <ScreenTwoCard header='Максимальная выручка' description={`За счёт заполенения всех рекламных мест по высокой\u00A0цене`} />
          </div>
        </section>

        <section className='screen-div-two'>
          <div className='screen-div-two-header'>
            <h3 className='h3'>
              Наши партнёры по монетизации
            </h3>
          </div>
          <div className='screen-div-two-partners'>
            <Image src={Clickwave} alt='Clickwave' />
            <Image src={Zyphronix} alt='Zyphronix' />
            <Image src={Novasphere} alt='Novasphere' />
          </div>
        </section>

        <section className='screen-three'>
          <div className='screen-three-text'>
            <h2 className='h2'>
              Подробные отчёты для вас и правообладателей
            </h2>
            <ul className='screen-three-text-list'>
              <ListItem text='Выручка, CTR, показы и другие показатели в реальном времени.' />
              <ListItem text='Инструменты контроля качества трафика.' />
              <ListItem text={`Ежемесячные автоматические отчёты для\u00A0каждого правообладателя.`} />
            </ul>
            <button className='button button-black'>
              Заказать звонок
            </button>
          </div>
          <div className='screen-three-image'>
            <Image src={Laptop} width={721} height={482} alt='Laptop' />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  </>;
}
