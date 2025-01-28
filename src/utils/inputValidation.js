export const isValidInput = (input, currentInput) => {
  if (input === '.' && currentInput.includes('.')) {
    return false; // Não permite mais de um ponto decimal
  }
  if (input === '0' && currentInput === '0') {
    return false; // Evita múltiplos zeros no início
  }
  return true;
};