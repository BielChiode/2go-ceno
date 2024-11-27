import { Box, Container, Grid2 } from '@mui/material';

export function Portifolio() {
  return (
    <Box id="portfolio" py={10}>
      <Container maxWidth="lg">
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <img
              src="/assets/img/portfolio/portfolio1.jpg"
              alt="Portfolio 1"
              //   className={classes.portfolioImage}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <img
              src="/assets/img/portfolio/portfolio2.jpg"
              alt="Portfolio 2"
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.3s',
                // '&:hover': {
                //   transform: 'scale(1.05)',
                // },
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <img
              src="/assets/img/portfolio/portfolio3.jpg"
              alt="Portfolio 3"
              style={{
                width: '100%',
                height: 'auto',
                transition: 'transform 0.3s',
                // '&:hover': {
                //   transform: 'scale(1.05)',
                // },
              }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}
