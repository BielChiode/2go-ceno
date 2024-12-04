import { Box, Typography, Button, Link } from '@mui/material';
import { Instagram, Phone, Email } from '@mui/icons-material';

export function Footer() {
  return (
    <Box
      id="contato"
      sx={{
        backgroundColor: '#323333',
        color: '#ffffff',
        py: 6,
        px: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        Entre em contato
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Phone />
          <Typography>(11) 99999-9999</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Email />
          <Typography>contato@empresa.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Instagram />
          <Link
            href="https://www.instagram.com/suaempresa"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#ffffff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            @suaempresa
          </Link>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#8a6d3b',
          color: '#ffffff',
          fontWeight: 'bold',
          ':hover': { backgroundColor: '#73552c' },
        }}
        href="/contato"
      >
        Fale conosco
      </Button>
    </Box>
  );
}
