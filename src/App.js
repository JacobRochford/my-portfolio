import BackgroundAnimation from './components/Animation/BackgroundAnimation';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import IconContainer from './components/IconContainer/IconContainer';
import Logo from './components/Logo/Logo';
import Section from './components/Section/Section';

function App() {
  return (
    <div>
      <Logo />
      <Header />
      <Section>
        <Hero />
        <BackgroundAnimation />
      </Section>
      {/* <IconContainer /> */}
    </div>
  );
}

export default App;
