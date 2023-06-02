import styles from "./ContactsCard.module.css"


function ContactCard({image_scr, image_alt, children}) {
    return (
        <div className={styles.contactCard}>
            <img src={image_scr} alt={image_alt} />
            <p>{children}</p>
        </div>
    );
}


function ContactsCard() {
    return (
        <div className={styles.card}>
            <div className={styles.titleFrame}>
                <p>My name is <u>Danylo Zahorulko</u></p>
                <p>Contact me</p>
            </div>
            <div className={styles.contactsFrame}>
                <ContactCard image_scr="./telegramIcon.png" alt="Telegram">@danil09234</ContactCard>
                <ContactCard image_scr="./emailIcon.png" alt="Email">dailzag05@gmail.com</ContactCard>
                <ContactCard image_scr="./gitHubIcon.png" alt="Git Hub">danil09234</ContactCard>
            </div>
        </div>
    );
}

export default ContactsCard;