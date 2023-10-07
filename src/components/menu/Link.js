import styles from '../menu.module.css';

function Link(props) {
    return (
        <li className={styles.li}>
            <span>{props.name}</span>
            <span class="material-icons-outlined">
                expand_more
            </span>
        </li>
    )
}

export default Link;