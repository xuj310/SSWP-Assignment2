// The home/landing page
import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import * as styles from "../styles.css.ts";

const items = [
  { src: 'https://sxcu.net/7kIF8QkjR.png', label: 'Blu-Rays' },
  { src: 'https://sxcu.net/7kICS3kII.png', label: 'Manga' },
  { src: 'https://sxcu.net/7kICra9m3.png', label: 'Figures' },
  { src: 'https://sxcu.net/7kIEOxp2x.png', label: 'Plushies' }
];

const FrontPage = () => {
  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.mainBox}>
            <h3>Welcome to Anime Central</h3>
            <div className={styles.gridContainer}>
              {items.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                  <img src={item.src} alt={item.label} className={styles.image} />
                  <div className={styles.caption}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default FrontPage;
