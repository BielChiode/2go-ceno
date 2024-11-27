import { Toolbar, AppBar, Button, Box } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
import logo from '../../assets/favicon.png'; // Substitua pelo caminho correto do seu logo

export function CustomAppBar() {
  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: '#d4bf7a', boxShadow: 'none', padding: '0 20px' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Seção do logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
          onClick={() => handleScroll('#top')}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: '50px', height: '50px', marginRight: '20px' }}
          />
        </Box>

        {/* Navegação */}
        <Box
          sx={{
            display: 'flex',
            gap: '15px',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            pl: 2,
          }}
        >
          <Button
            color="inherit"
            onClick={() => handleScroll('#about')}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                color: '#fff',
              },
            })}
          >
            Quem Somos
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('#team')}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                color: '#fff',
              },
            })}
          >
            Equipe
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('#portfolio')}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                color: '#fff',
              },
            })}
          >
            Portfólio
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('#services')}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                color: '#fff',
              },
            })}
          >
            Serviços
          </Button>
          <Button
            color="inherit"
            onClick={() => handleScroll('#contact')}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
                color: '#fff',
              },
            })}
          >
            Contato
          </Button>
        </Box>
        <Box></Box>
      </Toolbar>
    </AppBar>
  );
}
