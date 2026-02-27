// src/utils/formatters.ts

export const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, ""); // solo números
  const trimmed = numbers.slice(0, 10); // máximo 10 dígitos

  if (trimmed.length <= 3) {
    return `(${trimmed}`;
  }

  if (trimmed.length <= 6) {
    return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3)}`;
  }

  return `(${trimmed.slice(0, 3)}) ${trimmed.slice(3, 6)}-${trimmed.slice(6)}`;
};