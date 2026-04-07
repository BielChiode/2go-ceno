import { useState } from 'react';
import { Box, Container, Typography, Avatar } from '@mui/material';
import TituloSecao from '../../../../components/TituloSecao';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '../../../../components/AnimateOnScroll';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const testimonials = [
  {
    name: 'Natália Garcia',
    role: 'Marketing Manager',
    company: 'Prevent Senior',
    testimonial:
      'A 2GO Ceno sempre trata cada projeto de forma única e diferenciada. O resultado do estande superou completamente nossas expectativas — a atenção aos detalhes e a criatividade da equipe são incomparáveis.',
    initial: 'N',
  },
  {
    name: 'Alexandre Minami',
    role: 'Sócio Diretor',
    company: 'ViewComm',
    testimonial:
      'Acreditamos num jeito diferenciado de trabalhar, e encontramos na 2GO CENO um parceiro que compartilha dos mesmos valores. Profissionalismo e entrega impecável em todos os projetos que desenvolvemos juntos.',
    initial: 'A',
  },
  {
    name: 'Marton',
    role: 'Artista Plástico',
    company: 'Marton Estúdio',
    testimonial:
      'Trabalhar com a 2GO foi uma experiência rica. A estrutura de atendimento é muito profissional e a execução técnica é de altíssimo nível. Recomendo sem hesitar para qualquer projeto de cenografia.',
    initial: 'M',
  },
];

export function Depoimentos() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        <AnimateOnScroll direction="up">
          <TituloSecao label="O que dizem sobre nós">Depoimentos</TituloSecao>
        </AnimateOnScroll>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {testimonials.map((t, index) => {
            const isActive = index === current;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <Box
                  onClick={() => setCurrent(index)}
                  sx={{
                    backgroundColor: isActive ? 'background.default' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'primary.main' : 'rgba(193,165,92,0.15)',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    '&:hover': {
                      borderColor: 'rgba(193,165,92,0.4)',
                    },
                  }}
                >
                  {/* Decorative quote */}
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '5rem',
                      lineHeight: 0.7,
                      color: isActive ? 'rgba(193,165,92,0.25)' : 'rgba(193,165,92,0.08)',
                      position: 'absolute',
                      top: 12,
                      left: 16,
                      userSelect: 'none',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    "
                  </Typography>

                  <Box sx={{ pt: 4 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: isActive ? 'text.primary' : 'text.secondary',
                        lineHeight: 1.8,
                        mb: 3,
                        fontStyle: 'italic',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {t.testimonial}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 44,
                          height: 44,
                          backgroundColor: isActive ? 'primary.main' : 'rgba(193,165,92,0.15)',
                          color: isActive ? '#0D0D0B' : 'primary.main',
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: '1.2rem',
                          fontWeight: 600,
                          transition: 'all 0.3s ease',
                          border: isActive ? 'none' : '1px solid rgba(193,165,92,0.2)',
                        }}
                      >
                        {t.initial}
                      </Avatar>
                      <Box>
                        <Typography
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: 'primary.main', fontSize: '0.75rem' }}
                        >
                          {t.role} · {t.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* Navigation dots */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mt: 4,
          }}
        >
          <Box
            onClick={prev}
            sx={{
              width: 36,
              height: 36,
              border: '1px solid rgba(193,165,92,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'rgba(193,165,92,0.1)' },
            }}
          >
            <ChevronLeftIcon fontSize="small" />
          </Box>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrent(i)}
              sx={{
                width: i === current ? 24 : 8,
                height: 2,
                backgroundColor: i === current ? 'primary.main' : 'rgba(193,165,92,0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            />
          ))}
          <Box
            onClick={next}
            sx={{
              width: 36,
              height: 36,
              border: '1px solid rgba(193,165,92,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'primary.main',
              '&:hover': { backgroundColor: 'rgba(193,165,92,0.1)' },
            }}
          >
            <ChevronRightIcon fontSize="small" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
