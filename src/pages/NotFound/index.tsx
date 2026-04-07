import { Box, Typography, Container } from '@mui/material';
import { BotaoAcao } from '../../components/BotaoAcao';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Giant 404 watermark */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: { xs: '40vw', md: '28vw' },
            fontWeight: 200,
            color: 'rgba(193,165,92,0.05)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          404
        </Typography>
      </motion.div>

      <Container maxWidth="sm" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', display: 'block', mb: 3 }}
          >
            Erro 404
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 300,
              color: 'text.primary',
              lineHeight: 1.1,
              mb: 2,
            }}
          >
            Página não encontrada
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 5,
              fontStyle: 'italic',
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.15rem',
            }}
          >
            "O cenário que você procura não existe"
          </Typography>

          <BotaoAcao
            onClick={() => navigate('/')}
            showArrow
          >
            Voltar ao início
          </BotaoAcao>
        </motion.div>
      </Container>
    </Box>
  );
}
