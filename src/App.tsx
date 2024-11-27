import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {
  AboutSection,
  ContactSection,
  CustomAppBar,
  HeroSection,
  PortfolioSection,
  ServicesSection,
} from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </ThemeProvider>
  );
};

export default App;
