import styles from './menu.module.css';
import Link from './menu/Link';

function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.logo}>
                <img width='50' height='50'
                    src='/medical-care-logo-icon-design-vector-22560842.jpg'/>
                <h1 className={styles['company-name']}><span className={styles.green}>MED</span>Care</h1>
            </div>
            <div>
                <ul className={styles.ul}>
                    {[
                        "Home",
                        "Department",
                        "Doctors",
                        "Shop",
                        "News",
                        "Page"
                    ].map(name => <Link name={name} />)}
                    <li className={styles.li}>
                        <span class={`material-icons-outlined ${styles.more}`}>
                            apps
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;