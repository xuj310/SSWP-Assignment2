import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col, Image } from "react-bootstrap";
import * as styles from "./styles.css.ts";

const items = [
  { id: 1, title: "One Piece Luffy Figure", img: "https://sxcu.net/7kIM_xxqJ.png" },
  { id: 2, title: "Psycho-Pass The Movie", img: "https://sxcu.net/7kIMcu0qZ.png" },
  { id: 3, title: "One Punch Man Blu-Ray", img: "https://sxcu.net/7kILZDLBM.png" },
];

const MyCart = () => {
  return (
    <Fragment>
      <Container>
        <div className={styles.middleAlignment}>
          <div className={styles.mainBox}>
            <h3>My Cart</h3>
            <div className={styles.verticalGridContainer}>
              {items.map((item, index) => (
                <div key={index} className={styles.verticalGridItem}>
                  <img src={item.img} alt={item.title} className={styles.smallImage} />
                  <div className={styles.caption}>{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default MyCart;

