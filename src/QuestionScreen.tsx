import React from 'react';
import styled from 'styled-components';

// --- Styled Components ---

// O container principal que segura tudo e aplica o fundo desfocado
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Background removido para permitir que o QuestionBackground apareça */
`;

// O quadro central opaco onde fica o conteúdo
const QuestionPanel = styled.div`
  position: relative;
  z-index: 10; // Fica na frente do fundo borrado
  
  width: 90%;
  max-width: 800px; // Largura máxima para telas grandes
  
  /* Cor de fundo escura e semitransparente */
  background-color: rgba(60, 60, 60, 0.85);
  
  border-radius: 15px; // Cantos arredondados
  padding: 40px;
  color: white; // Texto branco
  box-shadow: 0 10px 30px rgba(0,0,0,0.5); // Sombra para destacar do fundo
  backdrop-filter: blur(5px); // Um desfoque extra sutil atrás do painel (opcional)
`;

// Título da Pergunta
const QuestionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 30px;
  line-height: 1.4;
`;

// Container para os botões de resposta
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px; // Espaço entre os botões
`;

// Botão de resposta individual
const OptionButton = styled.button`
  width: 100%;
  padding: 20px;
  text-align: left;
  font-size: 1rem;
  color: white;
  
  /* Fundo do botão um pouco mais claro que o painel */
  background-color: rgba(80, 80, 80, 0.9);
  
  border: 2px solid rgba(255,255,255,0.1); // Borda sutil
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  /* Efeito ao passar o mouse */
  &:hover {
    background-color: rgba(100, 100, 100, 1); // Fica mais claro
    border-color: rgba(255,255,255,0.5); // Borda brilha
    transform: translateY(-2px); // Levanta um pouco
  }

  /* Efeito ao clicar */
  &:active {
    transform: translateY(1px);
    background-color: rgba(120, 120, 120, 1);
  }
`;

// --- Interfaces ---

type Trend = 'Tradicional' | 'Renovada' | 'Tecnicista' | 'CriticoSocial';

interface Option {
  text: string;
  trend: Trend;
  sourceId: string;
  icon?: React.ReactNode; // Ícone opcional
}

interface QuestionScreenProps {
  question: string;
  options: Option[];
  onAnswer: (trend: Trend) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

// --- Helper para renderizar texto com negrito (syntax: **texto**) ---
const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g); // Divide pelo marcador **...**
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} style={{ color: '#ffd700' }}>{part.slice(2, -2)}</strong>; // Amarelo ouro para destaque
    }
    return part;
  });
};

// --- Componente Principal ---

const QuestionScreen: React.FC<QuestionScreenProps> = ({ 
  question, 
  options, 
  onAnswer,
  currentQuestionIndex,
  totalQuestions
}) => {
  return (
    <BackgroundContainer>
      <QuestionPanel>
        <div style={{ marginBottom: '10px', color: '#aaa', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Situação {currentQuestionIndex + 1} de {totalQuestions}
        </div>
        <QuestionTitle>
          {question}
        </QuestionTitle>

        <OptionsContainer>
          {options.map((opt, idx) => (
            <OptionButton key={idx} onClick={() => onAnswer(opt.trend)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                {opt.icon && <div style={{ fontSize: '1.5rem', color: '#87ceeb' }}>{opt.icon}</div>}
                <div>{renderFormattedText(opt.text)}</div>
              </div>
            </OptionButton>
          ))}
        </OptionsContainer>
      </QuestionPanel>
    </BackgroundContainer>
  );
};

export default QuestionScreen;
