import { Box, Container, Typography, Link, Grid2 } from '@mui/material';
import { Instagram, Phone, Email } from '@mui/icons-material';
import { BotaoAcao } from '../../../../components/BotaoAcao';
import redirectWhatsapp from '../../../../utils/redirectWhatsapp';
import { AnimateOnScroll } from '../../../../components/AnimateOnScroll';
import logo from '../../../../assets/favicon.png';

const navLinks = [
  { label: 'Serviços', id: '#services' },
  { label: 'Quem Somos', id: '#about' },
  { label: 'Portfólio', id: '#portfolio' },
  { label: 'Equipe', id: '#equipe' },
];

export function Footer() {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box id="contato" component="footer">
      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          borderTop: '1px solid rgba(193,165,92,0.12)',
          py: { xs: 10, md: 16 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grain/texture overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse at center, rgba(193,165,92,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <AnimateOnScroll direction="up">
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', display: 'block', mb: 3 }}
            >
              Vamos conversar
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: { xs: '2rem', sm: '3rem', md: '3.8rem' },
                fontWeight: 300,
                color: 'text.primary',
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Vamos criar algo{' '}
              <Box component="em" sx={{ color: 'primary.main', fontStyle: 'italic' }}>
                extraordinário
              </Box>{' '}
              juntos?
            </Typography>
            <Typography
              sx={{
                color: 'text.secondary',
                mb: 5,
                fontSize: '1rem',
              }}
            >
              Entre em contato e transforme seu próximo evento
            </Typography>
            <BotaoAcao showArrow>Solicitar Orçamento</BotaoAcao>
          </AnimateOnScroll>
        </Container>
      </Box>

      {/* Info section */}
      <Box
        sx={{
          backgroundColor: 'background.default',
          borderTop: '1px solid rgba(193,165,92,0.1)',
          pt: 8,
          pb: 4,
        }}
      >
        <Container maxWidth="xl">
          <Grid2 container spacing={6} sx={{ mb: 6 }}>
            {/* Brand column */}
            <Grid2 size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <Box
                  component="img"
                  src={logo}
                  alt="2GO Ceno"
                  sx={{ width: 40, height: 40 }}
                />
                <Typography
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  2GO Ceno
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', mb: 3, maxWidth: 280, lineHeight: 1.7 }}
              >
                Transformando ideias em experiências visuais impactantes desde 2008.
              </Typography>
              {/* Social */}
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Link
                  href="https://www.instagram.com/2go.ceno"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    width: 36,
                    height: 36,
                    border: '1px solid rgba(193,165,92,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.secondary',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      backgroundColor: 'rgba(193,165,92,0.06)',
                    },
                  }}
                >
                  <Instagram fontSize="small" />
                </Link>
              </Box>
            </Grid2>

            {/* Nav links column */}
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', display: 'block', mb: 3 }}
              >
                Navegação
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {navLinks.map((link) => (
                  <Typography
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Box>
            </Grid2>

            {/* Contact column */}
            <Grid2 size={{ xs: 6, md: 4 }}>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', display: 'block', mb: 3 }}
              >
                Contato
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box
                  onClick={redirectWhatsapp}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    cursor: 'pointer',
                    '&:hover .contact-icon': { color: 'primary.main' },
                    '&:hover .contact-text': { color: 'text.primary' },
                  }}
                >
                  <Phone
                    className="contact-icon"
                    sx={{
                      fontSize: '1rem',
                      color: 'text.secondary',
                      transition: 'color 0.2s ease',
                    }}
                  />
                  <Typography
                    className="contact-text"
                    variant="body2"
                    sx={{ color: 'text.secondary', transition: 'color 0.2s ease' }}
                  >
                    (11) 98669-3033
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Email sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Link
                    href="mailto:marcelo.chacon@2goceno.com"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    marcelo.chacon@2goceno.com
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <Instagram sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Link
                    href="https://www.instagram.com/2go.ceno"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s ease',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    @2goceno
                  </Link>
                </Box>
              </Box>
            </Grid2>
          </Grid2>

          {/* Bottom bar */}
          <Box
            sx={{
              borderTop: '1px solid rgba(193,165,92,0.1)',
              pt: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', fontSize: '0.75rem' }}
            >
              © {new Date().getFullYear()} 2GO Ceno. Todos os direitos reservados.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'rgba(154,149,144,0.5)', fontSize: '0.7rem' }}
            >
              Cenografia · Estandes · Eventos · São Paulo, Brasil
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
