import styles from './WelcomeBlock.module.css'
import colors from './ColorStyles.module.css'


function WelcomeBlock({id, children}) {
    return (
        <div id={id} className={`${styles.welcomeBlock} ${colors.greenBackground}`}>
            {children}
        </div>
    )
}

export default WelcomeBlock;