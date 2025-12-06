// src/components/QuizScreen.tsx
import React from 'react';
import './QuestionLayout.css';
import type { Question, Option } from '../data';
import Header from './Header';

interface QuizScreenProps {
    question: Question;
    currentStep: number;
    totalSteps: number;
    onAnswer: (option: Option) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, currentStep, totalSteps, onAnswer }) => {
    return (
        <>
            <Header currentStep={currentStep} totalSteps={totalSteps} />
            {/* Fundo cinza grande que ocupa a tela toda */}
            <div className="question-page-bg">

                {/* O card branco principal centralizado */}
                <div className="main-question-card">

                    {/* Container flex para dividir esquerda e direita */}
                    <div className="content-flex-wrapper">

                        {/* --- COLUNA DA ESQUERDA (Imagem) --- */}
                        <div className="left-column-image">
                            <img
                                src={question.imageUrl}
                                alt="Ilustração do cenário da questão"
                                className="scenario-image"
                            />
                        </div>

                        {/* --- COLUNA DA DIREITA (Questão e Alternativas) --- */}
                        <div className="right-column-content">

                            <h2 className="question-title">{question.title}</h2>

                            {/* Texto descritivo da situação */}
                            <p className="question-description">
                                {question.description}
                            </p>

                            <h3 className="options-header">Escolha sua ação:</h3>

                            {/* Lista de Alternativas */}
                            <div className="options-list">
                                {question.options.map((option, index) => {
                                    const label = String.fromCharCode(65 + index); // A, B, C, D...
                                    return (
                                        <button
                                            key={option.id}
                                            className="option-card"
                                            onClick={() => onAnswer(option)}
                                        >
                                            {/* A letra (A, B, C...) com fundo azulzinho */}
                                            <div className="option-label-container">
                                                <span className="option-label">{label}</span>
                                            </div>
                                            {/* O texto da alternativa */}
                                            <span className="option-text">{option.text}</span>
                                        </button>
                                    );
                                })}
                            </div>

                        </div> {/* Fim da coluna direita */}

                    </div> {/* Fim do flex wrapper */}
                </div> {/* Fim do card principal */}
            </div>
        </>
    );
};
