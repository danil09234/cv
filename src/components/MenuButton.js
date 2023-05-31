import styles from "./MenuButton.module.css";


function MenuButton({scroll_id, children}) {
    let scrolling = false;
    let timer = null;

    window.addEventListener(
        "scroll",
        function () {
            scrolling = true;
            if (timer !== null) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                scrolling = false;
            }, 20);
        },
        false
    );


    function goTo(id) {
        if (scrolling) return;
        const element = document.getElementById(id);
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <li className={styles.menuItem}>
            <button className={styles.menuItemButton} onClick={() => scroll_id ? goTo(scroll_id) : undefined}>
                {children}
            </button>
        </li>
    );
}


export default MenuButton;
