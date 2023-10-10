import styles from "./MainLanding.module.scss";
import image from "../../assets/images/bgGirls.png"

function MainLanding() {
    return (
        <div>
            <section className = {styles.topSection}>
                <img src={image} className = {styles.girlsImg} alt='girls' />
            </section>
        </div>
    )
}

export default MainLanding
