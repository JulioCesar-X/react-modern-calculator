import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import { evaluateExpression } from "../utils/math";
import "../styles/calculator.scss";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [lastResult, setLastResult] = useState(null);
  const [newCalculation, setNewCalculation] = useState(false);

  const handleButtonClick = (value) => {
    if (value === "C") {
      // Reseta o estado da calculadora
      setInput("0");
      setLastResult(null);
      setNewCalculation(false);
    } else if (value === "=") {
      // Avalia a expressão quando "=" é clicado
      try {
        const result = evaluateExpression(input);
        setInput(result.toString());
        setLastResult(result.toString());
        setNewCalculation(true);
      } catch {
        setInput("Error");
      }
    } else if (/[+\-*/]/.test(value)) {
      // Tratamento para operadores consecutivos
      if (newCalculation) {
        // Reinicia com o último resultado
        setInput(lastResult + value);
        setNewCalculation(false);
      } else if (/[+\-*/]/.test(input.slice(-1)) && value !== "-") {
        // Substitui operadores consecutivos, exceto sinal negativo
        setInput((prev) => prev.replace(/([+\-*/])+$/, value));
      } else if (value === "-" && /[+\-*/]/.test(input.slice(-1))) {
        // Permite sinal negativo após operadores
        setInput((prev) => prev + value);
      } else {
        // Adiciona o operador à expressão
        setInput((prev) => prev + value);
      }
    } else if (value === ".") {
      // Evita múltiplos pontos no mesmo número
      if (!input.split(/[+\-*/]/).slice(-1)[0].includes(".")) {
        setInput((prev) => prev + value);
      }
    } else {
      // Entrada de números
      if (newCalculation) {
        setInput(value);
        setNewCalculation(false);
      } else {
        setInput((prev) => (prev === "0" ? value : prev + value));
      }
    }
  };

  const buttons = [
    { id: "zero", value: "0" },
    { id: "one", value: "1" },
    { id: "two", value: "2" },
    { id: "three", value: "3" },
    { id: "four", value: "4" },
    { id: "five", value: "5" },
    { id: "six", value: "6" },
    { id: "seven", value: "7" },
    { id: "eight", value: "8" },
    { id: "nine", value: "9" },
    { id: "add", value: "+" },
    { id: "subtract", value: "-" },
    { id: "multiply", value: "*" },
    { id: "divide", value: "/" },
    { id: "decimal", value: "." },
    { id: "equals", value: "=" },
    { id: "clear", value: "C" },
  ];

  return (
    <div className="calculator">
      <Display id="display" value={input} />
      <div className="buttons">
        {buttons.map((btn) => (
          <Button
            key={btn.id}
            id={btn.id}
            value={btn.value}
            onClick={() => handleButtonClick(btn.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
