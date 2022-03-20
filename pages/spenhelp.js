import styles from "../styles/Home.module.css";

export default function SpenHelp() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Help Spencer</h1>
        <p className={styles.description}>
          This page counts the number of days since the last time Spencer J.
          Fleming did The Act That Cannot Be Named. He needs our help. If you
          see Spencer J. Fleming perform The Act, please click this button to
          reset the timer. It is incredibly important to hold him accountable
          for his actions so he can grow past this phase in his life. Hopefully
          the loving gaze of the panopticon will save him.
        </p>
      </main>
    </div>
  );
}
