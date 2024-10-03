import { VscGraph as LogoIFFinance } from "react-icons/vsc"

export default function Header(){
    return (
        <div className="flex bg-black h-14 dark:bg-neutral-900 items-center p-5">
            <LogoIFFinance className="text-orange-700 text-3xl" />
        </div>
    )
}