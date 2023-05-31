// import './MenuBar.module.css'
import styles from "./MenuBar.module.css";

function MenuBar({children}) {
    return (
        <ul className={styles.menu}>
            {children}
        </ul>
    );
}

export default MenuBar;
