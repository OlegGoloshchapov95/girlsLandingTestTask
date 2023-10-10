import styles from "./MainLanding.module.scss";
import image from "../../assets/images/bgGirls.png"

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
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainLanding
