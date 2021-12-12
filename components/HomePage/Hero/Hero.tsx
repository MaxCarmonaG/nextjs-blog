import { FC } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero: FC = () => (
  <section className={styles.hero}>
    <div className={styles.image}>
      <Image
        src="/images/site/max.jpg"
        alt="An image showing Max"
        width={300}
        height={300}
      />
    </div>
    <h1>Hi, I&apos;m Max</h1>
    <p>
      I blog about web development - especially frontend frameworks like Angular
      or React.
    </p>
  </section>
);

export default Hero;
