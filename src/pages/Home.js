import Animation from "../components/Animation/Animation";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Container>
        <Hero />
        <Animation />
      </Container>
      <ContactForm />
    </div>
  );
}

export default Homepage;
