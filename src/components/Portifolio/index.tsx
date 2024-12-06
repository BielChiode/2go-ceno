import { Box, Container, Grid2, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle';
import projetos from '../../../projetos.json';
import { useNavigate } from 'react-router-dom';

// const portfolioImages = [
//   { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
//   { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
//   { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
//   { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
//   { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
//   { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
//   { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
//   { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
//   { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
//   { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
//   { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
//   { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
//   { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
//   { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
//   { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
//   { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
//   { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
//   { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
// ];

const scrollBarStyle = {
  '&::-webkit-scrollbar': {
    height: 8,
    display: { xs: 'none', md: 'block' },
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#8b949e',
    borderRadius: 10,
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#FFF',
  },
};

export function Portifolio() {
  const navigate = useNavigate();
  return (
    <Box id="portfolio">
      <Container maxWidth="xl">
        <SectionTitle>Portifólio</SectionTitle>
        <Box
          sx={[
            scrollBarStyle,
            {
              display: 'flex',
              overflowX: 'auto',
              flexWrap: 'nowrap',
              paddingBottom: 2,
            },
          ]}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(2, 150px)',
              gridAutoFlow: 'column',
              gap: '8px',
            }}
          >
            {projetos.map((projeto, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: '250px',
                  height: '150px',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover .overlay': {
                    opacity: 1,
                  },
                }}
                onClick={() => navigate(`/detalhes/${projeto.id}`)}
              >
                <img
                  src={projeto.mainImage}
                  alt={projeto.titulo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    ':hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  <Typography variant="h6">{projeto.titulo}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
      <EmpresasAtendidas />
    </Box>
  );
}

const empresasAtendidas = [
  { src: '/assets/logos/biesterfield.png' },
  { src: '/assets/logos/bimbo.png' },
  { src: '/assets/logos/biogen.png' },
  { src: '/assets/logos/bombay.png' },
  { src: '/assets/logos/chamex.png' },
  { src: '/assets/logos/creditas.png' },
  { src: '/assets/logos/decolar.png' },
  { src: '/assets/logos/embratel.png' },
  { src: '/assets/logos/ford.png' },
  { src: '/assets/logos/hbo-max.png' },
  { src: '/assets/logos/heineken.png' },
  { src: '/assets/logos/leao.png' },
  { src: '/assets/logos/livelo.png' },
  { src: '/assets/logos/mdias.png' },
  { src: '/assets/logos/nivea.png' },
  { src: '/assets/logos/nutella.png' },
  { src: '/assets/logos/P&G.png' },
  { src: '/assets/logos/schweppes.png' },
  { src: '/assets/logos/serasa.png' },
  { src: '/assets/logos/uol.png' },
];

function EmpresasAtendidas() {
  return (
    <Box pt={5} sx={{ backgroundColor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Grid2
          container
          alignItems="center"
          spacing={6}
          sx={[
            scrollBarStyle,
            {
              display: 'flex',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              paddingBottom: 2,
            },
          ]}
        >
          {empresasAtendidas.map((logo, index) => (
            <Grid2
              key={index}
              sx={{
                flexShrink: 0,
                textAlign: 'center',
                width: { xs: 120, sm: 120 },
              }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={`Logo ${index}`}
                sx={{
                  maxWidth: '100%',
                  maxHeight: 80,
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  '&:hover': { filter: 'grayscale(0%)' },
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}
