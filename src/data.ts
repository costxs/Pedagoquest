// src/data.ts

export type Trend = 'Tradicional' | 'Tecnicista' | 'Escola Nova' | 'Crítico-Social';

export interface Option {
    id: string;
    text: string;
    trend: Trend;
}

export interface Question {
    id: number;
    title: string;
    description: string;
    imageUrl: string; // URL da imagem ilustrativa
    options: Option[];
}

export const questions: Question[] = [
    {
        id: 1,
        title: "Situação: O Planejamento",
        description: "Você senta para planejar sua aula de História. O que você prioriza ao selecionar o material?",
        imageUrl: "/assets/question1.jpg", // Placeholder de planejamento
        options: [
            {
                id: 'A',
                text: "Vou selecionar os conhecimentos e valores sociais acumulados pelas gerações adultas, pois meu papel é transmitir essas verdades.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Vou seguir rigorosamente o manual e o livro didático, definindo objetivos operacionais e passos sequenciais para garantir a eficiência do ensino.",
                trend: 'Tecnicista'
            },
            {
                id: 'C',
                text: "Não vou trazer conteúdo pronto. Vou propor uma pesquisa baseada nos interesses e necessidades imediatas dos alunos, valorizando o processo de descoberta.",
                trend: 'Escola Nova'
            },
            {
                id: 'D',
                text: "Vou selecionar conteúdos culturais universais, mas vou planejá-los para confrontar a realidade social do aluno, buscando uma visão crítica.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 2,
        title: "Situação: Indisciplina",
        description: "Durante uma atividade em grupo, a turma começa a apresentar comportamento inadequado, com alunos conversando alto, se levantando sem permissão e não focando na tarefa proposta. A situação está saindo do controle.",
        imageUrl: "/assets/question2.jpg", // Placeholder de sala de aula
        options: [
            {
                id: 'A',
                text: "Gritar com a turma para impor silêncio e autoridade imediatamente.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Pausar a atividade, pedir silêncio com uma estratégia calma (ex: sinal sonoro) e reorientar as regras.",
                trend: 'Tecnicista' // Foco em técnica de controle eficiente
            },
            {
                id: 'C',
                text: "Ignorar a bagunça e esperar que os alunos se acalmem por conta própria, respeitando seu tempo.",
                trend: 'Escola Nova' // Não-diretiva
            },
            {
                id: 'D',
                text: "Dialogar com a turma para entender o motivo da dispersão e repactuar o sentido da atividade.",
                trend: 'Crítico-Social' // Mediação e compreensão social
            }
        ]
    },
    {
        id: 3,
        title: "Situação: Relação Professor-Aluno",
        description: "Como você lida com a relação professor-aluno?",
        imageUrl: "/assets/question3.jpg", // Imagem atualizada
        options: [
            {
                id: 'A',
                text: "Sou a autoridade. Transmito a verdade e exijo atitude receptiva.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Sou um elo de ligação técnico entre o sistema instrucional e o aluno.",
                trend: 'Tecnicista'
            },
            {
                id: 'C',
                text: "Sou um auxiliar. Facilito o desenvolvimento livre e espontâneo da criança.",
                trend: 'Escola Nova'
            },
            {
                id: 'D',
                text: "Sou um mediador. A relação é desigual, mas busco a colaboração ativa.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 4,
        title: "Situação: O Momento da Avaliação",
        description: "Chegou o final do bimestre e você precisa definir como será a avaliação principal da turma. Qual é a sua abordagem?",
        imageUrl: "/assets/question4.jpg",
        options: [
            {
                id: 'A',
                text: "Prova Escrita Tradicional: Elaboro uma prova focada na memorização dos conceitos exatos que passei em aula. O objetivo é verificar quem reteve a verdade transmitida e quem se esforçou.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Autoavaliação e Processo: A avaliação formal perde o sentido. Prefiro que os alunos se autoavaliem ou avalio a participação deles nas atividades de descoberta, focando no processo interno e não no produto final.",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Teste Objetivo e Mensurável: Utilizo testes de múltipla escolha baseados nos objetivos instrucionais operacionais definidos no início. O foco é medir a mudança de comportamento de forma objetiva e controlar os resultados.",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Síntese Crítica: Proponho uma atividade que exija que o aluno aplique os conteúdos aprendidos para analisar um problema real da sua comunidade, verificando se ele superou a visão fragmentada inicial.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 5,
        title: "Situação: O Uso do Livro Didático",
        description: "A escola forneceu um livro didático padrão para sua disciplina. Como você o utiliza nas suas aulas?",
        imageUrl: "/assets/question5.jpg",
        options: [
            {
                id: 'A',
                text: "O Guia Absoluto: Sigo o livro capítulo por capítulo, pois ele contém os conhecimentos acumulados que devem ser repassados como verdades inquestionáveis.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Recurso Opcional: Deixo o livro na estante. Os alunos só o consultam se sentirem necessidade durante suas pesquisas individuais ou em grupo, pois o interesse deve partir deles.",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Manual de Instrução: Sigo rigorosamente os passos sequenciais e os exercícios propostos no manual do professor para garantir a eficiência e a execução correta do programa.",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Objeto de Análise Crítica: Uso o livro como base para os conteúdos universais, mas confronto suas informações com outras fontes e com a realidade dos alunos, questionando o que está escrito.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 6,
        title: "Situação: O Erro do Aluno",
        description: "Durante uma explicação, você faz uma pergunta e um aluno dá uma resposta completamente errada baseada no senso comum. O que você faz?",
        imageUrl: "/assets/question6.jpg",
        options: [
            {
                id: 'A',
                text: "Correção Imediata: Corrijo-o imediatamente e forneço a resposta certa. É preciso evitar que o erro se fixe na mente dele; a verdade deve ser transmitida logo.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Acolhimento: Não digo que está errado. Pergunto por que ele pensa assim e valorizo sua expressão livre, pois o processo de descoberta pessoal é mais importante que o saber correto.",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Reforço e Remediação: Identifico que houve uma falha na transmissão e aplico um exercício de reforço imediato para modelar a resposta correta, garantindo o comportamento esperado.",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Ponto de Partida: Uso a resposta 'errada' (a visão sincrética dele) como ponto de partida para o diálogo, mediando o confronto entre o que ele sabe e o conteúdo científico para chegar a uma nova síntese.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 7,
        title: "Situação: Tecnologia na Sala de Aula",
        description: "A escola recebeu tablets novos. A direção quer que eles sejam usados. Como você integra essa tecnologia?",
        imageUrl: "/assets/question7.jpg",
        options: [
            {
                id: 'A',
                text: "Lousa Digital: Uso o tablet conectado ao projetor para exibir meus slides e textos, mantendo a aula expositiva, mas modernizando o suporte da transmissão.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Exploração Livre: Entrego os tablets aos alunos e permito que eles explorem aplicativos e pesquisem temas de seu próprio interesse, aprendendo fazendo.",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Instrução Programada: Instalo softwares educativos que apresentam o conteúdo em pequenos passos, com perguntas e respostas imediatas, para treinar habilidades específicas de forma eficiente.",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Ferramenta de Pesquisa Social: Uso os tablets para que os alunos acessem dados reais sobre problemas sociais (ex: IBGE, notícias) e analisem essas informações à luz dos conteúdos da matéria.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 8,
        title: "Situação: Uma Notícia Impactante",
        description: "Uma greve geral ou um evento político importante está acontecendo na cidade e os alunos estão agitados comentando sobre isso. Você tinha uma aula planejada sobre um conteúdo complexo. O que faz?",
        imageUrl: "/assets/question8.jpg",
        options: [
            {
                id: 'A',
                text: "\"Voltemos à aula\": Peço silêncio e digo que a escola não é lugar para política. O compromisso da escola é com a cultura e os problemas sociais são externos a ela.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Roda de Conversa: Suspendo a aula planejada e faço uma roda para que os alunos expressem seus sentimentos e opiniões sobre o evento, focando na vivência democrática do grupo.",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Ignorar o Ruído: Ignoro o assunto, pois ele não consta nos objetivos instrucionais do dia. Mantenho o foco na execução eficiente do planejamento para não perder tempo.",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Conexão Imediata: Mudo o plano de aula e uso o evento como \"tema gerador\" ou ponto de partida para ensinar o conteúdo previsto, mostrando a ligação entre a teoria e aquela realidade social viva.",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 9,
        title: "Situação: Reunião de Pais",
        description: "Numa reunião, um pai questiona qual é o objetivo principal das suas aulas. Qual é a sua resposta mais honesta (baseada na sua prática)?",
        imageUrl: "/assets/question9.jpg",
        options: [
            {
                id: 'A',
                text: "Formação Moral e Intelectual: \"Meu objetivo é transmitir os valores morais e os conhecimentos culturais que preparam seu filho para assumir sua posição na sociedade.\".",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Felicidade e Autodesenvolvimento: \"O mais importante é que seu filho se sinta bem, aprenda a aprender por conta própria e desenvolva sua personalidade livremente.\".",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Competência para o Mercado: \"Estou treinando seu filho com as habilidades e comportamentos necessários para que ele seja um profissional competente e eficiente no mercado de trabalho.\".",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Consciência Crítica: \"Quero garantir que seu filho domine os conhecimentos científicos para que ele possa entender criticamente a sociedade em que vive e lutar por seus direitos.\".",
                trend: 'Crítico-Social'
            }
        ]
    },
    {
        id: 10,
        title: "Situação: Adaptação do Currículo",
        description: "Você percebe que o currículo oficial da sua matéria é muito extenso e distante da realidade dos seus alunos. O que você prioriza?",
        imageUrl: "/assets/question10.jpg",
        options: [
            {
                id: 'A',
                text: "Cumprir o Programa: Tento passar todo o conteúdo, mesmo que rápido. É a cultura universal que eles precisam absorver com esforço, independente da realidade deles.",
                trend: 'Tradicional'
            },
            {
                id: 'B',
                text: "Seguir os Interesses: Deixo o currículo de lado e planejo as aulas com base no que os alunos demonstrarem interesse e curiosidade no momento.",
                trend: 'Escola Nova'
            },
            {
                id: 'C',
                text: "Otimizar o Tempo: Seleciono apenas os tópicos mais cobrados em testes padronizados e treino os alunos intensivamente neles para garantir bons índices de desempenho.",
                trend: 'Tecnicista'
            },
            {
                id: 'D',
                text: "Seleção Essencial e Vinculada: Seleciono os conteúdos mais essenciais e universais, mas gasto tempo planejando como conectá-los indissociavelmente à vida real e social dos alunos.",
                trend: 'Crítico-Social'
            }
        ]
    }
];

export const trendColors: Record<Trend, string> = {
    'Tradicional': '#dc3545',    // Vermelho
    'Tecnicista': '#ffc107',     // Amarelo/Ouro
    'Escola Nova': '#198754',    // Verde
    'Crítico-Social': '#0d6efd'  // Azul
};
