import styles from './employees.module.css';
import common from './common.module.css';

function Employees() {
    return (
        <div className={styles.employees}>
            <h5 className={`${common.green} ${styles.bc}`} style={{textAlign: 'center'}}>|| Expert team</h5>
            <p className={styles.caption}>Adept service provider<br/>team</p>
            <div>
                <div className={styles.card}>
                    <svg width="250" height="250">
                        <pattern id="pattern1" width="100%" height="100%">
                            <image href="/doctor-stress.avif" width="250" height="250" preserveAspectRatio="xMidYMin slice"></image>
                        </pattern>
                        <circle cx="125" cy="125" r="100" fill="url(#pattern1)"></circle>
                    </svg>
                    <p><b>Jessica Sarah</b></p>
                    <p>Founder CEO</p>
                </div>
                <div className={styles.card}>
                    <svg width="250" height="250">
                        <pattern id="pattern2" width="100%" height="100%">
                            <image href="/unnamed.jpg" width="250" height="250" preserveAspectRatio="xMidYMin slice"></image>
                        </pattern>
                        <circle cx="125" cy="125" r="100" fill="url(#pattern2)"></circle>
                    </svg>
                    <p><b>Michael James</b></p>
                    <p>Founder CEO</p>
                </div>
                <div className={styles.card}>
                    <svg width="250" height="250">
                        <pattern id="pattern3" width="100%" height="100%">
                            <image href="/Dr-Chen-Weihao-Photo.jpeg" width="250" height="250" preserveAspectRatio="xMidYMin slice"></image>
                        </pattern>
                        <circle cx="125" cy="125" r="100" fill="url(#pattern3)"></circle>
                    </svg>
                    <p><b>Charlie James</b></p>
                    <p>Founder CEO</p>
                </div>
                <div className={styles.card}>
                    <svg width="250" height="250">
                        <pattern id="pattern4" width="100%" height="100%">
                            <image href="/0_former-miss-eng-990436.webp" width="250" height="250" preserveAspectRatio="xMidYMin slice"></image>
                        </pattern>
                        <circle cx="125" cy="125" r="100" fill="url(#pattern4)"></circle>
                    </svg>
                    <p><b>Lauren Joanne</b></p>
                    <p>Founder CEO</p>
                </div>
            </div>
        </div>
    )
}

export default Employees;