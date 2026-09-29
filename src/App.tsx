import { MotionConfig } from 'motion/react';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { useI18n } from './i18n/LanguageProvider';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Hero } from './sections/Hero';
import { Project } from './sections/Project';
import { Skills } from './sections/Skills';

export default function App() {
  const { t } = useI18n();

  return (
    // "user": respeita a opção "reduzir movimento" do sistema
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#conteudo">
        {t.a11y.skip}
      </a>
      <Header />
      <main id="conteudo" style={{ position: 'relative' }}>
        <Background />
        <Hero />
        <About />
        <Skills />
        <Project />
      </main>
      <Contact />
    </MotionConfig>
  );
}
