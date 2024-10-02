import Bullet from "./Bullet"

export default function ScreenTwoCard({
    header,
    description
}: {
    header: string,
    description: string
}) {
    return <div className='screen-two-content-card'>
        <Bullet />
        <h3 className='h3'>
            {header}
        </h3>
        <p className='text-2'>
            {description}
        </p>
    </div>
}