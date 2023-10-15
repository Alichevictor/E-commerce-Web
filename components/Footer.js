import Image from "next/legacy/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpeg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            We are OBI EXCEL TOOLS SYNERGY, Well structured for the provision of high quality tools of any variety.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR STORE</h1>
          <p className={styles.text}>
            B1-403 Int`&aposl Building Materials Mkt.,.
            <br /> DeiDei, Abuja-FCT.
            <br /> CALL: 08063645038, 07054571786,08024764665.
          </p>
          <p className={styles.text}>
            Top Tools in our Shop:
            <br /> Machineries/Capentery Tools
            <br /> Engineering Tools
          </p>
          <p className={styles.text}>
            A trial will convince you!!!
            <br /> Welding Equipments, Hardwares & Plumbing Materials, etc.
            <br /> 
          </p>
          <p className={styles.text}>
            We provide our services without any delay, with credibilty and reliabilty.
            <br /> Purchase in our online store and we give you quick delivery.
            <br /> Locate our physical shop and make your purchase.
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 8:00am – 6:00pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 8:00am– 5:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
