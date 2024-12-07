import { Box, Container, Typography, useTheme, Grid2 } from '@mui/material';

export function SobreTime() {
  const theme = useTheme();

  return (
    <Box
      id="equipe"
      py={5}
      my={5}
      sx={{
        backgroundColor: theme.custom.sectionBackgroundSecondary,
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
              }}
            >
              <img
                src={'/assets/marcelo.png'}
                alt="CEO Marcelo Chacon"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, md: 8 }} sx={{ p: 2, color: '#FFF' }}>
            <Box sx={{ border: '1.5px solid white', width: '30px', mb: 2 }} />
            <Typography variant="h6" gutterBottom fontWeight={700}>
              Conheça o time
            </Typography>
            <Typography variant="h6">Marcelo Chacon</Typography>
            <Typography component="p" gutterBottom>
              Founder & CEO
            </Typography>
            <Typography component="p" gutterBottom color="#B9B9B9">
              Marcelo Chacon iniciou sua carreira na cenografia em 2008 como
              comercial de novos negócios e produtor de eventos, atuando em
              algumas das mais renomadas empresas do setor. Durante essa
              trajetória, aprimorou seus conhecimentos e descobriu sua paixão
              pela cenografia. Com ampla experiência e um olhar criativo
              apurado, Marcelo fundou a 2GO CENO para transformar sua visão em
              realidade, desenvolvendo cenários únicos que elevam a experiência
              de eventos e produções. Sua jornada é marcada pela dedicação e
              pelo compromisso constante com a inovação no mercado de cenografia
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
