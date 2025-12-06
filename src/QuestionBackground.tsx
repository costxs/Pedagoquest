import React, { type ReactNode } from 'react';
import styled, { css } from 'styled-components';

// --- Styled Components do CENÁRIO (CSS Art) ---

// 1. O Container que segura todo o desenho e aplica o BLUR
const CSSClassroomScene = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  background-color: #f4f9ff; // Cor da parede de fundo

  // O filtro de desfoque essencial
  filter: blur(10px);
  // Zoom para esconder bordas borradas
  transform: scale(1.05); 
`;

// 2. O Chão
const Floor = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%;
  background-color: #d9c4a9; // Cor de madeira clara
  border-top: 4px solid #c3b097;
`;

// 3. A Lousa (Quadro Negro ao fundo)
const Blackboard = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 30%;
  background-color: #3a4a3a; // Verde escuro
  border: 12px solid #8d6e63; // Moldura de madeira
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  // Pequeno detalhe: apagador e giz
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 20px;
    width: 60px;
    height: 10px;
    background-color: #d7ccc8; // Giz/Apagador
  }
`;

// 4. A Janela com Céu Azul
const Window = styled.div`
  position: absolute;
  top: 15%;
  right: 10%;
  width: 15%;
  height: 25%;
  background-color: #87ceeb; // Céu azul
  border: 10px solid #ffffff; // Moldura branca
  box-shadow: inset 0 0 20px rgba(255,255,255,0.5); // Brilho interno
  overflow: hidden;

  // Vidraças (linhas cruzadas)
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #ffffff;
    transform: translateY(-50%);
  }
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 8px;
    height: 100%;
    background-color: #ffffff;
    transform: translateX(-50%);
  }
`;

// 5. Estante de Livros Colorida
const Bookshelf = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  width: 12%;
  height: 40%;
  background-color: #a1887f; // Madeira da estante
  border-right: 4px solid #8d6e63;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
`;

// Prateleiras individuais com "livros" (blocos coloridos)
const ShelfRow = styled.div`
  height: 25%;
  width: 100%;
  background-color: #795548; // Cor da prateleira
  display: flex;
  align-items: flex-end;
  padding-bottom: 2px;
  gap: 2px;
`;

// Mixin para criar livros aleatórios rapidamente
const bookStyle = (color: string, width: string, height: string) => css`
  background-color: ${color};
  width: ${width};
  height: ${height};
  border-radius: 2px 2px 0 0;
`;

const Book = styled.div<{ color: string, w: string, h: string }>`
  ${props => bookStyle(props.color, props.w, props.h)}
`;

// 6. Carteiras (Simplificadas para o fundo borrado)
const DeskShape = styled.div`
  position: absolute;
  bottom: 20%;
  width: 120px;
  height: 60px;
  background-color: #bcaaa4; // Tampo da mesa
  border-bottom: 6px solid #8d6e63; // Espessura

  // Pernas da mesa
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 10%;
    width: 8px;
    height: 40px;
    background-color: #6d4c41;
  }
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 10%;
    width: 8px;
    height: 40px;
    background-color: #6d4c41;
  }
`;

// --- Styled Components ESTRUTURAIS (Iguais ao anterior) ---

const BackgroundContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f4f8; 
`;

const OverlayLayer = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  // Overlay ajustado para dar uma luz quente e aconchegante
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 240, 0.4), 
    rgba(230, 240, 255, 0.6)
  );
  mix-blend-mode: soft-light; // Ajuda a misturar as cores de forma mais rica
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


interface QuestionBackgroundProps {
  children: ReactNode;
}

// --- O Componente Principal Montado ---

const QuestionBackground: React.FC<QuestionBackgroundProps> = ({ children }) => {
  return (
    <BackgroundContainer>
      {/* Camada 1: O Cenário Desenhado com CSS */}
      <CSSClassroomScene>
        <Floor />
        <Blackboard />
        <Window />

        <Bookshelf>
          <ShelfRow>
            <Book color="#e57373" w="15%" h="80%" />
            <Book color="#64b5f6" w="20%" h="90%" />
            <Book color="#81c784" w="15%" h="70%" />
          </ShelfRow>
          <ShelfRow>
            <Book color="#ffd54f" w="25%" h="85%" />
            <Book color="#ba68c8" w="15%" h="75%" />
          </ShelfRow>
          <ShelfRow>
            <Book color="#4db6ac" w="20%" h="80%" />
          </ShelfRow>
        </Bookshelf>

        {/* Posicionando algumas carteiras aleatoriamente */}
        <DeskShape style={{ left: '15%', bottom: '25%', transform: 'scale(0.9)' }} />
        <DeskShape style={{ left: '40%', bottom: '15%' }} />
        <DeskShape style={{ right: '20%', bottom: '22%', transform: 'scale(0.95)' }} />
      </CSSClassroomScene>

      {/* Camada 2: A sobreposição de luz/cor */}
      <OverlayLayer />

      {/* Camada 3: O seu conteúdo (lousa, cartões) entra aqui */}
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </BackgroundContainer>
  );
};

export default QuestionBackground;
