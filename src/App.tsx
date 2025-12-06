import { useState } from 'react';
import './App.css';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data';
import type { Option, Trend } from './data';

function App() {
  // Alteramos o estado inicial para 'intro'
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Estado das pontuações
  const [scores, setScores] = useState<Record<Trend, number>>({
    'Tradicional': 0,
    'Tecnicista': 0,
    'Escola Nova': 0,
    'Crítico-Social': 0
  });

  // Função para iniciar o jogo (Sair da Home)
  const handleStartGame = () => {
    setGameState('playing');
  };

  const handleAnswer = (option: Option) => {
    setScores(prev => ({
      ...prev,
      [option.trend]: prev[option.trend] + 1
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState('results');
    }
  };

  const handleRestart = () => {
    setScores({
      'Tradicional': 0,
      'Tecnicista': 0,
      'Escola Nova': 0,
      'Crítico-Social': 0
    });
    setCurrentQuestionIndex(0);
    setGameState('intro'); // Volta para a tela inicial ao reiniciar, ou use 'playing' se preferir direto
  };

  return (
    <div className="antialiased">
      {/* 1. Tela Inicial */}
      {gameState === 'intro' && (
        <HomeScreen onStart={handleStartGame} />
      )}

      {/* 2. Tela de Jogo (Quiz) */}
      {gameState === 'playing' && (
        <QuizScreen
          question={questions[currentQuestionIndex]}
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
          onAnswer={handleAnswer}
        />
      )}

      {/* 3. Tela de Resultados */}
      {gameState === 'results' && (
        <ResultScreen
          scores={scores}
          onRestart={handleRestart}
          onDownloadPdf={() => console.log('Download PDF')}
        />
      )}
    </div>
  );
}

export default App;


