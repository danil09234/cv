import styles from './WelcomeBlock.module.css'
import colors from './ColorStyles.module.css'
import Console from "./Console";
import {useEffect, useState} from "react";
import getImage from "../utils/mediaUtils";


function WelcomeBlock({id}) {
    const [consoleTop, setConsoleTop] = useState(0);
    const [imageTop, setImageTop] = useState(0);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition < 400) {
            setConsoleTop(10 * scrollPosition / 400)
            setImageTop(20 * scrollPosition / 400)
        }
    }, [scrollPosition])

    return (
        <div id={id} className={`${styles.welcomeBlock} ${colors.greenBackground}`}>
            <img style={{top: imageTop}} className={styles.myImage} src={getImage("/MeWithoutABackground.png")} alt="Me"/>
            <Console zIndex={1} top={`${consoleTop}px`}/>
        </div>
    )
}

export default WelcomeBlock;