import { Box, Container, Grid2, Typography } from '@mui/material';

export default function Services() {
  return (
    <Box id="services" py={10}>
      <Container>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          At Your Service
        </Typography>
        <Grid2 container spacing={4} justifyContent="center">
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5">Sturdy Themes</Typography>
            <Typography variant="body2">
              Our themes are updated regularly to keep them bug-free!
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5">Up to Date</Typography>
            <Typography variant="body2">
              All dependencies are kept current to keep things fresh.
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5">Ready to Publish</Typography>
            <Typography variant="body2">
              You can use this design as is, or you can make changes!
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5">Made with Love</Typography>
            <Typography variant="body2">
              Is it really open source if it's not made with love?
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
