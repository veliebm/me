import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.description}>
          Click{" "}
          <a href="https://drive.google.com/file/d/1vdkHOPOIbYjDbAH9oOYO-dAwEUxgKjee/view?usp=sharing">
            here
          </a>{" "}
          to view.
        </p>
      </main>
    </div>
  );
}
