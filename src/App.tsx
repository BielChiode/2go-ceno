import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { CustomAppBar } from './components/CustomAppBar';
import { Hero } from './components/Hero';
import { Servicos } from './components/Servicos';
import { Sobre } from './components/Sobre';
import { Portifolio } from './components/Portifolio';
import { Contato } from './components/Contato';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomAppBar />
      <Hero />
      <Servicos />
      <Sobre />
      <Portifolio />
      <Contato />
    </ThemeProvider>
  );
};

export default App;
