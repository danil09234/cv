import styles from './Console.module.css'
import { useEffect, useState } from "react";

function Console({zIndex, top}) {
    const red_button = `${styles.button} ${styles.red}`;
    const yellow_button = `${styles.button} ${styles.yellow}`;
    const green_button = `${styles.button} ${styles.green}`;

    let [consoleText, setConsoleText] = useState(true);

    useEffect(() => {
        const consoleUpdateInterval = setInterval(() => {
            setConsoleText(!consoleText);
        }, 530);
        return () => {
            clearInterval(consoleUpdateInterval);
        };
    }, [consoleText]);

    return (
        <div style={{zIndex: zIndex, top: top}} className={styles.console}>
            <div className={styles.topBar}>
                <div className={styles.buttons}>
                    <span className={red_button}></span>
                    <span className={yellow_button}></span>
                    <span className={green_button}></span>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Danylo@Zahorulko:~$ Greetings and welcome to my own CV-page{consoleText ? '|' : '\u00A0'}
                </p>
            </div>
        </div>
    );
}

export default Console;