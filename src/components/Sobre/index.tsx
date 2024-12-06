import { Box, Container, Typography, useTheme, Grid2 } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArticleIcon from '@mui/icons-material/Article';
import VisibilityIcon from '@mui/icons-material/Visibility';

const indicadores = [
  { value: '+90%', label: 'Dos clientes recomendam a 2GO' },
  { value: '+500', label: 'Projetos' },
  { value: '+40.000m²', label: 'Construídos' },
];

const dados = [
  {
    icon: <LightbulbIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'Valores',
    description: `Criatividade: Valorizamos a inovação e originalidade em cada projeto. Excelência: Buscamos a perfeição em cada detalhe, garantindo a máxima qualidade. Comprometimento: Nos dedicamos a cumprir prazos e entregar resultados que superam expectativas. Colaboração: Trabalhamos em equipe para alcançar o melhor resultado. Sustentabilidade: Priorizamos práticas que minimizem o impacto ambiental, utilizando materiais e processos sustentáveis.`,
  },
  {
    icon: <ArticleIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'Missão',
    description:
      'Transformar ideias em experiências visuais impactantes, criando cenografias únicas e personalizadas que elevam a qualidade de eventos e produções. Nosso compromisso é entregar soluções criativas e técnicas que encantem nossos clientes e o público.',
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'Visão',
    description:
      'Ser referência no mercado de cenografia, reconhecida pela inovação, excelência e capacidade de transformar qualquer espaço em um cenário inesquecível, superando as expectativas dos clientes e acompanhando as tendências do setor.',
  },
];

export function Sobre() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      py={5}
      my={5}
      sx={{
        backgroundColor: theme.custom.sectionBackground,
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={4}>
          {/* Texto e métricas */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ border: '1.5px solid black', width: '30px', mb: 2 }} />
            <Typography variant="h5" gutterBottom fontWeight={700}>
              Por que escolher a{' '}
              <Typography
                component="span"
                variant="h5"
                fontWeight={700}
                sx={{ color: theme.palette.primary.light }}
              >
                2GO
              </Typography>{' '}
              ?
            </Typography>
            <Typography gutterBottom>
              Temos em nossa cultura o comportamento necessário para prover
              soluções inéditas aos projetos criativos, com alta performance e
              entregas em alto nível. Além disso, fazemos parte de um completo
              ecossistema de negócios capaz de prover todas as soluções
              fundamentais e necessárias em infraestrutura para eventos.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: 'flex',
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              {indicadores.map((item, index) => (
                <Box key={index} sx={{ textAlign: 'center', flex: 1 }}>
                  <Typography fontWeight={700} variant="h5">
                    {item.value}
                  </Typography>
                  <Typography>{item.label}</Typography>
                </Box>
              ))}
            </Box>
          </Grid2>

          {/* Ícones e descrições */}
          <Grid2
            size={{ xs: 12, md: 7 }}
            sx={{ backgroundColor: theme.palette.background.paper, p: 2 }}
          >
            <Grid2 container spacing={4}>
              {dados.map((item, index) => (
                <Grid2
                  size={{ xs: 12, sm: item.title === 'Valores' ? 12 : 6 }}
                  key={index}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {item.icon}
                    <Box>
                      <Typography variant="h6" fontWeight={700}>
                        {item.title}
                      </Typography>
                      <Typography>{item.description}</Typography>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
