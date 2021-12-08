import Link from "next/link";
import styles from "../styles/Services.module.css";
const Services = ({ services }) => {
  console.log(services);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What We Can Do?</h1>
      <h1 className={styles.subtitle}>Services we can help you with </h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <span className={styles.cat}>{service.title}</span>
              <div className={styles.media}></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
