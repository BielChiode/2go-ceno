import { Box, Container, Typography } from '@mui/material';
import TituloSecao from '../../../../components/TituloSecao';
import projetos from '../../../../../projetos.json';
import { useNavigate } from 'react-router-dom';
import { AnimateOnScroll } from '../../../../components/AnimateOnScroll';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { motion } from 'framer-motion';

// Assigns grid sizes: awarded projects get 2x cards (only on sm+)
function getGridStyle(hasPremio: boolean) {
  return hasPremio
    ? { gridColumn: 'span 1', '@media (min-width:600px)': { gridColumn: 'span 2' } }
    : {};
}

export function Portifolio() {
  const navigate = useNavigate();

  return (
    <Box
      id="portfolio"
      sx={{
        backgroundColor: 'background.default',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <AnimateOnScroll direction="up">
          <TituloSecao label="Nossos projetos">
            Portfólio
          </TituloSecao>
          <Typography
            variant="body2"
            sx={{ color: 'text.secondary', mt: -4, mb: 6 }}
          >
            {projetos.length} projetos executados
          </Typography>
        </AnimateOnScroll>

        {/* Bento Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gridAutoRows: { xs: '220px', md: '220px' },
            gap: '8px',
          }}
        >
          {projetos.map((projeto, index) => {
            const hasPremio = !!projeto.premiacao?.titulo;
            return (
              <Box
                key={projeto.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.07 }}
                sx={getGridStyle(hasPremio)}
              >
                <Box
                  onClick={() => navigate(`/detalhes/${projeto.id}`)}
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    '&:hover .proj-img': {
                      transform: 'scale(1.06)',
                    },
                    '&:hover .proj-overlay': {
                      opacity: 1,
                    },
                    '&:hover .proj-border': {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Image */}
                  <Box
                    className="proj-img"
                    component="img"
                    src={projeto.mainImage}
                    alt={projeto.titulo}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      display: 'block',
                    }}
                  />

                  {/* Always-visible bottom gradient */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '50%',
                      background:
                        'linear-gradient(to top, rgba(13,13,11,0.75) 0%, transparent 100%)',
                    }}
                  />

                  {/* Hover overlay */}
                  <Box
                    className="proj-overlay"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(13,13,11,0.65)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      p: 2,
                      textAlign: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1.6rem',
                        fontWeight: 500,
                        color: 'text.primary',
                        lineHeight: 1.1,
                      }}
                    >
                      {projeto.titulo}
                    </Typography>
                    <Typography
                      variant="overline"
                      sx={{ color: 'primary.main', mt: 1 }}
                    >
                      {projeto.localizacao}
                    </Typography>
                  </Box>

                  {/* Gold border on hover */}
                  <Box
                    className="proj-border"
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      border: '1px solid rgba(193,165,92,0.6)',
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Award badge */}
                  {hasPremio && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'primary.main',
                        color: '#0D0D0B',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        px: 1,
                        py: 0.5,
                      }}
                    >
                      <EmojiEventsIcon sx={{ fontSize: '0.9rem' }} />
                      <Typography
                        sx={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        Premiado
                      </Typography>
                    </Box>
                  )}

                  {/* Title always visible at bottom */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.8rem',
                        color: 'rgba(232,228,220,0.8)',
                        fontWeight: 500,
                      }}
                    >
                      {projeto.titulo}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>

      {/* Empresas atendidas marquee */}
      <EmpresasAtendidas />
    </Box>
  );
}

const empresasAtendidas = [
  { src: '/assets/logos/biesterfield.png', name: 'Biesterfield' },
  { src: '/assets/logos/bimbo.png', name: 'Bimbo' },
  { src: '/assets/logos/biogen.png', name: 'Biogen' },
  { src: '/assets/logos/bombay.png', name: 'Bombay' },
  { src: '/assets/logos/chamex.png', name: 'Chamex' },
  { src: '/assets/logos/creditas.png', name: 'Creditas' },
  { src: '/assets/logos/decolar.png', name: 'Decolar' },
  { src: '/assets/logos/embratel.png', name: 'Embratel' },
  { src: '/assets/logos/ford.png', name: 'Ford' },
  { src: '/assets/logos/hbo-max.png', name: 'HBO Max' },
  { src: '/assets/logos/heineken.png', name: 'Heineken' },
  { src: '/assets/logos/leao.png', name: 'Leão' },
  { src: '/assets/logos/livelo.png', name: 'Livelo' },
  { src: '/assets/logos/mdias.png', name: 'M.Dias' },
  { src: '/assets/logos/nivea.png', name: 'Nivea' },
  { src: '/assets/logos/nutella.png', name: 'Nutella' },
  { src: '/assets/logos/P&G.png', name: 'P&G' },
  { src: '/assets/logos/schweppes.png', name: 'Schweppes' },
  { src: '/assets/logos/serasa.png', name: 'Serasa' },
  { src: '/assets/logos/uol.png', name: 'UOL' },
];

function EmpresasAtendidas() {
  const doubled = [...empresasAtendidas, ...empresasAtendidas];

  return (
    <Box
      sx={{
        mt: 10,
        pt: 6,
        pb: 6,
        borderTop: '1px solid rgba(193,165,92,0.12)',
        borderBottom: '1px solid rgba(193,165,92,0.12)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '100vw',
      }}
    >
      <Container maxWidth="xl">
        <AnimateOnScroll direction="up">
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              display: 'block',
              textAlign: 'center',
              mb: 4,
            }}
          >
            Marcas que confiam na 2GO
          </Typography>
        </AnimateOnScroll>
      </Container>

      {/* Marquee row 1 — left */}
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
          mb: 3,
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 48, alignItems: 'center' }}
        >
          {doubled.map((logo, i) => (
            <Box
              key={i}
              component="img"
              src={logo.src}
              alt={logo.name}
              sx={{
                height: 40,
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%) brightness(0.6)',
                flexShrink: 0,
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%) brightness(1)',
                },
              }}
            />
          ))}
        </motion.div>
      </Box>

      {/* Marquee row 2 — right */}
      <Box
        sx={{
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', gap: 48, alignItems: 'center' }}
        >
          {doubled.map((logo, i) => (
            <Box
              key={i}
              component="img"
              src={logo.src}
              alt={logo.name}
              sx={{
                height: 36,
                width: 'auto',
                objectFit: 'contain',
                filter: 'grayscale(100%) brightness(0.5)',
                flexShrink: 0,
                transition: 'filter 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%) brightness(1)',
                },
              }}
            />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}
