import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";

import GlobalStyle from "./styles/global";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount)); //saídas

    const amountIncome = transactionsList
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount)); //entradas

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2); //total saídas
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2); //total entradas

    const total = Math.abs(income - expense).toFixed(2); //cálculo total

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`R$ ${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`); //condição para que se o valor total de saída for menor que o total de entrada, vai ser acrescentado um valor negativo na frente
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
