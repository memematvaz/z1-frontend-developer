import React, {useEffect, useState} from 'react';
import './CapturePage.scss';
import x from '../../assets/images/x.svg'
import v from '../../assets/images/v.svg'
import bomb from '../../assets/images/bomb.svg'
import vGreen from '../../assets/images/v-green.svg'

const CapturePage: React.FC<{  hasPhoto: boolean, isPhotoValid: boolean, changeScan: any, videoRef: any, photoRef: any, photo: string, apiResponse: boolean}> = props => {
    console.log('props', props)
    
    const { hasPhoto, changeScan, isPhotoValid, videoRef, photoRef, photo, apiResponse} = props;
    
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
                    <img src= {(isValidated ? '' : bomb)+(isPhotoValid ? vGreen : '')}  />
                    <p className="text text--inverted">
                        {(isValidated ? '' : 'Room lighting is too low') + (isPhotoValid ? 'Picture taken' : '')}
                    </p>
                </div>
                <button className="button-cancel" onClick={changeScan}>
                        Cancel
                </button>
            </div>
               
        </div>

    );
}



export default CapturePage;