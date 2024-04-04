import clases from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <ul className={clases.ul}>
                <Link to='/jugar' className={clases.li}><li>Jugar</li></Link>
                <Link to='/historial' className={clases.li}><li>Historial</li></Link>
            </ul>
        </div>
    )
}

export default NavBar