import { Box, Container, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle';

const portfolioImages = [
  { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
  { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
  { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
  { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
  { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
  { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
  { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
  { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
  { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
  { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
  { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
  { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
  { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
  { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
  { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
  { src: '/assets/biesterfield.jpg', alt: 'Estande Biesterfield' },
  { src: '/assets/heineken.jpg', alt: 'Estande Heineken' },
  { src: '/assets/uol.jpg', alt: 'Evento UOL verão' },
];

export function Portifolio() {
  return (
    <Box id="portfolio">
      <Container maxWidth="xl">
        <SectionTitle clickable>Portifólio</SectionTitle>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            flexWrap: 'nowrap',
            paddingBottom: 2,
            '&::-webkit-scrollbar': { height: 8 },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#8b949e',
              borderRadius: 10,
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#FFF',
            },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(2, 150px)',
              gridAutoFlow: 'column',
              gap: '8px',
            }}
          >
            {portfolioImages.map((image, index) => (
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
              >
                <img
                  src={image.src}
                  alt={image.alt}
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
                  <Typography variant="h6">{image.alt}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
