import { useState, useEffect, useCallback } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { BotaoAcao } from '../../../../components/BotaoAcao';

const slides = [
  {
    image: '/assets/biesterfield/biesterfield.jpg',
    label: '01 — Cenografia',
    title: 'Biesterfield',
    subtitle: 'In Cosmetic 2024',
  },
  {
    image: '/assets/heineken/heineken_expo_postos.jpg',
    label: '02 — Estande',
    title: 'Heineken',
    subtitle: 'Expo Postos — Premiado',
  },
  {
    image: '/assets/uol/uol_3.jpg',
    label: '03 — Ativação',
    title: 'UOL',
    subtitle: 'Viva o momento',
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 5000;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, DURATION);
    return () => clearInterval(interval);
  }, [next]);

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      setProgress(Math.min(elapsed / DURATION, 1));
      if (elapsed < DURATION) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [current]);

  return (
    <Box
      id="top"
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        backgroundColor: '#0D0D0B',
      }}
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
          }}
        >
          {/* Background image with subtle scale */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: DURATION / 1000, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Gradient overlay — diagonal, heavy left */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(105deg, rgba(13,13,11,0.88) 0%, rgba(13,13,11,0.55) 50%, rgba(13,13,11,0.2) 100%)',
            }}
          />
          {/* Bottom gradient for readability */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '30%',
              background: 'linear-gradient(to top, rgba(13,13,11,0.6) 0%, transparent 100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          pb: { xs: 10, md: 12 },
          pt: 10,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Label */}
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                mb: 2,
                display: 'block',
                fontSize: '0.72rem',
              }}
            >
              {slides[current].label}
            </Typography>

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                color: 'text.primary',
                fontSize: { xs: '3.5rem', sm: '5rem', md: '7rem' },
                fontWeight: 300,
                lineHeight: 0.95,
                mb: 2,
                maxWidth: { md: '70%' },
              }}
            >
              {slides[current].title}
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 4,
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: '0.04em',
              }}
            >
              {slides[current].subtitle}
            </Typography>

            <BotaoAcao showArrow>Solicitar Orçamento</BotaoAcao>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Slide indicators + progress */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 24, md: 32 },
          right: { xs: 16, md: 48 },
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 1,
        }}
      >
        {/* Slide count */}
        <Typography
          variant="overline"
          sx={{ color: 'rgba(232,228,220,0.5)', fontSize: '0.65rem' }}
        >
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </Typography>

        {/* Dots */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {slides.map((_, i) => (
            <Box
              key={i}
              onClick={() => { setCurrent(i); setProgress(0); }}
              sx={{
                width: i === current ? 28 : 8,
                height: 2,
                backgroundColor: i === current ? 'primary.main' : 'rgba(193,165,92,0.3)',
                cursor: 'pointer',
                transition: 'width 0.4s ease, background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Progress bar at very bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          backgroundColor: 'rgba(193,165,92,0.15)',
          width: '100%',
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            height: '100%',
            backgroundColor: 'primary.main',
            width: `${progress * 100}%`,
            transition: 'none',
          }}
        />
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 28, md: 36 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <Box
            sx={{
              width: 1,
              height: 32,
              backgroundColor: 'rgba(193,165,92,0.4)',
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
}
