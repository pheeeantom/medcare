import styles from './appointment.module.css';
import common from './common.module.css';
import Button from './lib/Button';

function Appointment() {
    return (
        <div className={styles.appointment}>
            <div style={{display: 'flex', alignContent: 'space-between', flexWrap: 'wrap', padding: '40px 0'}}>
                <h5 className={`${common.green} ${styles.bc}`}>|| Departments</h5>
                <p className={styles.caption}>Make an appointment<br/>now</p>
                <div className={styles['dep-wrapper']}>
                    <Button name={"Make an appointment"} />
                </div>
            </div>
            <div>
                <img src="/1-6-2-2-FindADoctor.png" height="350" width="250"/>
            </div>
        </div>
    )
}

export default Appointment;