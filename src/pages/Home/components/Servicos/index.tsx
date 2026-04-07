import { Box, Container, Typography } from '@mui/material';
import TituloSecao from '../../../../components/TituloSecao';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EventIcon from '@mui/icons-material/Event';
import StoreIcon from '@mui/icons-material/Store';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FoundationIcon from '@mui/icons-material/Foundation';
import { motion } from 'framer-motion';
import { AnimateOnScroll } from '../../../../components/AnimateOnScroll';

const servicos = [
  {
    titulo: 'Estandes',
    descricao: 'Projetos únicos para feiras e exposições',
    Icon: StoreIcon,
  },
  {
    titulo: 'Convenções',
    descricao: 'Cenografias para grandes eventos corporativos',
    Icon: EventIcon,
  },
  {
    titulo: 'Eventos',
    descricao: 'Ambientações completas para qualquer ocasião',
    Icon: CelebrationIcon,
  },
  {
    titulo: 'Cenografias',
    descricao: 'Criação e montagem de cenários impactantes',
    Icon: DesignServicesIcon,
  },
  {
    titulo: 'Design de Interiores',
    descricao: 'Transformação de espaços com identidade visual',
    Icon: FoundationIcon,
  },
];

export function Servicos() {
  return (
    <Box
      id="services"
      sx={{
        backgroundColor: 'background.paper',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <AnimateOnScroll direction="up">
          <TituloSecao label="O que fazemos">Nossos Serviços</TituloSecao>
        </AnimateOnScroll>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(5, 1fr)',
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Box
                sx={{
                  backgroundColor: 'background.default',
                  border: '1px solid rgba(193,165,92,0.1)',
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: 2,
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(193,165,92,0.5)',
                    boxShadow: '0 8px 32px rgba(193,165,92,0.1)',
                  },
                  '&:hover .servico-icon-bg': {
                    backgroundColor: 'primary.main',
                  },
                  '&:hover .servico-icon': {
                    color: '#0D0D0B',
                  },
                }}
              >
                <Box
                  className="servico-icon-bg"
                  sx={{
                    width: 56,
                    height: 56,
                    border: '1px solid rgba(193,165,92,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s ease',
                    flexShrink: 0,
                  }}
                >
                  <servico.Icon
                    className="servico-icon"
                    sx={{
                      fontSize: '1.6rem',
                      color: 'primary.main',
                      transition: 'color 0.3s ease',
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.primary',
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      mb: 0.5,
                    }}
                  >
                    {servico.titulo}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.5 }}
                  >
                    {servico.descricao}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
