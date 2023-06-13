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
    let languages_list = [
        {
            "name": "Ukrainian",
            "level": "6",
            "additional": "Native-speaker"
        },
        {
            "name": "English",
            "level": "4",
            "additional": "Preparing for TOEFL..."
        },
        {
            "name": "Slovak",
            "level": "4",
            "additional": "In active use..."
        },
        {
            "name": "Russian",
            "level": "6",
            "additional": "Native-speaker"
        }
    ];

    languages_list = languages_list.map(({name, level, additional}, index) => {
        return <LanguageCard key={index} language_name={name} language_level={level} additional_text={additional} />
    });

    return (
        <div className={styles.card}>
            <div className={styles.column}>
                {languages_list.slice(0, 2)}
            </div>
            <div className={styles.column}>
                {languages_list.slice(2, 4)}
            </div>
        </div>
    );
}

export default LanguagesCard;