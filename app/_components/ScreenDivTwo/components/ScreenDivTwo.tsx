import Image from "next/image";
import Clickwave from '../assets/clickwave.png';
import Zyphronix from '../assets/zyphronix.png';
import Novasphere from '../assets/novasphere.png';

export function ScreenDivTwo() {
    return <section className='screen-div-two'>
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
}