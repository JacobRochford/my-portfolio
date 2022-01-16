import IconContainer from "../IconContainer/IconContainer";
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div>
      <h1 className={styles.hero}>
        Jacob Rochford
      </h1>
      <p className={styles.text}>Web Developer</p>
      <IconContainer />
    </div>
  );
}

export default Hero;