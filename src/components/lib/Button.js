import styles from './button.module.css';
import common from '../common.module.css';

function Button(props) {
    return (
        <button className={styles.dep}>
            <span>{props.name}</span>
            <span class={`material-icons-outlined ${common.green} ${common["bg-white-round"]}`}>
                arrow_forward
            </span>
        </button>
    )
}

export default Button;