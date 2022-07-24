import React, { useState } from "react";
import Grid from "../Grid";
import * as C from "./styles";

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpensive, setIsExpensive] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor");
      return;
    } else if (amount < 1) {
      alert("O valor precisa ser positivo");
      return;
    }

    // adicionar um limite para evitar desc gigantescas

    // esse link mostra isso:
    // https://prnt.sc/LlAm9doAb30w
    if (desc.split("").length > 100) {
      alert("Limite de 100 caracteres");
      setDesc(desc.substring(0, 100));
      return;
    }

    // adicionar um limite para evitar valores gigantescos
    // mesmo motivo acima
    if (amount.split("").length > 20) {
      alert("Limite de 20 caracteres");
      setAmount(amount.substring(0, 20));
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpensive,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      {/* mudei "Container" para um "Form" justamente */}
      {/* para que você possa fazer o submit com a tecla */}
      {/* "enter" - isso é um detalhe que faz com que o UX */}
      {/* fique mais fluido e intuitivo */}
      <C.Container onSubmit={(e) => e.preventDefault()}>
        {/* "preventDefault() pra evitar que o submit dê refresh na página" */}
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.Label>Valor</C.Label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <C.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setIsExpensive(!isExpensive)}
          />
          <C.Label htmlFor="rIncome">Entradas</C.Label>
          <C.Input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setIsExpensive(!isExpensive)}
          />
          <C.Label htmlFor="rExpenses">Saídas</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>Adicionar</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
