import Animation from "../components/Animation/Animation";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";

const Homepage = () => {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Animation />
      </Container>
    </>
  );
}

export default Homepage;
