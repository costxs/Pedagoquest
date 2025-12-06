import React from 'react';
import './BackgroundSVG.css'; // Vamos criar este arquivo CSS específico para o fundo

const BackgroundSVG: React.FC = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            className="background-svg-container"
        >
            <image href="/assets/background_new.jpg" x="0" y="0" width="1920" height="1080" preserveAspectRatio="xMidYMid slice" />
        </svg>
    );
};

export default BackgroundSVG;
