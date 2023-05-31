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
    return (
        <div className={styles.content}>
            <DataLine title="Technical university of košice"
                      specialization="Faculty of electrical engineering and informatics, specialization “Informatics”"
                      place="Košice, Slovensko" />
            <DataLine title="technical collage “ZETK ZNTU”"
                      specialization="specialization software development"
                      place="Zaporizhzhia, Ukraine" />
            <DataLine title="IT STEP Junior academy"
                      place="Zaporizhzhia, Ukraine" />
            <DataLine title="Middle & high school №108"
                      place="Zaporizhzhia, Ukraine" />
        </div>
    );
}

export default EducationBlock;