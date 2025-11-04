// LoginForm.jsx
import React, { useState } from 'react';

function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const resposta = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usuario, senha })
    });

    if (!resposta.ok) {
        setMensagem('Erro: não foi possível conectar ao servidor.');
        return;
    }
    const dados = await resposta.json();
    
    if (dados.status === 'sucesso') {
      setMensagem(`✅ ${dados.mensagem}`);
    } else {
      setMensagem(`❌ ${dados.mensagem}`);
    }
  } catch (error) {
    
    setMensagem('Erro: servidor indisponível ou problema na conexão.');
    console.error(erro);
  }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );
}

export default LoginForm;
