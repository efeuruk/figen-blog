import styles from './buttons.module.css';

const CLASS_DARKTHEME = 'darkTheme';
const INSTAGRAM_URL = 'https://www.instagram.com/figensayili/';

function toggleDarkTheme(darkTheme, setDarkTheme) {
    const body = document.querySelector('body');
    if (darkTheme) {
        setDarkTheme(false);
        body.classList.remove(CLASS_DARKTHEME);
    }
    else {
        setDarkTheme(true);
        body.classList.add(CLASS_DARKTHEME);
    }
}

function Buttons({ darkTheme, setDarkTheme }) {
    return(
        <div className={styles.container}>
            <button onClick={() => toggleDarkTheme(darkTheme, setDarkTheme)}>
                {darkTheme ? '🌞' : '🌚'}
            </button>
            <a className={styles.instagramLink} href={INSTAGRAM_URL}>
                <i className="fab fa-instagram"></i>
            </a>
        </div>
    )
}

export default Buttons;