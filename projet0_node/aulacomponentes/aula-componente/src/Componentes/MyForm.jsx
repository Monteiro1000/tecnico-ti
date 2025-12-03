import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, bio });
    };

    return (
      <div>
        { /* 1 - criação de form*/ }
        <form onSubmit={handleSubmit}> 
        <div>
        <label htmlFor="name">Nome: </label>
        <input 
          type="text" 
          id="name"
          name="name"
          placeholder="Digite o seu nome: " 
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <br />
        <label htmlFor="email"> E-mail:
          
          <input 
            type="email" 
            name="email" 
            id="email" 
            placeholder="Digite o seu e-mail" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          
        </label>
        <br />

        <label htmlFor="bio">
          
          <span>Bio:</span>
          <textarea 
          id="bio"
          name="bio"
          placeholder="Descrição de usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          ></textarea>
        </label>
        </div>
        <input type="submit" value="Enviar" />
        </form>
        </div>
    ); 
};

export default MyForm; 