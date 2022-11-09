import React, { useContext } from 'react';
import { ThemeContext } from "../../context/use-theme";
import styles from '../../../styles/components/layout.module.scss';
import classNames from "classnames";
import { THEME } from "../../constants/theme-constants";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import {useRouter} from "next/router";

const Layout = ({ children }) => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const router = useRouter()

  return (
    <div className={classNames(styles.layout, theme === THEME.LIGHT && styles.lightTheme)}>
      <div className={styles.header}>
        <Link href='/'>
          {router.asPath !== '/' ? <BiArrowBack className={styles.iconBack} /> : ''}
        </Link>
        <div className="toggle">
          <input type="checkbox" className={styles.toggle} onChange={changeTheme} />
          <label htmlFor="toggle"></label>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;