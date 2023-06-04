import styles from './SkillsCard.module.css'
import getImage from "../utils/mediaUtils";


function ProgressCard({image_src, progress_name, progress_level}) {
    return (
        <div className={styles.progressCard}>
            <img className={styles.progressCardImage} src={image_src} alt={progress_name}/>
            <div className={styles.progressCardProgressBar}>
                <div className={styles.progressCardProgressBarBlock}>
                    <div className={styles.progressCardProgressBarGraphics} />
                    <div className={styles.progressCardProgressFillerGraphics} style={
                        {width: `calc(${progress_level}% - 8px)`}} />
                </div>
                <div className={styles.progressCardProgressTextBlock}>
                    <p className={styles.progressCardProgressText}>{progress_name}</p>
                    <p className={styles.progressCardProgressText}>{progress_level}%</p>
                </div>
            </div>
        </div>
    );
}


function Title({children}) {
    return (
        <div className={styles.title}>
            <p className={styles.titleText}>{children}</p>
            <div className={styles.separator} />
        </div>
    );
}


function ListItem({title, description}) {
    return (
        <div className={styles.listItem}>
            <p className={styles.listItemDot}>•</p>
            <div className={styles.listItemContentContainer}>
                <p className={styles.listItemTitle}>{title}</p>
                <p className={styles.listItemDescription}>- {description}</p>
            </div>
        </div>
    )
}


function SkillsCard() {
    let deeper_interview_list = [
        {
            "title": "Kivy & KivyMD, Tkinter",
            "description": "building a GUI applications"
        },
        {
            "title": "Telebot, Aiogram",
            "description": "building Telegram bots"
        },
        {
            "title": "Loguru",
            "description": "logging and catching bugs"
        },
        {
            "title": "Sqlite3",
            "description": "storing the data"
        },
        {
            "title": "Click",
            "description": "building console applications"
        },
        {
            "title": "Threading",
            "description": "separating one process"
        },
        {
            "title": "Multiprocessing",
            "description": "running tasks on a separate cores"
        },
        {
            "title": "Pyinstaller",
            "description": "creating an executables"
        },
        {
            "title": "Venv",
            "description": "separating projects working-spaces"
        },
        {
            "title": "Openpyexcel",
            "description": "generate reports for the target user"
        },
        {
            "title": "Selenium",
            "description": "automate the work with the browser"
        },
        {
            "title": "BeautifulSoup & requests",
            "description": "parsing a web-sites"
        },
        {
            "title": "UnitTests",
            "description": "testing and debugging code"
        }
    ]

    deeper_interview_list = deeper_interview_list.map(({title, description}, index) => {
        return <ListItem key={index} title={title} description={description} />;
    })

    let additional_languages_list = [
        {
            "language": "C",
            "src": "/c-logo.png",
            "level": 65
        },
        {
            "language": "C++",
            "src": "/c-plus-plus-logo.png",
            "level": 60
        },
        {
            "language": "HTML & CSS",
            "src": "/html-5-logo.png",
            "level": 55
        },
        {
            "language": "JavaScript",
            "src": "/js-logo.png",
            "level": 20
        },
        {
            "language": "React",
            "src": "/react-logo.png",
            "level": 20
        }
    ]

    additional_languages_list = additional_languages_list.map(({language, src, level}, index) => {
        return <ProgressCard key={index} image_src={getImage(src)} progress_name={language} progress_level={level} />
    })

    let development_approaches_list = [
        {
            "title": "Object Oriented Programming / Functional Programming",
            "description": "Depending on a specific task"
        },
        {
            "title": "Data structures & Databases",
            "description": "Because data is almost everywhere"
        }
    ]

    development_approaches_list = development_approaches_list.map(({title, description}, index) => {
        return <ListItem key={index} title={title} description={description} />
    })

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.leftColumn}>
                    <Title>Main programming language:</Title>
                    <ProgressCard image_src={getImage("/python-logo.png")} progress_name="Python" progress_level={90}/>
                    <p className={styles.titleText}>For deeper interview:</p>
                    <div className={styles.list}>
                        {deeper_interview_list}
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.additionalLanguages}>
                        <Title>I used to work with:</Title>
                        {additional_languages_list}
                    </div>
                    <div className={styles.additionalInformation}>
                        <Title>In my work I’m using:</Title>
                        <div className={styles.list}>
                            {development_approaches_list}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;