// ResultScreen.tsx
import React from 'react';
import styled from 'styled-components';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Dot } from 'recharts';
import { FaRedo, FaDownload, FaUserCircle, FaBell, FaTrophy } from 'react-icons/fa';

// --- TIPOS E INTERFACES ---
export type TrendType = 'Tradicional' | 'Escola Nova' | 'Tecnicista' | 'Crítico-Social';

export type Scores = {
  [key in TrendType]: number;
};

interface ResultScreenProps {
  scores: Scores;
  onRestart: () => void;
  onDownloadPdf: () => void;
}

// --- FUNÇÃO DE LIMPEZA DE TEXTO ---
const removeCitations = (text: string) => {
  return text.replace(/\[cite:.*?\]/g, '');
};

// --- DADOS DE RESULTADO (Já limpos) ---
const resultDataClean: Record<TrendType, { title: string; description: string }> = {
  'Crítico-Social': {
    title: 'Crítico-Social dos Conteúdos',
    description: `Sua abordagem pedagógica se alinha predominantemente com a perspectiva Crítico-Social dos Conteúdos, conforme teorizado por Libâneo[cite: 187]. Isso indica que você vê a educação como uma ferramenta essencial para a transformação social.

Você acredita que o conhecimento não é neutro e deve ser conectado à realidade social e cultural dos alunos, capacitando-os a analisar criticamente o mundo e a se tornarem agentes de mudança[cite: 281, 282]. Suas práticas provavelmente valorizam o diálogo, a problematização e a construção coletiva do saber, sempre com o professor como mediador[cite: 300].

Os pontos no gráfico indicam também influências de outras tendências. É fundamental refletir sobre como essas diferentes abordagens podem enriquecer ou entrar em conflito com sua visão principal, buscando sempre uma prática coesa e intencional[cite: 6, 347].`
  },
  'Tradicional': {
    title: 'Liberal Tradicional',
    description: `Sua prática indica uma forte inclinação para a Pedagogia Tradicional. Segundo Libâneo, isso significa que você valoriza a transmissão dos conhecimentos e valores sociais acumulados, vendo o professor como a autoridade máxima e detentor do saber[cite: 41, 43, 74]. O foco tende a ser na disciplina e no esforço individual do aluno para absorver o conteúdo[cite: 60, 73].`
  },
  'Escola Nova': {
    title: 'Liberal Renovada',
    description: `Seus resultados apontam para a Pedagogia Renovada (Escola Nova). Para você, o centro do processo educativo é o aluno, seus interesses e suas necessidades[cite: 45, 48]. Você provavelmente valoriza métodos ativos, o "aprender a aprender", trabalhos em grupo e vê o papel do professor mais como um facilitador ou auxiliar do desenvolvimento livre da criança[cite: 91, 102].`
  },
  'Tecnicista': {
    title: 'Liberal Tecnicista',
    description: `Sua abordagem se alinha com a Pedagogia Tecnicista. Conforme Libâneo, sua prática enfatiza a eficiência, a produtividade e a organização racional do ensino[cite: 51, 145]. O foco está no planejamento, nos objetivos instrucionais claros, no controle do comportamento e no uso de técnicas e materiais didáticos estruturados para garantir a aprendizagem[cite: 151, 154].`
  }
};

// --- STYLED COMPONENTS ---
const PageContainer = styled.div`background-color: #f4f7f6; min-height: 100vh; display: flex; flex-direction: column;`;
const Header = styled.header`background-color: #fff; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e0e0e0;`;
const Logo = styled.div`font-weight: bold; color: #333; font-size: 1.5rem;`;
const HeaderIcons = styled.div`display: flex; gap: 15px; color: #007bff; font-size: 1.2rem;`;
const MainContent = styled.main`flex: 1; padding: 30px; max-width: 1200px; margin: 0 auto; width: 100%; box-sizing: border-box;`;
const PageTitle = styled.h1`color: #333; margin-bottom: 30px; font-size: 2rem;`;
const ContentCard = styled.div`background-color: #fff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); display: flex; overflow: hidden; @media (max-width: 768px) { flex-direction: column; }`;
const ChartSection = styled.div`flex: 1; padding: 30px; border-right: 1px solid #eee; display: flex; justify-content: center; align-items: center; min-height: 450px; @media (max-width: 768px) { border-right: none; border-bottom: 1px solid #eee; }`;
const TextSection = styled.div`flex: 1; padding: 40px; display: flex; flex-direction: column;`;
const ResultTitleWrapper = styled.div`display: flex; align-items: center; gap: 15px; margin-bottom: 20px; color: #007bff;`;
const ResultTitle = styled.h2`font-size: 1.6rem; margin: 0;`;
const ResultDescription = styled.div`color: #555; line-height: 1.6; flex: 1; p { margin-bottom: 15px; }`;
const ButtonGroup = styled.div`display: flex; gap: 15px; margin-top: 30px; justify-content: flex-end;`;
const Button = styled.button`padding: 10px 20px; border-radius: 5px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s;`;
const OutlineButton = styled(Button)`background-color: transparent; border: 2px solid #007bff; color: #007bff; &:hover { background-color: #f0f8ff; }`;
const PrimaryButton = styled(Button)`background-color: #007bff; border: 2px solid #007bff; color: white; &:hover { background-color: #0069d9; border-color: #0069d9; }`;

