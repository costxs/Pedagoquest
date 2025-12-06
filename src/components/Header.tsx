import React from 'react';
import './Header.css';
import { GraduationCap, Flag } from 'lucide-react';

// Props para controlar o progresso (ex: questão 1 de 5)
interface HeaderProps {
    currentStep: number;
    totalSteps: number;
}

const Header: React.FC<HeaderProps> = ({ currentStep, totalSteps }) => {
    // Calcula a porcentagem do progresso para a largura da barra
    const progressPercentage = (currentStep / totalSteps) * 100;

    return (
        <header className="fixed-header">
            {/* Lado Esquerdo: Título */}
            <div className="header-title">
                PEDAGOQUEST
            </div>

            {/* Lado Direito: Barra de Progresso */}
            <div className="progress-container">
                {/* Ícone Inicial (Chapéu) */}
                <GraduationCap className="progress-icon start-icon" />

                {/* A barra de fundo (cinza) */}
                <div className="progress-bar-background">
                    {/* A barra de preenchimento (azul) que muda de largura */}
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>

                {/* Ícone Final (Bandeira) */}
                <Flag className="progress-icon end-icon" />

                {/* Texto do passo atual (opcional, ajuda a entender) */}
                <span className="progress-text">{currentStep}/{totalSteps}</span>
            </div>
        </header>
    );
};

export default Header;
