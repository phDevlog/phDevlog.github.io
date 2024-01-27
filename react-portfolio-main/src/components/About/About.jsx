import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>3D Character Artist</h3>
              <p>
                I spend a large majority of my time sculpting and creating low-poly 3D character models with a focus on fantasy realism.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Character Rigging / Weight Painting</h3>
              <p>
                 When I make a new character, I enjoy exploring alternate methods of making them move. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Combat Animator</h3>
              <p>
                My favorite type of animation is melee combat. Swords, spears, axes, fist fights, I love all of them.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
