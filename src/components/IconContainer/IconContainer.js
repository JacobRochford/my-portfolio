import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillFileText,
  AiOutlineProject,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from './IconContainer.module.css'

const IconContainer = () => {
  return (
    <div className={styles.container}>
      <SocialIcons
        target="_blank"
        href="https://linkedin.com/in/Jacob-Rochford/"
        rel="noopener noreferrer"
        title="Link to linkedin profile."
      >
        <AiOutlineLinkedin />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://github.com/JacobRochford/"
        rel="noopener noreferrer"
        title="Link to github profile."
      >
        <AiFillGithub />
      </SocialIcons>
      <SocialIcons
        target="_blank"
        href="https://1drv.ms/w/s!AgTm-w-g01XXgqtbWsBhC-ezJ6In3w?e=9PBA6X"
        rel="noopener noreferrer"
        title="Link to resume."
      >
        <AiFillFileText />
      </SocialIcons>
    </div>
  );
};

export default IconContainer;
