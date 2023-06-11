import styles from './WelcomeBlock.module.css'
import colors from './ColorStyles.module.css'
import Console from "./Console";
import {useEffect, useState} from "react";
import getImage from "../utils/mediaUtils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


function WelcomeBlock({id}) {
    const [consoleTop, setConsoleTop] = useState(0);
    const [imageTop, setImageTop] = useState(0);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [myImage, setMyImage] = useState(new Image(getImage("/MeWithoutABackgroundMini.png")));

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
        if (0 <= scrollPosition && scrollPosition <= 400) {
            setConsoleTop(10 * scrollPosition / 400)
            setImageTop(20 * scrollPosition / 400)
        }
    }, [scrollPosition])

    useEffect(() => {

    });

    return (
        <div id={id} className={`${styles.welcomeBlock} ${colors.greenBackground}`}>
            <div style={{top: imageTop}} className={styles.myImage}>
                <img className={styles.myImage} src={getImage("/MeWithoutABackground.png")} alt="Me" />
            </div>
            <Console zIndex={1} top={`${consoleTop}px`}/>
        </div>
    )
}

export default WelcomeBlock;