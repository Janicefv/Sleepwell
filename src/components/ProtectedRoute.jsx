import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * Componente para proteger rutas que requieren autenticación
 * Si el usuario no está autenticado, redirige a la página de inicio
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // Mostrar nada mientras se verifica la autenticación
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#1089D3' }}>Cargando...</h2>
        </div>
      </div>
    );
  }

  // Si no está autenticado, redirigir al inicio
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, mostrar el contenido protegido
  return children;
}

export default ProtectedRoute;
