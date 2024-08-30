import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function Createpokedex() {
  const [imagem, setimagem] = useState('');
  const [nome, setnome] = useState('');
  const [numero_pokedex, setnumero] = useState('');
  const [tipagem, settipagem] = useState('');
  const [descricao, setdescricao] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMatricula = { imagem, nome, numero_pokedex, tipagem, descricao };

    try {
      const response = await fetch('http://localhost:5000/pokedex', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMatricula),
      });
      if (response.ok) {
        alert('Matrícula criada com sucesso!');
        setimagem('');
        setnome('');
        setnumero('');
        settipagem('');
        setdescricao('');
        navigate("/pokedex");
      } else {
        alert('Erro ao criar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao criar matrícula:', error);
    }
  };

  return (
    <div className='container'>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Adicionar Pokemon</h2>
        <input
          type="text"
          placeholder="Imagem"
          value={imagem}
          onChange={(e) => setimagem(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nome do Pokemon"
          value={nome}
          onChange={(e) => setnome(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Número Pokédex"
          value={numero_pokedex}
          onChange={(e) => setnumero(e.target.value)}
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
        <button type="submit">Criar Matrícula</button>
      </form>
    </div>
  );
}
