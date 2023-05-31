import styles from './BlockWithTitle.module.css'
import colors from './ColorStyles.module.css'

function BlockWithTitle({id, color, title, children}) {
    let color_background = '';
    let color_text = '';

    if (color === "black") {
        color_background = colors.blackBackground;
        color_text = colors.whiteText;
    }
    else if (color === "grey") {
        color_background = colors.greyBackground;
        color_text = colors.whiteText;
    }
    else if (color === "lightGreen") {
        color_background = colors.lightGreenBackground;
        color_text = colors.greyText;
    }
    else if (color === "milk") {
        color_background = colors.milkBackground;
        color_text = colors.greyText;
    }

    return (
        <section id={id} className={`${styles.block} ${color_background}`}>
            <p className={`${styles.title} ${color_text}`}>{title}</p>
            {children}
        </section>
    );
}

export default BlockWithTitle;
