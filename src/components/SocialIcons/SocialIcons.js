import React from 'react'
import styles from './SocialIcons.module.css';

const SocialIcons = ({children, href, rel, target, title}) => {
  return (
    <a className={styles.div} href={href} rel={rel} target={target} title={title}>
      {children}
    </a>
  )
}

export default SocialIcons;
