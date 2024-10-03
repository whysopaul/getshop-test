import { Bullet } from "../../ui";

export function ListItem({
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