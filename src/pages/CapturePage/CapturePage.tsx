import React, {useEffect, useState} from 'react';
import './CapturePage.scss';
import bomb from '../../assets/images/bomb.svg'
import vGreen from '../../assets/images/v-green.svg'

const CapturePage: React.FC<{ isPhotoValid: boolean, changeScan: any, videoRef: any, photoRef: any, apiResponse: boolean}> = props => {

    const { changeScan, isPhotoValid, videoRef, photoRef, apiResponse} = props;
    
    const [isValidated, setIsValidated] = useState(apiResponse);
    console.log(isValidated, props);

    useEffect(() => {
        setIsValidated(apiResponse);
      }, [apiResponse]);

    return(

        <div className="capture-page">
            <div className="black"></div>
            <div className="capture-page__text-container">
                <h4 className="title title--inverted">Take picture</h4>
                <p className="text text--inverted">
                    Fit your ID card inside the frame.<br/>The picture will be taken automatically.
                </p>
                <div className="image-container">
                    <video className={isValidated ? 'none' : 'image'} ref={videoRef}></video>
                    <canvas className={(isValidated ? 'image ' : 'none ') + (isPhotoValid ? 'image--valid' : 'image--invalid')} 
                            ref={ photoRef }>
                    </canvas>
                </div>
                <div className="loading">
                    {isValidated ? '' :
                        <>
                            <img src= { bomb } alt="icon bomb" />
                            <p className="text text--inverted">Room lighting is too low</p>
                        </>  
                    }
                    {isValidated && isPhotoValid ? 
                        <>
                            <img src= { vGreen } alt="icon ok" />
                            <p className="text text--inverted">Picture taken</p>
                        </>
                        
                    : ''}
                </div>
                <button className="button-cancel" onClick={changeScan}>
                        Cancel
                </button>
            </div>     
        </div>
    );
}

export default CapturePage;