import { Toolbar, AppBar, Button, Box, Typography } from '@mui/material';
import logo from '../../assets/favicon.png';
import { NavLink } from 'react-router-dom';

const navegacao = [
  { titulo: 'Serviços', id: '#services' },
  { titulo: 'Quem Somos', id: '#about' },
  { titulo: 'Portfólio', id: '#portfolio' },
  { titulo: 'Equipe', id: '#equipe' },
  { titulo: 'Contato', id: '#contato' },
];

export function CustomAppBar({
  showMenu,
  titulo,
  icone,
}: {
  showMenu: boolean;
  titulo?: string;
  icone?: string;
}) {
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
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: '50px', height: '50px', marginRight: '20px' }}
            />
          </NavLink>
        </Box>

        {/* Navegação */}
        {showMenu ? (
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 4, md: 2 },
              overflowX: 'auto',
              whiteSpace: 'nowrap',
            }}
          >
            {navegacao.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => handleScroll(item.id)}
                sx={(theme) => ({
                  '&:hover': {
                    backgroundColor: theme.palette.primary.dark,
                    color: '#fff',
                  },
                })}
              >
                {item.titulo}
              </Button>
            ))}
          </Box>
        ) : (
          <Typography variant="h6" fontWeight={700}>{titulo}</Typography>
        )}

        <Box>
          {icone && (
            <Box
              component="img"
              src={icone}
              sx={{
                maxWidth: '100%',
                maxHeight: 50,
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
