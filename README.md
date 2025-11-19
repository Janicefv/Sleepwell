# SleepWell - Plataforma de Salud Digital 🌙

Aplicación web desarrollada con React + Vite que utiliza inteligencia artificial para predecir, prevenir y gestionar trastornos del sueño relacionados con la ansiedad post-pandemia.

## 🚀 Características Principales

### 🔐 Sistema de Autenticación Completo
- **Registro de usuarios** con validación avanzada en tiempo real
- **Inicio de sesión** seguro con gestión de sesiones
- **Protección de rutas** privadas con React Router
- **Persistencia de sesión** usando localStorage
- **Validación de formularios** con feedback inmediato
- **Indicador de fortaleza de contraseña** en tiempo real

### 📊 Funcionalidades
- Dashboard personalizado para usuarios autenticados
- Predicción inteligente de trastornos del sueño (IA)
- Análisis de patrones de sueño
- Recomendaciones personalizadas
- Seguimiento de progreso
- Privacidad y seguridad de datos

## 🛠️ Tecnologías Utilizadas

- **React 19.1.1** - Biblioteca de interfaz de usuario
- **Vite 7.1.7** - Build tool y dev server
- **React Router DOM** - Navegación y rutas protegidas
- **Material-UI (@mui/material)** - Componentes UI (Modal, CircularProgress)
- **Styled Components** - CSS-in-JS para estilos avanzados
- **Context API** - Gestión de estado global de autenticación

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]

# Navegar al directorio
cd sleepwell

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🏗️ Estructura del Proyecto

```
sleepwell/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.jsx       # Barra de navegación con auth
│   │   ├── Footer.jsx       # Pie de página
│   │   ├── LoginModal.jsx   # Modal de inicio de sesión
│   │   ├── RegisterModal.jsx # Modal de registro
│   │   ├── InfoSection.jsx  # Sección informativa
│   │   ├── CentralImage.jsx # Imagen central
│   │   └── ProtectedRoute.jsx # HOC para rutas protegidas
│   ├── context/             # Contextos de React
│   │   └── AuthContext.jsx  # Contexto de autenticación
│   ├── hooks/               # Hooks personalizados
│   │   └── useAuth.js       # Hook de autenticación
│   ├── pages/               # Páginas principales
│   │   └── Dashboard.jsx    # Panel de usuario
│   ├── utils/               # Utilidades
│   │   └── validation.js    # Funciones de validación
│   ├── App.jsx              # Componente principal con rutas
│   ├── Home.jsx             # Página de inicio
│   └── main.jsx             # Punto de entrada
├── public/                  # Archivos estáticos
├── package.json             # Dependencias
└── vite.config.js          # Configuración de Vite
```

## 📖 Guía de Uso

### Sistema de Autenticación

#### 1. Registro de Usuario

El formulario de registro incluye validación avanzada:

```jsx
// Validaciones implementadas:
- Nombre completo (mínimo 3 caracteres, solo letras)
- Email (formato válido)
- Username (3-20 caracteres, alfanumérico)
- Contraseña (mínimo 6 caracteres, letras y números)
- Confirmación de contraseña (coincidencia)
- Aceptación de términos y condiciones
```

**Características:**
- ✅ Indicador de fortaleza de contraseña en tiempo real
- ✅ Validación en tiempo real con mensajes de error claros
- ✅ Deshabilita el botón hasta cumplir requisitos
- ✅ Feedback visual de errores por campo

#### 2. Inicio de Sesión

```jsx
// Proceso de login:
1. Usuario ingresa email y contraseña
2. Sistema valida formato de datos
3. Verifica credenciales contra localStorage
4. Crea sesión y redirige a Dashboard
5. Persiste sesión en navegador
```

#### 3. Protección de Rutas

Las rutas están protegidas automáticamente:

```jsx
// Rutas públicas
- / (Home) - Accesible sin autenticación

// Rutas protegidas (requieren login)
- /dashboard - Panel de usuario
```

## 🧪 Validaciones Implementadas

### Validación de Email
```javascript
- Formato: example@domain.com
- No permite espacios
- Dominio válido requerido
```

### Validación de Contraseña
```javascript
- Longitud: 6-50 caracteres
- Debe contener: letras y números
- Fortaleza calculada en tiempo real
  - Débil: < 3 puntos
  - Media: 3-4 puntos  
  - Fuerte: 5-6 puntos
```

### Validación de Nombre
```javascript
- Longitud: 3-50 caracteres
- Solo letras y espacios
- Soporta caracteres especiales (á, é, í, ó, ú, ñ)
```

### Validación de Username
```javascript
- Longitud: 3-20 caracteres
- Solo alfanuméricos y guión bajo (_)
- Sin espacios
```

## 🔒 Seguridad

### Implementaciones Actuales:
- ✅ Validación en cliente (frontend)
- ✅ Inputs controlados (React state)
- ✅ Persistencia segura en localStorage
- ✅ Tokens de sesión (simulados)
- ✅ Rutas protegidas

### Recomendaciones para Producción:
- 🔄 Implementar backend con Node.js/NestJS
- 🔄 Usar JWT para autenticación
- 🔄 Hashear contraseñas con bcrypt
- 🔄 Implementar HTTPS obligatorio
- 🔄 Validación en servidor (backend)
- 🔄 Rate limiting para prevenir ataques
- 🔄 Sanitización de inputs
- 🔄 Protección CSRF

## 📚 API del Contexto de Autenticación

### useAuth Hook

