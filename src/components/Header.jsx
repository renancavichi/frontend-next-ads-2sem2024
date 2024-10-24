import Logo from "../components/Logo"
import NavBar from "../components/NavBar"

export default function Header(){
    return (
        <div className="flex bg-black h-14 dark:bg-neutral-900 items-center p-5 justify-between">
            <Logo />
            <NavBar />
        </div>
    )
}