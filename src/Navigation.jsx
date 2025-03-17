import { Link } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav>
            <Link to="/generate">Генерировать QR код</Link>
            <Link to="/scan">Сканировать QR код</Link>
        </nav>
    );
};