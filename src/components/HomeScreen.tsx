// src/components/HomeScreen.tsx
import React from 'react';
import '../App.css'; // Importa os estilos criados

interface HomeScreenProps {
    onStart: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onStart }) => {
    return (
        // Este é o contêiner principal que ocupa toda a tela
        <div className="main-container">

            {/* Contêiner para centralizar o conteúdo (logo + botão) */}
            <div className="content-wrapper">

                {/* A imagem da logo */}
                <img
                    src="/logo-full.png"
                    alt="Logo PedagoQuest: Livro com caminhos para escolas"
                    className="game-logo"
                />

                {/* O botão de jogar */}
                <button className="play-button" onClick={onStart}>
                    JOGAR
                </button>

            </div>
        </div>
    );
};
