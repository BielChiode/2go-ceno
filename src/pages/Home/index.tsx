import { CustomAppBar } from '../../components/CustomAppBar';
import { Depoimentos } from '../../components/Depoimentos';
import { Footer } from '../../components/Footer';
import { Hero } from '../../components/Hero';
import { Portifolio } from '../../components/Portifolio';
import { Servicos } from '../../components/Servicos';
import { Sobre } from '../../components/Sobre';
import { SobreTime } from '../../components/SobreTime';

export function Home() {
  return (
    <> 
      <CustomAppBar showMenu />
      <Hero />
      <Servicos />
      <Sobre />
      <Portifolio />
      <SobreTime />
      <Depoimentos />
      <Footer />
    </>
  );
}
