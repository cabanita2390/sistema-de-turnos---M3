import styles from "./Card.module.css"
import turn_image from "../../assets/oyher/turn_image.jpg"

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <img src={turn_image} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum accusamus maiores, aperiam consectetur voluptas, quisquam similique eum esse inventore architecto obcaecati voluptates? Modi, quas eum! Quis veritatis repudiandae commodi accusantium?</p>
        </div>
    )
}