import styles from "./FooterBlock.module.css"
import colors from "./ColorStyles.module.css"

function FooterBlock() {
    return (
        <footer className={`${styles.footerBlock} ${colors.greyBackground}`}>
            <p>CV-page</p>
            <p>Author: Danylo Zahorulko</p>
            <p>© 2024</p>
        </footer>
    );
}


export default FooterBlock;