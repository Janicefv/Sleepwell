import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

/**
 * Hook personalizado para acceder al contexto de autenticación
 * Proporciona acceso a los métodos y estado de autenticación
 * 
 * @returns {object} Objeto con propiedades y métodos de autenticación:
 *   - user: Usuario actualmente autenticado (null si no hay sesión)
 *   - loading: Estado de carga de la autenticación
 *   - isAuthenticated: Boolean que indica si hay un usuario autenticado
 *   - login: Función para iniciar sesión
 *   - register: Función para registrar un nuevo usuario
 *   - logout: Función para cerrar sesión
 *   - updateProfile: Función para actualizar el perfil del usuario
 * 
 * @example
 * const { user, login, logout, isAuthenticated } = useAuth();
 * 
 * if (isAuthenticated) {
 *   console.log('Usuario:', user.fullName);
 * }
 */
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  
  return context;
}

export default useAuth;
