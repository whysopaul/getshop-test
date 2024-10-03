import Bullet from "./Bullet"

export default function ListItem({
    text
}: {
    text: string
}) {
    return <li>
        <Bullet />
        <span className='text-1'>
            {text}
        </span>
    </li>
}