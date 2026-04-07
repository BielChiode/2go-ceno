import { useState, useEffect } from 'react';
import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/favicon.png';
import { NavLink } from 'react-router-dom';
import { LocalPhone, Close, Menu } from '@mui/icons-material';
import redirectWhatsapp from '../../utils/redirectWhatsapp';

const navegacao = [
  { titulo: 'Serviços', id: '#services' },
  { titulo: 'Quem Somos', id: '#about' },
  { titulo: 'Portfólio', id: '#portfolio' },
  { titulo: 'Equipe', id: '#equipe' },
  { titulo: 'Contato', id: '#contato' },
];

export function CustomAppBar({
  showMenu,
  icone,
  botaoContato,
}: {
  showMenu: boolean;
  icone?: string;
  botaoContato?: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (sectionId: string) => {
    setMobileOpen(false);
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: scrolled
            ? 'rgba(13, 13, 11, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(193, 165, 92, 0.15)'
            : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: { xs: 2, md: 4 },
            py: 1,
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onClick={() => handleScroll('#top')}
          >
            <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={logo}
                alt="Logo 2GO Ceno"
                style={{ width: '48px', height: '48px' }}
              />
            </NavLink>
          </Box>

          {/* Desktop Navigation */}
          {showMenu && (
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 1,
              }}
            >
              {navegacao.map((item) => (
                <Box
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  sx={{
                    position: 'relative',
                    px: 2,
                    py: 1,
                    cursor: 'pointer',
                    '&:hover .nav-underline': {
                      width: '100%',
                    },
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{
                      color: 'text.primary',
                      fontSize: '0.7rem',
                      letterSpacing: '0.18em',
                      fontWeight: 500,
                      lineHeight: 1,
                    }}
                  >
                    {item.titulo}
                  </Typography>
                  <Box
                    className="nav-underline"
                    sx={{
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0%',
                      height: '1px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Right side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {icone && (
              <Box
                component="img"
                src={icone}
                sx={{
                  maxWidth: '100%',
                  maxHeight: 40,
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            )}
            {botaoContato && (
              <IconButton
                onClick={redirectWhatsapp}
                sx={{
                  width: 44,
                  height: 44,
                  border: '1px solid rgba(193, 165, 92, 0.5)',
                  color: 'primary.main',
                  borderRadius: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: '#0D0D0B',
                    border: '1px solid transparent',
                  },
                }}
              >
                <LocalPhone fontSize="small" />
              </IconButton>
            )}
            {/* Mobile hamburger */}
            {showMenu && (
              <IconButton
                onClick={() => setMobileOpen(true)}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  color: 'text.primary',
                  ml: 1,
                }}
              >
                <Menu />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: '#0D0D0B',
              zIndex: 1400,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: 'text.primary',
              }}
            >
              <Close fontSize="large" />
            </IconButton>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
              }}
            >
              {navegacao.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                >
                  <Typography
                    onClick={() => handleScroll(item.id)}
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '2.5rem',
                      fontWeight: 400,
                      color: 'text.primary',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {item.titulo}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