// --- FUNÇÕES AUXILIARES ---
const getPredominantTrend = (scores: Scores): TrendType => {
  return Object.keys(scores).reduce((a, b) =>
    scores[a as TrendType] > scores[b as TrendType] ? a : b
  ) as TrendType;
};

const formatChartData = (scores: Scores) => [
  { subject: 'Tradicional', A: scores['Tradicional'] * 10, fullMark: 100 },
  { subject: 'Escola Nova', A: scores['Escola Nova'] * 10, fullMark: 100 },
  { subject: 'Tecnicista', A: scores['Tecnicista'] * 10, fullMark: 100 },
  { subject: 'Crítico-Social', A: scores['Crítico-Social'] * 10, fullMark: 100 },
];

// --- COMPONENTE PRINCIPAL ---
const ResultScreen: React.FC<ResultScreenProps> = ({ scores, onRestart, onDownloadPdf }) => {
  const predominantTrend = getPredominantTrend(scores);
  const { title, description } = resultDataClean[predominantTrend];
  const chartData = formatChartData(scores);

  // A cor azul padrão para o gráfico
  const chartColor = '#007bff';

  // Renderizador customizado para os pontos (dots)
  const renderCustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    // Verifica se este é o ponto da tendência predominante
    const isWinner = payload.subject === predominantTrend;

    if (isWinner) {
      // Ponto maior e com destaque para o vencedor
      return <Dot cx={cx} cy={cy} r={8} fill={chartColor} stroke="#fff" strokeWidth={3} />;
    }
    // Ponto padrão para os outros
    return <Dot cx={cx} cy={cy} r={5} fill={chartColor} stroke="#fff" strokeWidth={2} />;
  };

  // --- RENDERIZADOR CUSTOMIZADO DO EIXO (CORRIGIDO) ---
  const renderCustomTick = (props: any) => {
    const { x, y, payload } = props;
    const trendName = payload.value;

    // Verifica se é o rótulo "Tradicional" para aplicar o deslocamento
    const isTradicional = trendName === 'Tradicional';
    const isCriticoSocial = trendName === 'Crítico-Social';

    // dy={-10} move o texto 10 pixels para cima
    const dy = isTradicional ? -10 : 0;
    // dx={-15} move o texto 15 pixels para a esquerda
    const dx = isCriticoSocial ? -15 : 0;

    return (
      <text
        x={x}
        y={y}
        dy={dy} // Aplica o deslocamento vertical
        dx={dx} // Aplica o deslocamento horizontal
        textAnchor="middle"
        fill="#333"
        fontSize={14}
        fontWeight="bold"
      >
        {trendName}
      </text>
    );
  };

  return (
    <PageContainer>
      <Header>
        <Logo>PedagoQuest</Logo>
        <HeaderIcons><FaBell /><FaUserCircle /></HeaderIcons>
      </Header>
      <MainContent>
        <PageTitle>Resultado do Seu Perfil</PageTitle>
        <ContentCard>
          <ChartSection>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid gridType="polygon" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={renderCustomTick}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: '#666', fontSize: 12, fontWeight: 'bold' }}
                  tickCount={5}
                />

                <Radar
                  name="Você"
                  dataKey="A"
                  stroke={chartColor}       // Linha azul
                  strokeWidth={4}           // Linha ainda mais grossa
                  fill={chartColor}         // Preenchimento azul
                  fillOpacity={0.5}         // Mais transparência para ver a grade
                  dot={renderCustomDot}     // Pontos customizados
                />
              </RadarChart>
            </ResponsiveContainer>
          </ChartSection>

          <TextSection>
            <ResultTitleWrapper>
              <FaTrophy size={32} color={chartColor} />
              <ResultTitle>Perfil Predominante: {title}</ResultTitle>
            </ResultTitleWrapper>

            <ResultDescription>
              {removeCitations(description).split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </ResultDescription>

            <ButtonGroup>
              <OutlineButton onClick={onRestart}><FaRedo /> Reiniciar Jornada</OutlineButton>
              <PrimaryButton onClick={onDownloadPdf}><FaDownload /> Baixar PDF</PrimaryButton>
            </ButtonGroup>
          </TextSection>
        </ContentCard>
      </MainContent>
    </PageContainer>
  );
};

export default ResultScreen;
