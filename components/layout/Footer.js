import styles from "./Footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href={"https://chaoscantrip.com"}>chaoscantrip.com</a>
            <a href={"https://jdonald.co.uk"}>jdonald.co.uk</a>
        </footer>
    )
}