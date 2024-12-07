import { Box, Container, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: '/assets/biesterfield.jpg',
    title: 'Biesterfield',
    subtitle: 'Biesterfield bienal do livro',
  },
  {
    image: '/assets/heineken.jpg',
    title: 'Estande Heineken',
    subtitle: 'Detalhes do Evento',
  },
  {
    image: '/assets/uol.jpg',
    title: 'UOL',
    subtitle: 'Viva o momento',
  },
];

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '700px',
        width: '100%',
        overflow: 'hidden',
      }}
      id="top"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: '700px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              color: '#fff',
            }}
          >
            <Container
              sx={{
                textAlign: 'center',
                position: 'relative',
                zIndex: 1,
                mt: 50,
              }}
            >
              <Typography variant="h2" gutterBottom>
                {slide.title}
              </Typography>
              <Typography variant="h5">{slide.subtitle}</Typography>
            </Container>
            {/* Overlay para escurecer a imagem */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(2, 0, 0, 0.4)',
                zIndex: 0,
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
