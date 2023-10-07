import styles from './topbar.module.css';
import 'material-icons/iconfont/material-icons.css';
import common from './common.module.css';

function TopBar() {
    return (
        <div className={styles.topbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <span className={`material-icons ${common.green}`}>
                        phone
                    </span>
                    <span>+1255 - 588 - 6523</span>
                </li>
                <li className={styles.li}>
                    <span className={`material-icons ${common.green}`}>
                        email
                    </span>
                    <span>information@gmail.com</span>
                </li>
                <li className={styles.li}>
                    <span className={`material-icons ${common.green}`}>
                        place
                    </span>
                    <span>Bowery. St. New York, NY 10013, USA</span>
                </li>
            </ul>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                        <g fill="#58f4f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{'mix-blend-mode': 'normal'}}><g transform="scale(8,8)"><path d="M19.25391,2c-3.942,0 -6.25391,2.08217 -6.25391,6.82617v4.17383h-5v5h5v12h5v-12h4l1,-5h-5v-3.32812c0,-1.787 0.58277,-2.67187 2.25977,-2.67187h2.74023v-4.79492c-0.474,-0.064 -1.85509,-0.20508 -3.74609,-0.20508z"></path></g></g>
                    </svg>
                </li>
                <li className={styles.li}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                        <g fill="#58f4f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{'mix-blend-mode': 'normal'}}><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
                    </svg>
                </li>
                <li className={styles.li}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256">
                        <g fill="#58f4f0" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{'mix-blend-mode': 'normal'}}><g transform="scale(5.12,5.12)"><path d="M50.0625,10.4375c-1.84766,0.82031 -3.82812,1.37109 -5.91016,1.62109c2.125,-1.27344 3.75781,-3.28906 4.52344,-5.6875c-1.98437,1.17578 -4.19141,2.03125 -6.53125,2.49219c-1.875,-2 -4.54687,-3.24609 -7.50391,-3.24609c-5.67969,0 -10.28516,4.60156 -10.28516,10.28125c0,0.80469 0.09375,1.58984 0.26953,2.34375c-8.54687,-0.42969 -16.12109,-4.52344 -21.19531,-10.74609c-0.88672,1.52344 -1.39062,3.28906 -1.39062,5.17187c0,3.56641 1.8125,6.71484 4.57422,8.5625c-1.6875,-0.05469 -3.27344,-0.51953 -4.66016,-1.28906c0,0.04297 0,0.08594 0,0.12891c0,4.98438 3.54688,9.13672 8.24609,10.08594c-0.85937,0.23438 -1.76953,0.35938 -2.70703,0.35938c-0.66406,0 -1.30859,-0.0625 -1.9375,-0.1875c1.3125,4.08203 5.10938,7.0625 9.60547,7.14453c-3.51562,2.75781 -7.94922,4.39844 -12.76953,4.39844c-0.83203,0 -1.64844,-0.04687 -2.44922,-0.14453c4.54687,2.92188 9.95312,4.62109 15.76172,4.62109c18.91406,0 29.25781,-15.66797 29.25781,-29.25391c0,-0.44531 -0.01172,-0.89453 -0.02734,-1.33203c2.00781,-1.44922 3.75,-3.26172 5.12891,-5.32422z"></path></g></g>
                    </svg>
                </li>
                <li className={styles.li} style={{marginLeft: '50px'}}>
                    <span class={`material-icons-outlined ${styles.profile}`}>
                        person
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default TopBar;
