import React, {useEffect} from 'react';
import './Alert.css';

function Alert({text, modificator, handleHideAlertBox}) {


    useEffect(() => {

        if (modificator) {
            setTimeout(() => {
                if (typeof handleHideAlertBox == 'function') {
                    handleHideAlertBox();
                }
            }, 2000)
        }

    })

    return (
        <div className={modificator ? `alert alert--${modificator}` : "alert"}>
            <div className="alert__wrapper">
                <div className="alert__info">{text}</div>
            </div>
        </div>
        );
};

export default Alert;