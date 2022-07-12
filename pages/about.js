import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>
        Ea eu dolore cillum non nisi Lorem sunt mollit in eu mollit aute. Dolor
        id dolore consequat do Lorem reprehenderit sit dolor non. Laborum ipsum
        aute sit elit non. Quis excepteur laboris ullamco cillum sunt proident
        aute elit dolor. Amet est minim fugiat eiusmod nulla reprehenderit
        excepteur. Sint deserunt pariatur dolore elit sit officia exercitation.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
