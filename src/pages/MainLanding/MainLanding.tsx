import styles from "./MainLanding.module.scss";
import image from "../../assets/images/bgGirls.png"
import GreenButton from "../../components/GreenButton/GreenButton";
import InputText from "../../components/Input/InputText";
import SignUpBlock from "../../components/SignUpBlock/SignUpBlock";

function MainLanding() {
    return (
        <div>
            <section className = {styles.topSection}>
                <img src={image} className = {styles.girlsImg} alt='girls' />
                <div className = {styles.topSectionInner}>
                    <div className = {styles.topSectionRightColumn}>
                        <div className = {styles.happyCouples}>
                            <div className = {styles.happyCouplesQuantity}>
                                2500+
                            </div>
                            Happy couples
                        </div>
                        <div className = {styles.headerWithDescrAndButton}>
                            <h1>Dating Ukrainian Single Ladies</h1>
                            <p>
                                Join for free and start chatting
                            </p>
                            <p>
                                More than a thousand single women are ready for a serious relationship and are waiting for your message
                            </p>
                            <GreenButton isNotFullWith>view profiles</GreenButton>
                        </div>
                    </div>
                    <div className = {styles.authColumn}>
                        <div className = {styles.authColumnInner}>
                             <SignUpBlock/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainLanding
