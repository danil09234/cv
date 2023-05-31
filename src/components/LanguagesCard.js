import styles from "./LanguagesCard.module.css"


const languageLevels = [
    "A1", "A2", "B1", "B2", "C1", "C2"
]


function LanguageLevelMark({children}) {
    let current = 0;

    if (typeof children === "string" &&! isNaN(children)) {
        current = children;
    }

    const levels = languageLevels.map((level, index) => {
        if (index < current) {
            return <div key={index} className={styles.active}>{level}</div>;
        }
        return <div key={index}>{level}</div>;
    });

    return <div className={styles.mark}>{levels}</div>;
}


function LanguageCard({language_name, language_level, additional_text}) {
    return (
        <div className={styles.languageCard}>
            <p className={styles.title}>{language_name}</p>
            <div className={styles.separator} />
            <LanguageLevelMark>{language_level}</LanguageLevelMark>
            <p className={styles.additionalText}>{additional_text}</p>
        </div>
    )
}


function LanguagesCard() {
    return (
        <div className={styles.card}>
            <div className={styles.column}>
                <LanguageCard language_name="Ukrainian" language_level="6" additional_text="Native-speaker" />
                <LanguageCard language_name="English" language_level="4" additional_text="Preparing for TOEFL..." />
            </div>
            <div className={styles.column}>
                <LanguageCard language_name="Slovak" language_level="3" additional_text="In active use..." />
                <LanguageCard language_name="Russian" language_level="6" additional_text="Native-speaker" />
            </div>
        </div>
    );
}

export default LanguagesCard;