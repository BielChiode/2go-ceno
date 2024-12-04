import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CustomAppBar } from './components/CustomAppBar';
import { Hero } from './components/Hero';
import { Servicos } from './components/Servicos';
import { Sobre } from './components/Sobre';
import { Portifolio } from './components/Portifolio';
import { SobreTime } from './components/SobreTime';
import { Depoimentos } from './components/Depoimentos';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <Hero />
      <Servicos />
      <Sobre />
      <Portifolio />
      <SobreTime />
      <Depoimentos />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
