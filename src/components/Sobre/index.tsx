import { Box, Container, Grid2, Typography, useTheme } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MemoryIcon from '@mui/icons-material/Memory';
import ConstructionIcon from '@mui/icons-material/Construction';

export function Sobre() {
  const theme = useTheme();

  return (
    <Box
      id="about"
      py={5}
      my={10}
      sx={{
        backgroundColor: theme.custom.sectionBackground,
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 5 }}>
            <Box sx={{ border: '1.5px solid black', width: '30px' }} />
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Por que escolher a{' '}
              <Typography
                component="span"
                variant="h6"
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
                '& > *': {
                  flex: 1, // Faz com que todos os filhos ocupem a mesma largura
                },
              }}
            >
              <Box>
                <Typography align="center" gutterBottom fontWeight={700}>
                  +90%
                </Typography>
                <Typography align="center">
                  Dos clientes recomendam a 2GO
                </Typography>
              </Box>
              <Box>
                <Typography align="center" gutterBottom fontWeight={700}>
                  +500
                </Typography>
                <Typography align="center">Projetos</Typography>
              </Box>
              <Box>
                <Typography align="center" gutterBottom fontWeight={700}>
                  +40.0000m²
                </Typography>
                <Typography align="center">Construídos</Typography>
              </Box>
            </Box>
          </Grid2>
          <Grid2
            size={{ xs: 12, md: 7 }}
            sx={{
              bgcolor: theme.palette.background.paper,
              px: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                '& > *': {
                  flex: 1,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ConstructionIcon
                  sx={{ fontSize: '2.5rem', color: '#000000', px: 2 }}
                />
                <Box py={2}>
                  <Typography variant="h6" fontWeight={700}>
                    SOMOS MAKERS
                  </Typography>
                  <Typography>
                    Dentro de um terreno fértil, estimulante e colaborativo
                    somos capazes de fabricar, construir, reproduzir e/ou criar
                    qualquer tipo de ambiente.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MemoryIcon
                  sx={{ fontSize: '2.5rem', color: '#000000', px: 2 }}
                />
                <Box py={2}>
                  <Typography variant="h6" fontWeight={700}>
                    COOLHUNTERS & TECNOLÓGICOS
                  </Typography>
                  <Typography>
                    Um olhar sempre a frente em busca de novas soluções,
                    tendências e tecnologias que possam contribuir com nossos
                    produtos e serviços.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                '& > *': {
                  flex: 1,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LightbulbIcon
                  sx={{ fontSize: '2.5rem', color: '#000000', px: 2 }}
                />
                <Box py={2}>
                  <Typography variant="h6" fontWeight={700}>
                    CRIATIVOS E INOVADORES
                  </Typography>
                  <Typography>
                    Uma cultura de inovação e criatividade praticada por todos
                    os profissionais, sempre em busca de soluções inéditas e
                    viáveis.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <SpeedIcon
                  sx={{ fontSize: '2.5rem', color: '#000000', px: 2 }}
                />
                <Box py={2}>
                  <Typography variant="h6" fontWeight={700}>
                    ÁGEIS E VIABILIZADORES
                  </Typography>
                  <Typography>
                    Para cada eventualidade, natural do nosso setor, uma
                    resposta ágil, adequada e viável, mitigando os eventuais
                    riscos no menor tempo possível.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
