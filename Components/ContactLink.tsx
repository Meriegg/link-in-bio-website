import React, { AnchorHTMLAttributes } from "react";
import styles from "../styles/Home.module.scss";

interface Props {
  svg: React.ReactNode;
  text: string;
  link: string;
}

const ContactLink: React.FC<Props & AnchorHTMLAttributes<{}>> = (props) => {
  return (
    <a href={props.link} className={styles.links_button} {...props}>
      {props.svg}
      {props.text}
    </a>
  );
};

export default ContactLink;
