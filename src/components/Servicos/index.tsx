import { Box, Container, Grid2, Typography } from '@mui/material';
import SectionTitle from '../SectionTitle';
import { useIsMobile } from '../../utils/useIsMobile';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EventIcon from '@mui/icons-material/Event';
import StoreIcon from '@mui/icons-material/Store';
import CelebrationIcon from '@mui/icons-material/Celebration';

export function Servicos() {
  const isMobile = useIsMobile();

  return (
    <Box id="services" py={5} mt={5}>
      <Container>
        <SectionTitle>Nossos serviços</SectionTitle>
        <Grid2 container spacing={4} marginX={isMobile ? 0 : 20}>
          <ServicoItem titulo="Estandes" Icon={StoreIcon} />
          <ServicoItem titulo="Convenções" Icon={EventIcon} />
          <ServicoItem titulo="Eventos" Icon={CelebrationIcon} />
          <ServicoItem titulo="Cenografias" Icon={DesignServicesIcon} />
          <ServicoItem titulo="Estandes" Icon={StoreIcon} />
          <ServicoItem titulo="Convenções" Icon={EventIcon} />
        </Grid2>
      </Container>
    </Box>
  );
}
function ServicoItem({
  titulo,
  Icon,
}: {
  titulo: string;
  Icon: React.ElementType;
}) {
  return (
    <Grid2
      size={{ xs: 6, md: 4 }}
      sx={{ display: 'flex', alignItems: 'center' }}
    >
      <Icon sx={{ fontSize: '2.5rem', color: '#000000', px: 1 }} />
      <Typography variant="h6" color="#000000">
        {titulo}
      </Typography>
    </Grid2>
  );
}
