import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, rgb(244, 247, 251) 0%, rgb(255, 255, 255) 100%);
  padding: 1.5rem 2rem 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(133, 189, 215, 0.2) 0px 5px 15px -5px;
  border-bottom: 1px solid rgba(16, 137, 211, 0.1);
  animation: ${fadeInDown} 0.8s ease-out;
`;

const Logo = styled.h1`
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  gap: 1rem;
  animation: ${fadeInRight} 0.8s ease-out 0.2s both;
`;

const StyledButton = styled.button`
  background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: rgba(133, 189, 215, 0.4) 0px 8px 15px -10px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(133, 189, 215, 0.6) 0px 12px 20px -10px;
    
    &:before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &.secondary {
    background: transparent;
    color: rgb(16, 137, 211);
    border: 2px solid rgb(16, 137, 211);
    
    &:hover {
      background: rgb(16, 137, 211);
      color: white;
    }
  }
`;

function Header({ onLogin, onRegister }) {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>SleepWell</Logo>
      <ButtonContainer>
        {isAuthenticated ? (
          <>
            <span style={{ 
              color: '#1089D3', 
              fontWeight: '600', 
              marginRight: '10px' 
            }}>
              ¡Hola, {user?.username}!
            </span>
            <StyledButton onClick={handleDashboard}>
              Dashboard
            </StyledButton>
            <StyledButton className="secondary" onClick={handleLogout}>
              Cerrar Sesión
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton className="secondary" onClick={onLogin}>
              Iniciar Sesión
            </StyledButton>
            <StyledButton onClick={onRegister}>
              Registrarse
            </StyledButton>
          </>
        )}
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
