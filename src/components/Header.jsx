import { VscGraph as LogoIFFinance } from "react-icons/vsc"
import { FaRegUserCircle as IconUser } from "react-icons/fa"

export default function Header(props){
    return (
        <div className="flex bg-black h-14 dark:bg-neutral-900 items-center p-5 justify-between">
            <LogoIFFinance className="text-orange-700 text-3xl" />
            {props?.user && <p>{props.user?.nome} tem a {false} idade de {props.user?.idade}</p>}
            {props.isLogged && <IconUser className="text-white text-3xl" />}
        </div>
    )
}