// Utilidades de validación para formularios

/**
 * Valida un email
 * @param {string} email - Email a validar
 * @returns {object} - {isValid: boolean, error: string}
 */
export const validateEmail = (email) => {
  if (!email) {
    return { isValid: false, error: 'El email es requerido' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Email inválido' };
  }
  
  return { isValid: true, error: '' };
};

/**
 * Valida una contraseña
 * @param {string} password - Contraseña a validar
 * @returns {object} - {isValid: boolean, error: string}
 */
export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, error: 'La contraseña es requerida' };
  }
  
  if (password.length < 6) {
    return { isValid: false, error: 'Mínimo 6 caracteres' };
  }
  
  if (password.length > 50) {
    return { isValid: false, error: 'Máximo 50 caracteres' };
  }
  
  // Validación de complejidad (al menos una letra y un número)
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  
  if (!hasLetter || !hasNumber) {
    return { isValid: false, error: 'Debe contener letras y números' };
  }
  
  return { isValid: true, error: '' };
};

/**
 * Valida que las contraseñas coincidan
 * @param {string} password - Contraseña
 * @param {string} confirmPassword - Confirmación de contraseña
 * @returns {object} - {isValid: boolean, error: string}
 */
export const validatePasswordMatch = (password, confirmPassword) => {
  if (!confirmPassword) {
    return { isValid: false, error: 'Confirma tu contraseña' };
  }
  
  if (password !== confirmPassword) {
    return { isValid: false, error: 'Las contraseñas no coinciden' };
  }
  
  return { isValid: true, error: '' };
};

/**
 * Valida un nombre completo
 * @param {string} name - Nombre a validar
 * @returns {object} - {isValid: boolean, error: string}
 */
export const validateFullName = (name) => {
  if (!name) {
    return { isValid: false, error: 'El nombre es requerido' };
  }
  
  if (name.trim().length < 3) {
    return { isValid: false, error: 'Mínimo 3 caracteres' };
  }
  
  if (name.trim().length > 50) {
    return { isValid: false, error: 'Máximo 50 caracteres' };
  }
  
  // Validar que solo contenga letras y espacios
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  
  if (!nameRegex.test(name)) {
    return { isValid: false, error: 'Solo letras y espacios' };
  }
  
  return { isValid: true, error: '' };
};

/**
 * Valida un nombre de usuario
 * @param {string} username - Username a validar
 * @returns {object} - {isValid: boolean, error: string}
 */
export const validateUsername = (username) => {
  if (!username) {
    return { isValid: false, error: 'El usuario es requerido' };
  }
  
  if (username.length < 3) {
    return { isValid: false, error: 'Mínimo 3 caracteres' };
  }
  
  if (username.length > 20) {
    return { isValid: false, error: 'Máximo 20 caracteres' };
  }
  
  // Solo letras, números y guiones bajos
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  
  if (!usernameRegex.test(username)) {
    return { isValid: false, error: 'Solo letras, números y _' };
  }
  
  return { isValid: true, error: '' };
};

/**
 * Calcula la fortaleza de una contraseña
 * @param {string} password - Contraseña a evaluar
 * @returns {object} - {strength: string, score: number}
 */
export const getPasswordStrength = (password) => {
  if (!password) return { strength: 'Ninguna', score: 0 };
  
  let score = 0;
  
  // Longitud
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  
  // Complejidad
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[@$!%*?&]/.test(password)) score++;
  
  // Determinar fortaleza
  if (score <= 2) return { strength: 'Débil', score };
  if (score <= 4) return { strength: 'Media', score };
  return { strength: 'Fuerte', score };
};
