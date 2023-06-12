import styles from "./EducationBlock.module.css"


function DataLine({title, specialization, place}) {
    return (
        <div className={styles.dataLine}>
            <div className={styles.lineDecoration}/>
            <div className={styles.textFrame}>
                <p className={styles.title}>{title}</p>
                {
                    specialization &&
                    <div className={styles.iconRow}>
                        <div className={styles.specializationIcon}/>
                        <p>{specialization}</p>
                    </div>
                }
                {
                    place &&
                    <div className={styles.iconRow}>
                        <div className={styles.placeIcon}/>
                        <p>{place}</p>
                    </div>
                }
            </div>
        </div>
    );
}


function EducationBlock() {
    let education_list = [
        {
            "title": "Technical university of košice",
            "specialization": "Faculty of electrical engineering and informatics, specialization “Informatics”",
            "place": "Košice, Slovensko"
        },

        {
            "title": "Technical college “ZETK ZNTU”",
            "specialization": "Specialization software development",
            "place": "Zaporizhzhia, Ukraine"
        },

        {
            "title": "IT STEP Junior academy",
            "specialization": null,
            "place": "Zaporizhzhia, Ukraine"
        },

        {
            "title": "Middle & high school №108",
            "specialization": null,
            "place": "Zaporizhzhia, Ukraine"
        }
    ]

    education_list = education_list.map(({title, specialization, place}, index) => {
        return <DataLine key={index} title={title} specialization={specialization} place={place} />;
    })

    return (
        <div className={styles.content}>
            {education_list}
        </div>
    );
}

export default EducationBlock;