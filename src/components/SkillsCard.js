import styles from './SkillsCard.module.css'


function ProgressCard({image_src, progress_name, progress_level}) {
    return (
        <div className={styles.progressCard}>
            <div className={styles.progressCardImageContainer}>
                <img className={styles.progressCardImage} src={image_src} alt={progress_name}/>
            </div>
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
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.leftColumn}>
                    <Title>Main programming language:</Title>
                    <ProgressCard image_src="./python-logo.png" progress_name="Python" progress_level={90}/>
                    <p className={styles.titleText}>For deeper interview:</p>
                    <div className={styles.list}>
                        <ListItem title="Kivy & KivyMD, Tkinter" description="building a GUI applications"/>
                        <ListItem title="Telebot, Aiogram" description="building Telegram bots"/>
                        <ListItem title="Loguru" description="logging and catching bugs"/>
                        <ListItem title="Sqlite3" description="storing the data"/>
                        <ListItem title="Click" description="building console applications"/>
                        <ListItem title="Threading" description="separating one process"/>
                        <ListItem title="Multiprocessing" description="running tasks on a separate cores"/>
                        <ListItem title="Pyinstaller" description="creating an executables"/>
                        <ListItem title="Venv" description="separating projects working-spaces"/>
                        <ListItem title="Openpyexcel" description="generate reports for the target user"/>
                        <ListItem title="Selenium" description="automate the work with the browser"/>
                        <ListItem title="BeautifulSoup & requests" description="parsing a web-sites"/>
                        <ListItem title="UnitTests" description="testing and debugging code"/>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.additionalLanguages}>
                        <Title>I used to work with:</Title>
                        <ProgressCard image_src="./c-logo.png" progress_name="C" progress_level={65}/>
                        <ProgressCard image_src="./c-plus-plus-logo.png" progress_name="C++" progress_level={60}/>
                        <ProgressCard image_src="./html-5-logo.png" progress_name="HTML & CSS" progress_level={55}/>
                        <ProgressCard image_src="./js-logo.png" progress_name="JavaScript" progress_level={20}/>
                        <ProgressCard image_src="./react-logo.png" progress_name="React" progress_level={20}/>
                    </div>
                    <div className={styles.additionalInformation}>
                        <Title>In my work I’m using:</Title>
                        <div className={styles.list}>
                            <ListItem title="Object Oriented Programming / Functional Programming"
                                      description="Depending on a specific task"/>
                            <ListItem title="Data structures & Databases"
                                      description="Because data is almost everywhere" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;