import { Box, Button, Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Box id="about" py={10} bgcolor="primary.main" color="white">
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          We've got what you need!
        </Typography>
        <Typography variant="body1" paragraph align="center">
          Start Bootstrap has everything you need to get your new website up and
          running in no time! Choose one of our open source, free to download,
          and easy to use themes!
        </Typography>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" color="secondary" href="#services">
            Get Started!
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
