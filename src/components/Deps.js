import { Slide } from 'react-slideshow-image';
import styles from './deps.module.css';
import common from './common.module.css';
import 'react-slideshow-image/dist/styles.css';
import './indicators.css';
import 'material-icons/iconfont/material-icons.css';

function Deps() {

    const indicators = (index) => (<div className="indicator">&nbsp;</div>);

    return (
        <div className={styles.deps}>
            <h5 className={`${common.green} ${styles.bc}`} style={{textAlign: 'center'}}>|| Departments</h5>
            <p className={styles.caption}>We are give the best<br/>health service</p>
            <Slide prevArrow={<></>} nextArrow={<></>} indicators={indicators} autoplay={false}>
                <div className={styles["each-slide-effect"]}>
                    <div>
                        <span class={`material-icons ${common.green} ${styles.icon}`}>
                            local_hospital
                        </span>
                        <h6>Health</h6>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </span>
                        <div style={{height: '60px'}}>&nbsp;</div>
                        <button>
                            <span class='material-icons-outlined'>
                                arrow_forward
                            </span>
                        </button>
                    </div>
                    <div>
                        <span class={`material-icons ${common.orange} ${styles.icon}`}>
                            local_hospital
                        </span>
                        <h6>Health</h6>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        </span>
                        <div style={{height: '60px'}}>&nbsp;</div>
                        <button>
                            <span class='material-icons-outlined'>
                                arrow_forward
                            </span>
                        </button>
                    </div>
                    <div>
                        <span class={`material-icons ${common.pink} ${styles.icon}`}>
                            local_hospital
                        </span>
                        <h6>Health</h6>
                        <span>
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        </span>
                        <div style={{height: '60px'}}>&nbsp;</div>
                        <button>
                            <span class='material-icons-outlined'>
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
                <div className={styles["each-slide-effect"]}>jychgh</div>
            </Slide>
        </div>
    )
}

export default Deps;