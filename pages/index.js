import Link from "next/link";
import styles from '../styles/home.module.scss';
import classNames from "classnames";
import Layout from "../src/components/layout/layout";
import {useContext} from "react";
import {ThemeContext} from "../src/context/use-theme";
import {THEME} from "../src/constants/theme-constants";

const Home = () => {
  const {theme} = useContext(ThemeContext);

  return(
    <Layout>
      <div>
        <Link href='/charts'>
          <div className={styles.middle}>
            <div className={classNames(styles.btn, styles.btnShape, theme === THEME.LIGHT && styles.btnDark)}>Charts</div>
          </div>
        </Link>
      </div>
    </Layout>
  )
}

export default Home;