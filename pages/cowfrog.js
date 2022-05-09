import Image from "next/image";
import favicon from "../public/favicon.png";
import styles from "../styles/Page.module.css";
import frogStyles from "../styles/cowfrog.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <Image
          className={frogStyles.frog}
          alt="frog"
          src={favicon}
          layout="fill"
        />
      </main>
    </div>
  );
}
