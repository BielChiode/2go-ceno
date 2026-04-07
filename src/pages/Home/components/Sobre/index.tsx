import { useRef, useEffect, useState } from 'react';
import { Box, Container, Typography, Grid2 } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArticleIcon from '@mui/icons-material/Article';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BotaoAcao } from '../../../../components/BotaoAcao';
import { AnimateOnScroll } from '../../../../components/AnimateOnScroll';
import { motion, useInView } from 'framer-motion';

const indicadores = [
  { value: 90, suffix: '%+', label: 'Dos clientes recomendam a 2GO' },
  { value: 500, suffix: '+', label: 'Projetos executados' },
  { value: 40000, suffix: ' m²+', label: 'Construídos' },
];

const dados = [
  {
    icon: LightbulbIcon,
    title: 'Valores',
    items: [
      'Criatividade e inovação em cada projeto',
      'Excelência em todos os detalhes',
      'Comprometimento com prazos e resultados',
      'Colaboração para alcançar o melhor',
      'Sustentabilidade como responsabilidade',
    ],
  },
  {
    icon: ArticleIcon,
    title: 'Missão',
    description:
      'Transformar ideias em experiências visuais impactantes, criando cenografias únicas que elevam a qualidade de eventos e produções.',
  },
  {
    icon: VisibilityIcon,
    title: 'Visão',
    description:
      'Ser referência no mercado de cenografia, reconhecida pela inovação e capacidade de transformar qualquer espaço em um cenário inesquecível.',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = performance.now();
    const raf = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [isInView, value]);

  const display =
    value >= 1000
      ? `${(count / 1000).toFixed(count >= value ? 0 : 1)}mil`
      : count;

  return (
    <Typography
      ref={ref}
      sx={{
        fontFamily: '"Cormorant Garamond", serif',
        fontSize: { xs: '2.2rem', md: '2.8rem' },
        fontWeight: 300,
        color: 'primary.light',
        lineHeight: 1,
      }}
    >
      {display}{suffix}
    </Typography>
  );
}

export function Sobre() {
  return (
    <Box
      id="about"
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={{ xs: 6, md: 8 }}>
          {/* Left column */}
          <Grid2 size={{ xs: 12, md: 5 }}>
            <AnimateOnScroll direction="up">
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', display: 'block', mb: 2 }}
              >
                Por que nos escolher
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: 'text.primary',
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.8rem' },
                }}
              >
                Por que escolher a{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  2GO
                </Box>
                ?
              </Typography>
              <Typography
                sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.8 }}
              >
                Temos em nossa cultura o comportamento necessário para prover
                soluções inéditas aos projetos criativos, com alta performance e
                entregas em alto nível. Fazemos parte de um completo ecossistema
                de negócios capaz de prover todas as soluções fundamentais em
                infraestrutura para eventos.
              </Typography>

              {/* Indicators */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 0,
                  mb: 6,
                }}
              >
                {indicadores.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: 1,
                      textAlign: 'center',
                      borderRight:
                        index < indicadores.length - 1
                          ? '1px solid rgba(193,165,92,0.2)'
                          : 'none',
                      px: 2,
                      '&:first-of-type': { pl: 0 },
                    }}
                  >
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mt: 1, fontSize: '0.75rem' }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <BotaoAcao showArrow>Fazer orçamento</BotaoAcao>
            </AnimateOnScroll>
          </Grid2>

          {/* Right column — values/mission/vision */}
          <Grid2 size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {dados.map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  direction="left"
                  delay={index * 0.15}
                >
                  <Box
                    sx={{
                      backgroundColor: 'background.default',
                      borderLeft: '2px solid',
                      borderColor: 'primary.main',
                      p: { xs: 3, md: 4 },
                      display: 'flex',
                      gap: 3,
                      alignItems: 'flex-start',
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        border: '1px solid rgba(193,165,92,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        mt: 0.5,
                      }}
                    >
                      <item.icon
                        sx={{ fontSize: '1.3rem', color: 'primary.main' }}
                      />
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'text.primary',
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: '1.3rem',
                          fontWeight: 600,
                          mb: 1.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      {item.items ? (
                        <Box
                          component="ul"
                          sx={{ m: 0, pl: 0, listStyle: 'none' }}
                        >
                          {item.items.map((it, i) => (
                            <Box
                              component="li"
                              key={i}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                                mb: 0.75,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 4,
                                  height: 4,
                                  backgroundColor: 'primary.main',
                                  borderRadius: '50%',
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                              >
                                {it}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      ) : (
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                        >
                          {item.description}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </AnimateOnScroll>
              ))}
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

// Keep motion import used only inside AnimatedCounter
export { motion };
