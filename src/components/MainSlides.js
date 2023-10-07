import { Slide } from 'react-slideshow-image';
import styles from './mainslides.module.css';
import common from './common.module.css';
import 'react-slideshow-image/dist/styles.css';
import Button from './lib/Button';

function MainSlides() {
    const images = [
        '/e8105822618913ff498cd953634becba.jpg',
        '/a71689171da1bf50e58f3fb1305b426c.jpg'
    ];

    const properties = {
        prevArrow: (<button style={{ marginLeft: '5%', borderRadius: '50%', borderWidth: '0px' }}>
            <span class={`material-icons-outlined ${common.green}`}>
                arrow_back
            </span>
        </button>),
        nextArrow: (<button style={{ marginRight: '5%', borderRadius: '50%', borderWidth: '0px' }}>
            <span class={`material-icons-outlined ${common.green}`}>
                arrow_forward
            </span>
        </button>),
        autoplay: false
    }

    return (
        <Slide {...properties}>
            <div className={styles["each-slide-effect"]}>
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div>
                        <p>If we are the best</p>
                        <h2>International<br/>medical company</h2>
                        <div>
                            <Button name={"Department"}/>
                            <button className={styles.more}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["each-slide-effect"]}>
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <div>
                        <p>If we are the best</p>
                        <h2>International<br/>medical company</h2>
                        <div>
                            <Button name={"Department"}/>
                            <button className={styles.more}>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default MainSlides;