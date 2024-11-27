import { Box, Container, Grid2, Link, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <Box id="contact" py={10} bgcolor="grey.100">
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Faça seu orçamento com a gente!
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <PhoneIcon sx={{ fontSize: '3rem', color: 'grey' }} />
            <Typography variant="body1">(11) 98669-3033</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <EmailIcon sx={{ fontSize: '3rem', color: 'grey' }} />
            <Link href="mailto:marcelo.chacon@2goceno.com" underline="none">
              marcelo.chacon@2goceno.com
            </Link>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
