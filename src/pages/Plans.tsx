import { Link } from 'react-router-dom';
import CircleLeft from '@assets/CircleLeft.png';

export function Plans() {
    return (
        <div id="plans">
            <div className="steps">
                <div className="circle-left-button">
                    <Link to="/">
                        <img src={CircleLeft} alt="Return" />
                    </Link>
                </div>
                <div className="label-steps">
                    <p>PASO 1 DE 2</p>
                </div>
                <div className="progress-bar">

                </div>
            </div>

        </div>
    )
}