import styles from "./styles.module.css";
import "font-awesome/css/font-awesome.min.css";

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Kubilay Şahinler</h1>
      <i>Architect & Computational Design</i>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/kubilay-%C5%9Fahinler-092bb6a3/"
        className={styles.fa}
      >
        <i className="fa fa-linkedin fa-lg"></i>
      </a>

      <a
        target="_blank"
        href="mailto:kubilay.sahinler@gmail.com"
        className={styles.fa}
      >
        <i className="fa fa-envelope fa-lg"></i>
      </a>
    </div>
  );
}

export default Contact;
