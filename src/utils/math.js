export const evaluateExpression = (expression) => {
  try {
    // Limpa a expressão para evitar caracteres inválidos
    const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, "");

    // Usa o construtor Function para avaliar a expressão
    const result = new Function(`return ${sanitizedExpression}`)();

    // Retorna o resultado com precisão de 4 casas decimais
    return parseFloat(result.toFixed(4));
  } catch (error) {
    console.error("Erro na avaliação:", error);
    return "Error";
  }
};