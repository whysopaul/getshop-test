import Image from "next/image";
import ListItem from "../../ListItem";
import Laptop from '../../../_assets/laptop.png';
import { forwardRef, MutableRefObject } from "react";

export const ScreenThree = forwardRef(function ScreenThree(_, ref: MutableRefObject<HTMLElement>) {
    return <section className='screen-three' ref={ref}>
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
})