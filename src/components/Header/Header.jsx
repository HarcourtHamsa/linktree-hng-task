import React from "react";
import styles from "./Header.module.css";

import arrowIcon from "../../assets/images/arrow.png";
import menuIcon from "../../assets/images/menu.png";
import aviPhoto from "../../assets/images/profile__img.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.icons}>
        <img alt="arrow icon" src={arrowIcon} className={styles.arrow_icon} />
        <img alt="menu icon" src={menuIcon} className={styles.menu_icon} />
      </div>

      <div className={styles.user_info}>
        <div className={styles.profile_photo}>
          <img alt="user profile avi" src={aviPhoto} id="profile__img" />
        </div>
        <p id="twitter">harcourt_hamsa</p>
        <p id="slack">Ohabikks</p>
      </div>
    </header>
  );
};

export default Header;
