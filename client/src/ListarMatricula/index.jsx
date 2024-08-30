import { useEffect, useState } from 'react';
import '../globals.css';

export default function Readpokedex() {
  const [pokedex, setpokedex] = useState([]);


  useEffect(() => {
    const fetchpokedex = async () => {
      try {
        const response = await fetch('http://localhost:5000/pokedex');
        const data = await response.json();
        setpokedex(data);
      } catch (error) {
        console.error('Erro ao buscar as matrículas:', error);
      }
    };

    fetchpokedex();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/pokedex/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setpokedex(pokedex.filter((pokedex) => pokedex._id !== id));
        alert('Matrícula excluída com sucesso!');
      } else {
        alert('Erro ao excluir matrícula.');
      }
    } catch (error) {
      console.error('Erro ao excluir matrícula:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Pokedex</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagem</th>
            <th>Nome do Pokemon</th>
            <th>Numero</th>
            <th>Tipagem</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pokedex.map((pokedex) => (
            <tr key={pokedex._id}>
              <td>{pokedex._id}</td>
              <td><img src={pokedex.imagem}/></td>
              <td>{pokedex.nome}</td>
              <td>{pokedex.numero_pokedex}</td>
              <td>{pokedex.tipagem}</td>
              <td>{pokedex.descricao}</td>
              <td>
                <button onClick={() => handleDelete(pokedex._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
