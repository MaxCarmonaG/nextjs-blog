import Link from "next/link";
import { FC } from "react";
import Logo from "../Logo";
import styles from "./MainNav.module.css";

const MainNav: FC = () => (
  <header className={styles.header}>
    <Link href="/">
      <a>
        <Logo />
      </a>
    </Link>
    <nav>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNav;
