import { VscGraph as LogoIFFinance } from "react-icons/vsc"
import './Logo.css'

export default function Logo() {
  return (
    <div style={styles.container}>
        <LogoIFFinance className="text-orange-700 text-3xl margintop" />
        <h1><span style={styles.if}>IF</span>Finance</h1>
    </div>
  )
}

const styles = {
    container: {
        display: "flex", 
        color: 'white',
        gap: 14,
        fontSize: 28,
        justifyContent: 'center',
        alignItens: "center"
    },
    if: {
        color: '#ea580c'
    }
}