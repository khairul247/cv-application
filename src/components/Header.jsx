// Header.jsx
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Resume Builder</h1>
                    <p className={styles.subtitle}>Create your professional resume in minutes ⏰</p>
                </div>
            </div>
        </header>
    )
}