```jsx
import { useAuth } from './hooks/useAuth';

function Component() {
  const { 
    user,              // Usuario actual (objeto)
    loading,           // Estado de carga
    isAuthenticated,   // Boolean de autenticación
    login,             // Función de login
    register,          // Función de registro
    logout,            // Función de logout
    updateProfile      // Función de actualización
  } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <p>Hola, {user.fullName}</p>
      ) : (
        <p>Por favor inicia sesión</p>
      )}
    </div>
  );
}
```

### Métodos Disponibles

#### register(userData)
```jsx
const result = await register({
  fullName: 'Juan Pérez',
  email: 'juan@example.com',
  username: 'juanp',
  password: 'Password123',
  confirmPassword: 'Password123'
});

if (result.success) {
  // Registro exitoso
  console.log('Usuario:', result.user);
} else {
  // Error en registro
  console.error(result.error);
}
```

#### login(credentials)
```jsx
const result = await login({
  email: 'juan@example.com',
  password: 'Password123'
});

if (result.success) {
  // Login exitoso
  navigate('/dashboard');
} else {
  // Error en login
  setError(result.error);
}
```

#### logout()
```jsx
logout(); // Cierra sesión y limpia localStorage
navigate('/');
```

## 🎨 Componentes Principales

### LoginModal
Modal de inicio de sesión con:
- Inputs controlados
- Validación en tiempo real
- Feedback de errores
- Loading state
- Autenticación social (UI placeholder)

### RegisterModal
Modal de registro con:
- Formulario de 5 campos
- Validación avanzada multicapa
- Indicador de fortaleza de contraseña
- Checkbox de términos y condiciones
- Manejo de errores por campo

### Dashboard
Panel privado del usuario con:
- Información del usuario
- Tarjetas de funcionalidades
- Botón de logout
- Diseño responsivo

### ProtectedRoute
HOC para proteger rutas:
- Verifica autenticación
- Redirige si no hay sesión
- Muestra loader mientras verifica

## 📊 Flujo de Autenticación

```
┌─────────────┐
│   Usuario   │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  Abre aplicación    │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐      ┌──────────────────┐
│ AuthContext verifica├─────►│ localStorage     │
│ si hay sesión       │◄─────┤ tiene token?     │
└──────┬──────────────┘      └──────────────────┘
       │
       ├─── SÍ ──► Redirige a Dashboard
       │
       └─── NO ──► Muestra Home con modales
                   │
                   ├─ Login ──► Valida ──► Dashboard
                   │
                   └─ Register ──► Valida ──► Dashboard
```

## 🧩 Ejemplos de Código

### Crear un componente protegido

```jsx
import { useAuth } from './hooks/useAuth';

function MiComponenteProtegido() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Bienvenido, {user.fullName}</h1>
      <button onClick={logout}>Salir</button>
    </div>
  );
}
```

### Validar formularios personalizados

```jsx
import { validateEmail, validatePassword } from './utils/validation';

function MiFormulario() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setError(validation.error);
      return;
    }
    
    // Continuar con el envío
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      {error && <span>{error}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en http://localhost:5173

# Producción
npm run build        # Crea build de producción en /dist
npm run preview      # Previsualiza el build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar código
```

## 🐛 Solución de Problemas

### Error: "useAuth must be used within AuthProvider"
**Solución:** Asegúrate de que tu componente esté envuelto en `<AuthProvider>` en `main.jsx`

### Sesión no persiste al recargar
**Solución:** Verifica que localStorage esté habilitado en tu navegador

### Rutas no funcionan correctamente
**Solución:** Asegúrate de tener `<BrowserRouter>` en `main.jsx`

## 🚧 Roadmap

### Próximas Funcionalidades:
- [ ] Backend con Node.js/NestJS
- [ ] Base de datos PostgreSQL
- [ ] Modelo de IA para predicción de trastornos
- [ ] Integración con wearables
- [ ] Sistema de notificaciones
- [ ] Dashboard de analíticas
- [ ] Exportación de reportes PDF
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App)
- [ ] Testing con Vitest/Jest

## 👥 Autor

**Janice Forero**  
Proyecto: SleepWell - Sistema de Salud Digital

## 📄 Licencia

© 2025 SleepWell. Todos los derechos reservados.

---

## 🎓 Sustentación Académica

Este proyecto implementa:
- ✅ **Formularios Avanzados con React** (inputs controlados, validación multicapa)
- ✅ **Manejo de Autenticación** (Context API, rutas protegidas, persistencia)
- ✅ **Gestión de Estado** (useState, useContext, custom hooks)
- ✅ **Validación Robusta** (tiempo real, múltiples niveles)
- ✅ **UX/UI Profesional** (Material-UI, Styled Components, animaciones)
- ✅ **Arquitectura Escalable** (separación de concerns, componentes reutilizables)

### Conceptos Clave Demostrados:
1. **Inputs Controlados**: Single source of truth en React state
2. **Spread Operator**: Preservación de inmutabilidad del estado
3. **Computed Property Names**: Reutilización de handlers
4. **Context API**: Estado global sin prop drilling
5. **Protected Routes**: HOC para seguridad de rutas
6. **Custom Hooks**: Lógica reutilizable (useAuth)
7. **Validación en Tiempo Real**: Feedback inmediato al usuario
8. **Early Return Pattern**: Código limpio y mantenible

---

## 🔗 Recursos Adicionales

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [Material-UI](https://mui.com)
- [Styled Components](https://styled-components.com)
