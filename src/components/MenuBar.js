import styles from "./MenuBar.module.css";

function MenuBar({children, menuRef}) {
    return (
        <ul ref={menuRef} className={styles.menu}>
            {children}
        </ul>
    );
}

export default MenuBar;
