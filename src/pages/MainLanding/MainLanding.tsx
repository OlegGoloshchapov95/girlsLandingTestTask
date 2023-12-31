import styles from "./MainLanding.module.scss";
import image from "../../assets/images/bgGirls.png"
import logoUi from "../../assets/images/logo-ui.svg"
import logoDreams from "../../assets/images/logo-Dreams.svg"
import GreenButton from "../../components/GreenButton/GreenButton";
import SignUpBlock from "../../components/SignUpBlock/SignUpBlock";
import StatisticsItem from "../../components/StatisticsItem/StatisticsItem";

function MainLanding() {
    return (
        <div>
            <section className={styles.topSection}>
                <header className={styles.topSectionHeader}>
                    <div className={styles.headerLeft}>
                        <img src={logoUi} className={styles.girlsImg} alt='ui'/>
                        <img src={logoDreams} className={styles.girlsImg} alt='dreams'/>
                    </div>
                    <GreenButton isNotFullWith>sign up</GreenButton>
                </header>
                <img src={image} className={styles.girlsImg} alt='girls'/>
                <div className={styles.topSectionInner}>
                    <div className={styles.containerBlock}>
                        <div className={styles.topSectionRightColumn}>
                            <div className={styles.happyCouples}>
                                <div className={styles.happyCouplesQuantity}>
                                    2500+
                                </div>
                                Happy couples
                            </div>
                            <div className={styles.headerWithDescrAndButton}>
                                <h1>Dating Ukrainian Single Ladies</h1>
                                <p>
                                    Join for free and start chatting
                                </p>
                                <p>
                                    More than a thousand single women are ready for a serious relationship and are
                                    waiting for your message
                                </p>
                                <div className={styles.happyCouples}>
                                    <div className={styles.happyCouplesQuantity}>
                                        2500+
                                    </div>
                                    Happy couples
                                </div>
                                <GreenButton isNotFullWith>view profiles</GreenButton>
                            </div>
                        </div>
                        <div className={styles.authColumn}>
                            <div className={styles.authColumnInner}>
                                <SignUpBlock/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.statisticsSection}>
                    <div className={styles.containerBlock}>
                        <div className={styles.StatisticsWrapper}>
                            <div className={styles.statisticsItem}>
                                <StatisticsItem title={"+250"} middleText={"new members"} bottomText={"every month"}/>
                            </div>
                            <div className={styles.statisticsItem}>
                                <StatisticsItem title={"17+"} middleText={"years"} bottomText={"in dating business!"}/>
                            </div>
                            <div className={styles.statisticsItem}>
                                <StatisticsItem title={"100%"} middleText={"verified members"} bottomText={"with our Anti-scam policy!"}/>
                            </div>
                            <div className={styles.statisticsItem}>
                                <StatisticsItem title={"Free"} middleText={"letters and chat"} bottomText={"let ladies know more about you"}/>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default MainLanding
