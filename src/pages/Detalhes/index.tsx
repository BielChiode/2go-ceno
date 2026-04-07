import {
  Box,
  Typography,
  Container,
  Grid2,
  IconButton,
} from '@mui/material';
import { CustomAppBar } from '../../components/CustomAppBar';
import { ArrowBack, LocationOn, Close, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BotaoAcao } from '../../components/BotaoAcao';
import projetos from '../../../projetos.json';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimateOnScroll } from '../../components/AnimateOnScroll';

export const Detalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projeto = projetos.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = useState<string>(projeto?.mainImage || '');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const lightboxNext = useCallback(() => {
    if (!projeto) return;
    setLightboxIndex((i) => (i + 1) % projeto.images.length);
  }, [projeto]);

  const lightboxPrev = useCallback(() => {
    if (!projeto) return;
    setLightboxIndex((i) => (i - 1 + projeto.images.length) % projeto.images.length);
  }, [projeto]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') lightboxNext();
      if (e.key === 'ArrowLeft') lightboxPrev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, closeLightbox, lightboxNext, lightboxPrev]);

  // Related projects (same localizacao or different id)
  const related = projetos
    .filter((p) => p.id !== projeto?.id && p.localizacao === projeto?.localizacao)
    .slice(0, 3);

  if (!projeto) {
    return (
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
        <CustomAppBar showMenu={false} />
        <Container maxWidth="lg" sx={{ mt: 16, textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '3rem',
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Projeto não encontrado
          </Typography>
          <BotaoAcao onClick={() => navigate('/')}>Voltar ao início</BotaoAcao>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <CustomAppBar showMenu={false} icone={projeto.icone} />

      {/* Hero image full-width */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '65vh' },
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => openLightbox(projeto.images.indexOf(mainImage))}
      >
        <motion.div
          key={mainImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Box
            component="img"
            src={mainImage}
            alt={projeto.titulo}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </motion.div>

        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(13,13,11,0.85) 0%, rgba(13,13,11,0.2) 40%, transparent 100%)',
          }}
        />

        {/* Title overlay on hero */}
        <Container
          maxWidth="xl"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            pb: 4,
            zIndex: 2,
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', display: 'block', mb: 1 }}
          >
            {projeto.localizacao}
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 400,
              color: 'text.primary',
              lineHeight: 1.05,
            }}
          >
            {projeto.titulo}
          </Typography>
        </Container>

        {/* Award badge */}
        {projeto.premiacao?.titulo && (
          <Box
            sx={{
              position: 'absolute',
              top: 80,
              right: 24,
              backgroundColor: 'primary.main',
              color: '#0D0D0B',
              px: 2,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              zIndex: 3,
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: '1rem' }} />
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Premiado
            </Typography>
          </Box>
        )}

        {/* Click to expand hint */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'rgba(232,228,220,0)',
            transition: 'color 0.3s ease',
            '&:hover': { color: 'rgba(232,228,220,0.8)' },
            pointerEvents: 'none',
          }}
        >
          <Typography variant="overline">Ampliar</Typography>
        </Box>
      </Box>

      {/* Back button */}
      <Container maxWidth="xl" sx={{ mt: 3, mb: 2 }}>
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            color: 'text.secondary',
            transition: 'color 0.2s ease',
            '&:hover': { color: 'primary.main' },
          }}
        >
          <ArrowBack fontSize="small" />
          <Typography variant="overline" sx={{ lineHeight: 1 }}>
            Voltar ao portfólio
          </Typography>
        </Box>
      </Container>

      {/* Thumbnails */}
      <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            overflowX: 'auto',
            pb: 1,
            '&::-webkit-scrollbar': { height: 4 },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(193,165,92,0.3)',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
          }}
        >
          {projeto.images.map((image, index) => (
            <Box
              key={index}
              onClick={() => {
                setMainImage(image);
                openLightbox(index);
              }}
              sx={{
                position: 'relative',
                flexShrink: 0,
                width: { xs: 120, md: 180 },
                height: { xs: 80, md: 110 },
                overflow: 'hidden',
                cursor: 'pointer',
                border: '2px solid',
                borderColor: mainImage === image ? 'primary.main' : 'transparent',
                transition: 'border-color 0.2s ease',
                '&:hover': { borderColor: 'rgba(193,165,92,0.5)' },
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`${projeto.titulo} - ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Project info */}
      <Container maxWidth="xl" sx={{ mb: 8 }}>
        <Grid2 container spacing={6}>
          <Grid2 size={{ xs: 12, md: 7 }}>
            <AnimateOnScroll direction="up">
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <LocationOn sx={{ color: 'secondary.main', fontSize: '1.1rem' }} />
                <Typography
                  variant="overline"
                  sx={{ color: 'secondary.main', lineHeight: 1 }}
                >
                  {projeto.localizacao}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 500,
                  color: 'primary.light',
                  mb: 3,
                  lineHeight: 1.15,
                }}
              >
                {projeto.titulo}
              </Typography>
              {projeto.descricao ? (
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', lineHeight: 1.8 }}
                >
                  {projeto.descricao}
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                >
                  Projeto de cenografia executado com excelência e dedicação.
                </Typography>
              )}
            </AnimateOnScroll>
          </Grid2>

          {/* Awards column */}
          {projeto.premiacao?.titulo && (
            <Grid2 size={{ xs: 12, md: 5 }}>
              <AnimateOnScroll direction="left" delay={0.15}>
                <Box
                  sx={{
                    border: '1px solid rgba(193,165,92,0.25)',
                    backgroundColor: 'rgba(193,165,92,0.04)',
                    p: 4,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: 'primary.main', display: 'block', mb: 2 }}
                  >
                    Premiações
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      color: 'text.primary',
                      mb: 3,
                    }}
                  >
                    {projeto.premiacao.titulo}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {Array.from({ length: projeto.premiacao.quantidade }).map(
                      (_, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08, duration: 0.3 }}
                        >
                          <EmojiEventsIcon
                            sx={{
                              fontSize: '2rem',
                              color: 'primary.main',
                            }}
                          />
                        </motion.div>
                      )
                    )}
                  </Box>
                  <Typography
                    variant="overline"
                    sx={{ color: 'text.secondary', display: 'block', mt: 2 }}
                  >
                    {projeto.premiacao.quantidade}{' '}
                    {projeto.premiacao.quantidade === 1 ? 'prêmio' : 'prêmios'}
                  </Typography>
                </Box>
              </AnimateOnScroll>
            </Grid2>
          )}
        </Grid2>
      </Container>

      {/* Related projects */}
      {related.length > 0 && (
        <Box
          sx={{
            backgroundColor: 'background.paper',
            py: { xs: 6, md: 10 },
            borderTop: '1px solid rgba(193,165,92,0.1)',
          }}
        >
          <Container maxWidth="xl">
            <AnimateOnScroll direction="up">
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', display: 'block', mb: 1 }}
              >
                Mesmo evento
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  fontWeight: 400,
                  color: 'text.primary',
                  mb: 4,
                }}
              >
                Outros projetos
              </Typography>
            </AnimateOnScroll>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  md: `repeat(${Math.min(related.length, 3)}, 1fr)`,
                },
                gap: '8px',
              }}
            >
              {related.map((rel, index) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Box
                    onClick={() => navigate(`/detalhes/${rel.id}`)}
                    sx={{
                      position: 'relative',
                      height: 220,
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover img': { transform: 'scale(1.05)' },
                      '&:hover .rel-overlay': { opacity: 1 },
                    }}
                  >
                    <Box
                      component="img"
                      src={rel.mainImage}
                      alt={rel.titulo}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box
                      className="rel-overlay"
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(13,13,11,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: '1.4rem',
                          color: 'text.primary',
                          textAlign: 'center',
                          px: 2,
                        }}
                      >
                        {rel.titulo}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 2,
                        background: 'linear-gradient(to top, rgba(13,13,11,0.7) 0%, transparent)',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(232,228,220,0.8)', fontSize: '0.8rem' }}
                      >
                        {rel.titulo}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Container>
        </Box>
      )}

      {/* CTA */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          backgroundColor: 'background.default',
          borderTop: '1px solid rgba(193,165,92,0.1)',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '1.6rem', md: '2rem' },
            color: 'text.primary',
            mb: 3,
          }}
        >
          Gostou do que viu?
        </Typography>
        <BotaoAcao showArrow>Solicitar Orçamento</BotaoAcao>
      </Box>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(13,13,11,0.97)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <IconButton
              onClick={closeLightbox}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: 'rgba(232,228,220,0.7)',
                '&:hover': { color: '#E8E4DC' },
                zIndex: 1,
              }}
            >
              <Close />
            </IconButton>

            {/* Prev */}
            <IconButton
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              sx={{
                position: 'absolute',
                left: 16,
                color: 'rgba(232,228,220,0.7)',
                '&:hover': { color: '#E8E4DC' },
              }}
            >
              <ChevronLeft sx={{ fontSize: '2rem' }} />
            </IconButton>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={lightboxIndex}
                src={projeto.images[lightboxIndex]}
                alt={`${projeto.titulo} - ${lightboxIndex + 1}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                }}
              />
            </AnimatePresence>

            {/* Next */}
            <IconButton
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              sx={{
                position: 'absolute',
                right: 16,
                color: 'rgba(232,228,220,0.7)',
                '&:hover': { color: '#E8E4DC' },
              }}
            >
              <ChevronRight sx={{ fontSize: '2rem' }} />
            </IconButton>

            {/* Counter */}
            <Typography
              variant="overline"
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(232,228,220,0.4)',
              }}
            >
              {lightboxIndex + 1} / {projeto.images.length}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
