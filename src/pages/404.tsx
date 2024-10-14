import { Link } from "react-router-dom"
import classes from './404.module.scss';

export const NotFound = () => {
    return (
        <div className="container">
            <h1>Not Found</h1>
            <div>
                <p className={classes.description}>Осавь надежу всяк сюда входящий... И вернись назад, путник!</p>
            </div>
            <Link to="/" className={classes.link}>To home</Link>
        </div>
    )
}