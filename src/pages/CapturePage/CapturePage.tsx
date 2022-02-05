import React from 'react';
import './CapturePage.scss';

const CapturePage: React.FC<{  hasPhoto: boolean, isPhotoValid: boolean, changeScan: any, videoRef: any, photoRef: any }> = props => {
    console.log('props', props)
    const {  hasPhoto, changeScan, isPhotoValid, videoRef, photoRef} = props;

    return(
        <div className="capture-page">
            <div>
                <video className={hasPhoto ? 'none' : 'image'} ref={videoRef}></video>
                <canvas className={'image ' + (isPhotoValid ? 'image--valid' : 'image--invalid')} ref={ photoRef }></canvas>
                
                <button className="button" onClick={changeScan}>
                    Cancel
                </button>
            </div>
        </div>

    );
}



export default CapturePage;