import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background: linear-gradient(135deg, rgb(244, 247, 251) 0%, rgb(255, 255, 255) 100%);
  padding: 1.5rem 2rem;
  box-shadow: rgba(133, 189, 215, 0.2) 0px 5px 15px -5px;
  border-bottom: 1px solid rgba(16, 137, 211, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  font-weight: 600;
  color: #333;
`;

const LogoutButton = styled.button`
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(133, 189, 215, 0.6) 0px 12px 20px -10px;
  }
`;

const MainContent = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  flex: 1;
  box-sizing: border-box;
`;

const WelcomeCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: rgba(133, 189, 215, 0.3) 0px 10px 30px -10px;
`;

const Title = styled.h2`
  color: rgb(16, 137, 211);
  margin-bottom: 1rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: rgba(133, 189, 215, 0.3) 0px 10px 30px -10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <DashboardContainer>
      <Header>
        <Logo>SleepWell</Logo>
        <UserInfo>
          <UserName>¡Hola, {user?.fullName || user?.username}!</UserName>
          <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>
        </UserInfo>
      </Header>

      <MainContent>
        <WelcomeCard>
          <Title>🌙 Bienvenido a tu Panel de SleepWell</Title>
          <p style={{ color: '#666', lineHeight: 1.8 }}>
            Estás autenticado y listo para comenzar a mejorar tu calidad de sueño. 
            Aquí podrás acceder a todas las herramientas de predicción y análisis de trastornos del sueño.
          </p>
          <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '1rem' }}>
            <strong>Email:</strong> {user?.email} <br />
            <strong>Usuario:</strong> {user?.username} <br />
            <strong>Miembro desde:</strong> {user?.createdAt ? new Date(user.createdAt).toLocaleDateString('es-ES') : 'Hoy'}
          </p>
        </WelcomeCard>

        <CardGrid>
          <Card>
            <CardIcon>🤖</CardIcon>
            <CardTitle>Predicción Inteligente</CardTitle>
            <CardDescription>
              Utiliza IA para analizar tus patrones de sueño y predecir posibles trastornos antes de que se agraven.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>📊</CardIcon>
            <CardTitle>Análisis del Sueño</CardTitle>
            <CardDescription>
              Registra tus horas de sueño, calidad y factores que afectan tu descanso para obtener reportes detallados.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>💡</CardIcon>
            <CardTitle>Recomendaciones</CardTitle>
            <CardDescription>
              Recibe consejos personalizados basados en tus datos para mejorar tu higiene del sueño y reducir la ansiedad.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>📈</CardIcon>
            <CardTitle>Seguimiento</CardTitle>
            <CardDescription>
              Monitorea tu progreso a lo largo del tiempo y observa cómo mejoran tus hábitos de sueño.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>🔒</CardIcon>
            <CardTitle>Privacidad Total</CardTitle>
            <CardDescription>
              Tus datos de salud están protegidos y solo tú tienes acceso a tu información personal.
            </CardDescription>
          </Card>

          <Card>
            <CardIcon>🎯</CardIcon>
            <CardTitle>Metas Personalizadas</CardTitle>
            <CardDescription>
              Define objetivos de sueño y recibe recordatorios para mantener una rutina saludable.
            </CardDescription>
          </Card>
        </CardGrid>
      </MainContent>
    </DashboardContainer>
  );
}

export default Dashboard;
