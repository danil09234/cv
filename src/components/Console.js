import styles from './Console.module.css'
import { useEffect, useState } from "react";

function Console() {
    const red_button = `${styles.button} ${styles.red}`;
    const yellow_button = `${styles.button} ${styles.yellow}`;
    const green_button = `${styles.button} ${styles.green}`;

    let [consoleText, setConsoleText] = useState(false);

    useEffect(() => {
        const consoleUpdateInterval = setInterval(() => {
            setConsoleText(!consoleText);
        }, 530);
        return () => {
            clearInterval(consoleUpdateInterval);
        };
    }, [consoleText]);

    return (
        <div className={styles.console}>
            <div className={styles.topBar}>
                <div className={styles.buttons}>
                    <span className={red_button}></span>
                    <span className={yellow_button}></span>
                    <span className={green_button}></span>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Danylo@Zahorulko:~$ Greetings and welcome to my own CV-page{consoleText ? '|' : ''}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Console;