import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Updatepokedex() {
  const [numero_pokedex, setnumero] = useState('');
  const [pokemon, setpokemon] = useState('');
  const [tipagem, settipagem] = useState('');
  const [descricao, setdescricao] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { pokemon, tipagem, descricao };

    try {
      const response = await fetch(`http://localhost:5000/pokedex/${numero_pokedex}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Matrícula atualizada com sucesso!');
        navigate("/pokedex");
      } else {
        alert('Erro ao atualizar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao atualizar matrícula:', error);
    }
  };

  return (
    <div className='container'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Atualizar Pokémon</h2>
        <input
          type="text"
          placeholder="Número do Pokémon"
          value={numero_pokedex}
          onChange={(e) => setnumero(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome do Pokemon"
          value={pokemon}
          onChange={(e) => setpokemon(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tipagem"
          value={tipagem}
          onChange={(e) => settipagem(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setdescricao(e.target.value)}
          required
        />
        <button type="submit">Atualizar Pokemon</button>
      </form>
    </div>
  );
}
