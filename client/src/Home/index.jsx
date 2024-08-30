import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Pokédex</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Registrar Pokémon</div>
                </Link>
                <Link to="/matriculas" className="card">
                    <div>Pokédex</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Pokémon</div>
                </Link>
            </div>
        </div>
    );
}
