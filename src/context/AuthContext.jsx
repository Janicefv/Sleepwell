import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto de autenticación
const AuthContext = createContext(null);

// Provider del contexto de autenticación
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si hay un usuario almacenado al cargar la aplicación
  useEffect(() => {
    const storedUser = localStorage.getItem('sleepwell_user');
    const storedToken = localStorage.getItem('sleepwell_token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Función de registro
  const register = async (userData) => {
    try {
      // Validar que el email no exista
      const users = JSON.parse(localStorage.getItem('sleepwell_users') || '[]');
      const existingUser = users.find(u => u.email === userData.email);
      
      if (existingUser) {
        throw new Error('El email ya está registrado');
      }

      // Crear nuevo usuario
      const newUser = {
        id: Date.now().toString(),
        fullName: userData.fullName,
        email: userData.email,
        username: userData.username,
        createdAt: new Date().toISOString()
      };

      // Guardar usuario (sin contraseña en el objeto del usuario)
      users.push({
        ...newUser,
        password: userData.password // En producción, esto debe estar hasheado
      });
      
      localStorage.setItem('sleepwell_users', JSON.stringify(users));

      // Generar token simulado (en producción sería JWT del backend)
      const token = btoa(JSON.stringify({ userId: newUser.id, exp: Date.now() + 86400000 }));

      // Guardar sesión
      localStorage.setItem('sleepwell_user', JSON.stringify(newUser));
      localStorage.setItem('sleepwell_token', token);

      setUser(newUser);
      return { success: true, user: newUser };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Función de login
  const login = async (credentials) => {
    try {
      const users = JSON.parse(localStorage.getItem('sleepwell_users') || '[]');
      
      // Buscar usuario por email
      const user = users.find(u => u.email === credentials.email);
      
      if (!user) {
        throw new Error('Email no registrado');
      }

      // Verificar contraseña
      if (user.password !== credentials.password) {
        throw new Error('Contraseña incorrecta');
      }

      // Crear objeto de usuario (sin contraseña)
      const userWithoutPassword = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt
      };

      // Generar token
      const token = btoa(JSON.stringify({ userId: user.id, exp: Date.now() + 86400000 }));

      // Guardar sesión
      localStorage.setItem('sleepwell_user', JSON.stringify(userWithoutPassword));
      localStorage.setItem('sleepwell_token', token);

      setUser(userWithoutPassword);
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Función de logout
  const logout = () => {
    localStorage.removeItem('sleepwell_user');
    localStorage.removeItem('sleepwell_token');
    setUser(null);
  };

  // Función para actualizar perfil de usuario
  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    localStorage.setItem('sleepwell_user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    loading,
    register,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
