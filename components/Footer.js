// Import necessary modules and styles
import Image from "next/legacy/image";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

// Define the Footer component
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpeg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            We are OBI EXCEL TOOLS SYNERGY, well-structured for the provision of high-quality tools of any variety.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR STORE</h1>
          <p className={styles.text}>
            B1-403 Int`&apos;l Building Materials Mkt.,.
            <br /> DeiDei, Abuja-FCT.
            <br /> CALL: 08063645038, 07054571786, 08024764665.
          </p>
          <p className={styles.text}>
            Top Tools in our Shop:
            <br /> Machineries/Carpentry Tools
            <br /> Engineering Tools
          </p>
          <p className={styles.text}>
            A trial will convince you!!!
            <br /> Welding Equipment, Hardware & Plumbing Materials, etc.
          </p>
          <p className={styles.text}>
            
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 8:00 am – 6:00 pm
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 8:00 am – 5:00 pm
          </p>
        </div>

        {/* New paragraph statement */}
        <p className={styles.paragraph}>
          
        </p>

        {/* Social Media Links */}
        <div className={styles.socialMediaHorizontal}>
          <a href="https://www.facebook.com/profile.php?id=61550677424782&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#1877f2" />
          </a>
          <a href="https://instagram.com/obi_excel_tools_?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#bc2a8d" />
          </a>
          <a href="https://www.tiktok.com/@execlobinna3?_t=8hUMFltW4Aw&_r=1" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={30} color="#69c9d0" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B2348063645038&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} color="#25d366" />
          </a>
        </div>

        {/* Tawk.to Live Chat */}
        <div id="tawk-root"></div>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/6571cccaff45ca7d4787dc6c/1hh28fu95';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        ` }} />
      </div>
    </div>
  );
};

// Export the Footer component
export default Footer;
