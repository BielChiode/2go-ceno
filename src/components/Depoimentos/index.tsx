import { Box, Typography, Avatar } from '@mui/material';
import SectionTitle from '../SectionTitle';

const testimonials = [
  {
    name: 'Natália Garcia | Marketing',
    company: 'Prevent Senior',
    testimonial:
      'A Prevent Senior é conhecida por sempre tratar seus beneficiários e colaboradores de forma única e diferenciada...',
  },
  {
    name: 'Alexandre Minami | Sócio Diretor',
    company: 'ViewComm',
    testimonial:
      'Acreditamos num jeito diferenciado de trabalhar, talvez um pouco antiquado, porém idealista...',
  },
  {
    name: 'Marton | Artista Plástico',
    company: 'Marton Estúdio',
    testimonial:
      'Trabalhar com a Ponto C foi, para mim, uma experiência rica. A estrutura de atendimento é muito profissional...',
  },
  {
    name: 'Marton | Artista Plástico',
    company: 'Marton Estúdio',
    testimonial:
      'Trabalhar com a Ponto C foi, para mim, uma experiência rica. A estrutura de atendimento é muito profissional...',
  },
  {
    name: 'Marton | Artista Plástico',
    company: 'Marton Estúdio',
    testimonial:
      'Trabalhar com a Ponto C foi, para mim, uma experiência rica. A estrutura de atendimento é muito profissional...',
  },
];

export function Depoimentos() {
  return (
    <Box py={5} my={5}>
      <SectionTitle>Depoimentos</SectionTitle>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 4,
          py: 2,
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
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: 280,
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              p: 2,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: '#ffffff',
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: '#e0e0e0',
                mb: 2,
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: '#8a6d3b' }}
            >
              {testimonial.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {testimonial.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {testimonial.testimonial}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
