import React from 'react';
import { motion } from 'framer-motion';

export const GameBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-sky-300">
            {/* --- CÉU E NUVENS --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4facfe] to-[#00f2fe]"></div>

            {/* Nuvens Estilizadas (SVG) */}
            <svg className="absolute top-0 left-0 w-full h-1/2 pointer-events-none opacity-80" viewBox="0 0 100 50" preserveAspectRatio="none">
                <path d="M10 10 Q 15 5, 20 10 T 30 10 T 40 10 V 50 H 0 V 10 Z" fill="white" fillOpacity="0.3" />
                <path d="M60 15 Q 65 5, 75 15 T 90 15 V 50 H 50 V 15 Z" fill="white" fillOpacity="0.4" />
            </svg>

            {/* --- FLORESTA (CAMADAS DE PROFUNDIDADE) --- */}

            {/* Camada Distante (Montanhas/Árvores escuras) */}
            <div className="absolute bottom-20 left-0 w-full h-64 bg-[#1a472a] rounded-t-[50%] scale-x-150 translate-y-10 opacity-90"></div>

            {/* Camada Média (Árvores) */}
            <div className="absolute bottom-20 left-0 w-full flex items-end justify-between px-10 pointer-events-none">
                {/* Árvores Esquerda */}
                <div className="flex space-x-[-40px]">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={`tree-l-${i}`} className="relative flex flex-col items-center">
                            <div className="w-32 h-64 bg-[#2d6a4f] rounded-full transform scale-y-125 -mb-10 z-10"></div>
                            <div className="w-8 h-20 bg-[#4a3b2a]"></div>
                        </div>
                    ))}
                </div>
                {/* Árvores Direita (Atrás da escola) */}
                <div className="flex space-x-[-30px] mr-20">
                    {[1, 2, 3].map((i) => (
                        <div key={`tree-r-${i}`} className="relative flex flex-col items-center">
                            <div className="w-28 h-56 bg-[#2d6a4f] rounded-full transform scale-y-125 -mb-8 z-10"></div>
                            <div className="w-6 h-16 bg-[#4a3b2a]"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- CHÃO (GRAMADO) --- */}
            <div className="absolute bottom-0 w-full h-1/3 bg-[#588157]"></div>
            <div className="absolute bottom-0 w-full h-1/4 bg-[#74c69d] rounded-t-[100%] scale-x-150 translate-y-10 opacity-50"></div>

            {/* --- CAMINHO (ESTRADA DE TERRA) --- */}
            {/* Usando SVG para criar um caminho com perspectiva forte */}
            <svg className="absolute bottom-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* O caminho começa largo embaixo (0-100) e vai estreitando até a escola (aprox 70-60) */}
                <path
                    d="M -10 100 C 30 80, 40 70, 65 60 L 85 60 C 60 70, 80 90, 110 100 Z"
                    fill="#d4a373"
                    stroke="#bc8a5f"
                    strokeWidth="0.5"
                />
                {/* Detalhes/Pedras no caminho */}
                <circle cx="20" cy="90" r="1" fill="#bc8a5f" opacity="0.5" />
                <circle cx="50" cy="85" r="0.5" fill="#bc8a5f" opacity="0.5" />
                <circle cx="70" cy="70" r="0.3" fill="#bc8a5f" opacity="0.5" />
            </svg>

            {/* --- ESCOLA (PRÉDIO DETALHADO) --- */}
            <div className="absolute bottom-24 right-10 z-20 transform scale-90 origin-bottom-right">
                {/* Sombra Base */}
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-black/20 rounded-full blur-sm"></div>

                {/* Corpo Principal */}
                <div className="w-[400px] h-[250px] bg-[#c0392b] border-b-8 border-[#922b21] relative shadow-2xl flex flex-col items-center">

                    {/* Telhado Principal */}
                    <div className="absolute -top-10 w-[440px] h-12 bg-[#7b241c] transform skew-x-12 flex items-center justify-center border-b-4 border-[#641e16]">
                        <div className="w-full h-full bg-black/10"></div>
                    </div>

                    {/* Frontão (Triângulo acima da entrada) */}
                    <div className="absolute top-0 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[80px] border-b-[#e67e22] z-10"></div>
                    <div className="absolute top-4 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[60px] border-b-[#f39c12] z-10"></div>

                    {/* Torre do Relógio */}
                    <div className="absolute -top-48 w-32 h-48 bg-[#c0392b] flex flex-col items-center border-x-4 border-[#922b21] z-0">
                        {/* Telhado Torre */}
                        <div className="absolute -top-16 w-0 h-0 border-l-[70px] border-l-transparent border-r-[70px] border-r-transparent border-b-[70px] border-b-[#7b241c]"></div>

                        {/* Relógio */}
                        <div className="mt-10 w-20 h-20 bg-[#fdfefe] rounded-full border-4 border-[#d35400] flex items-center justify-center relative shadow-md">
                            <div className="absolute w-1 h-1 bg-black rounded-full z-20"></div>
                            <div className="absolute w-1 h-6 bg-black bottom-1/2 left-1/2 origin-bottom transform -translate-x-1/2"></div>
                            <motion.div
                                className="absolute w-0.5 h-7 bg-red-600 bottom-1/2 left-1/2 origin-bottom transform -translate-x-1/2"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                            />
                        </div>
                    </div>

                    {/* Janelas (Grid) */}
                    <div className="w-full h-full pt-24 px-8 grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className={`w-full h-24 bg-[#85c1e9] border-4 border-white grid grid-cols-2 gap-0.5 overflow-hidden ${i === 2 || i === 3 ? 'mt-0' : ''}`}>
                                <div className="bg-[#5dade2]/30"></div><div className="bg-[#5dade2]/30"></div>
                                <div className="bg-[#5dade2]/30"></div><div className="bg-[#5dade2]/30"></div>
                            </div>
                        ))}
                    </div>

                    {/* Entrada Principal */}
                    <div className="absolute bottom-0 w-40 h-32 bg-[#d35400] border-t-8 border-x-8 border-[#f39c12] flex items-end justify-center">
                        <div className="w-32 h-28 bg-[#6e2c00] flex border-4 border-[#5d4037]">
                            <div className="w-1/2 h-full border-r-2 border-[#5d4037] flex items-center justify-end pr-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-sm"></div>
                            </div>
                            <div className="w-1/2 h-full flex items-center justify-start pl-2">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- ARBUSTOS (PRIMEIRO PLANO) --- */}
            <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none z-30 flex justify-between">
                <div className="w-64 h-32 bg-[#1e8449] rounded-full -ml-20 translate-y-10"></div>
                <div className="w-48 h-24 bg-[#1e8449] rounded-full -mr-10 translate-y-10"></div>
            </div>

            {/* Iluminação/Atmosfera */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-yellow-100/20 to-yellow-200/30 pointer-events-none mix-blend-overlay"></div>
        </div>
    );
};
