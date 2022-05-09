import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

function Nav() {
  return <nav className={styles.topnav}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </nav>;
}

export default Nav;
