import { Box, Container, Typography, useTheme, Grid2 } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MemoryIcon from '@mui/icons-material/Memory';
import ConstructionIcon from '@mui/icons-material/Construction';

const indicadores = [
  { value: '+90%', label: 'Dos clientes recomendam a 2GO' },
  { value: '+500', label: 'Projetos' },
  { value: '+40.000m²', label: 'Construídos' },
];

const dados = [
  {
    icon: <ConstructionIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'SOMOS MAKERS',
    description:
      'Dentro de um terreno fértil, estimulante e colaborativo somos capazes de fabricar, construir, reproduzir e/ou criar qualquer tipo de ambiente.',
  },
  {
    icon: <MemoryIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'COOLHUNTERS & TECNOLÓGICOS',
    description:
      'Um olhar sempre a frente em busca de novas soluções, tendências e tecnologias que possam contribuir com nossos produtos e serviços.',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'CRIATIVOS E INOVADORES',
    description:
      'Uma cultura de inovação e criatividade praticada por todos os profissionais, sempre em busca de soluções inéditas e viáveis.',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: '2.5rem', color: '#000000' }} />,
    title: 'ÁGEIS E VIABILIZADORES',
    description:
      'Para cada eventualidade, natural do nosso setor, uma resposta ágil, adequada e viável, mitigando os eventuais riscos no menor tempo possível.',
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
                <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
                  >
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
