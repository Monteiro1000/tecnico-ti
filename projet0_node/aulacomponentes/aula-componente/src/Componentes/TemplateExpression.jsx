const TemplateExpression = () => {
    const nome = "Matheus";

    const data = {
        idade: 31,
        Profissão: "Programador",

    };

    return (
        <div>
            <p>a soma é {2+9}</p>
            <h3>Bem-vindo {nome}</h3>

            <p>Sua idade é {data.idade} e você trabalha como {data.Profissão}
            </p>
        </div>
    );
};

export default TemplateExpression