import { Box, Container, Typography, Grid2 } from '@mui/material';
import { AnimateOnScroll } from '../../../../components/AnimateOnScroll';

export function SobreTime() {
  return (
    <Box
      id="equipe"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, md: 14 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Photo column */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <AnimateOnScroll direction="right">
              <Box sx={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                {/* Offset frame decoration */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    right: -16,
                    bottom: -16,
                    border: '1px solid rgba(193,165,92,0.35)',
                    zIndex: 0,
                  }}
                />

                <Box
                  component="img"
                  src="/assets/marcelo.png"
                  alt="CEO Marcelo Chacon"
                  sx={{
                    width: '100%',
                    height: { xs: 400, md: 520 },
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </Box>
            </AnimateOnScroll>
          </Grid2>

          {/* Content column */}
          <Grid2 size={{ xs: 12, md: 7 }}>
            <AnimateOnScroll direction="left" delay={0.1}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', display: 'block', mb: 3 }}
              >
                Conheça o Fundador
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  fontWeight: 400,
                  color: 'text.primary',
                  lineHeight: 1.1,
                  mb: 0.5,
                }}
              >
                Marcelo Chacon
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.2rem',
                  fontStyle: 'italic',
                  color: 'primary.main',
                  mb: 4,
                }}
              >
                Founder & CEO
              </Typography>

              {/* Pull quote decorative */}
              <Box sx={{ position: 'relative', mb: 3 }}>
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '5rem',
                    lineHeight: 0.7,
                    color: 'rgba(193,165,92,0.2)',
                    position: 'absolute',
                    top: -8,
                    left: -8,
                    userSelect: 'none',
                  }}
                >
                  "
                </Typography>
                <Typography
                  sx={{
                    color: 'text.primary',
                    fontSize: '1.1rem',
                    lineHeight: 1.75,
                    pl: 4,
                    fontStyle: 'italic',
                  }}
                >
                  Marcelo Chacon iniciou sua carreira na cenografia em 2008
                  atuando nas mais renomadas empresas do setor.
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', lineHeight: 1.8 }}
              >
                Durante essa trajetória, aprimorou seus conhecimentos e descobriu
                sua paixão pela cenografia. Com ampla experiência e um olhar
                criativo apurado, Marcelo fundou a 2GO CENO para transformar sua
                visão em realidade, desenvolvendo cenários únicos que elevam a
                experiência de eventos e produções. Sua jornada é marcada pela
                dedicação e pelo compromisso constante com a inovação.
              </Typography>
            </AnimateOnScroll>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
