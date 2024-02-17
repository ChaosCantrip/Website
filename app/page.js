import ExternalLink from "@/components/ExternalLink";

import styles from "./HomePage.module.css";

export default function HomePage() {

    const links = {
        "EIE": "https://www.imperial.ac.uk/study/ug/courses/electrical-engineering-department/electronic-information-meng/",
        "Imperial": "https://www.imperial.ac.uk/",
        "BigBangFair": "https://www.thebigbang.org.uk/",
        "Codecademy": "https://www.codecademy.com/",
        "RPi": "https://www.raspberrypi.org/",
        "SharkBot": "https://github.com/ChaosCantrip/SharkBot",
        "SharkBotOnline": "https://sharkbot.online"
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <h1>Hi! I'm <span className={styles.name}>James</span></h1>
            </div>
            <div className={styles.intro}>
                <p>
                    I'm an <ExternalLink href={links.EIE}>Electrical Information Engineering</ExternalLink> student
                    at <ExternalLink href={links.Imperial}>Imperial College London</ExternalLink>. I fell in love with
                    programming at an early age, and am now trying to find my way in a career
                    as a software engineer.
                </p>
                <p>
                    My Dad has the sole claim to responsibility when it comes to my love of programming. Back when I was
                    6, he took me to the <ExternalLink href={links.BigBangFair}>Big Bang Fair</ExternalLink> in
                    Birmingham. At that event, there was a stall
                    for <ExternalLink href={links.Codecademy}>Codecademy</ExternalLink>, teaching basic HTML and CSS.
                    That day, I went home, and burned my way through the entire web development course.
                </p>
                <p>
                    Shortly after that, he got me a <ExternalLink href={links.RPi}>Raspberry Pi</ExternalLink> for
                    my Birthday, along with a guidebook for Python, and I finally got my first taste of real code
                    development. Since then, I've taken every opportunity to expand upon my programming skills through
                    a multitude of personal projects.</p>
                <p>
                    My Biggest Project to date is <ExternalLink href={links.SharkBot}>SharkBot</ExternalLink>, a
                    live-service Discord Bot that started off simple, but has now grown far beyond I could have
                    imagined when I started, and has taught me more than I could recount about full-stack development,
                    especially since the development of its' new accompanying
                    website, <ExternalLink href={links.SharkBotOnline}>SharkBot Online</ExternalLink>.
                </p>
                <p>
                    Please ignore the lorem ipsums, I'm still building this site :)
                </p>
            </div>
        </div>
    )
}