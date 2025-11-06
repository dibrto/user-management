import styles from "./Header.module.css"

export default function Header(){
    return (
         <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.course}>Manage users</span>
            </div>
        </header>
    );
};