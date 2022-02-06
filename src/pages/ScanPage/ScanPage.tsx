import React from 'react';
import './ScanPage.scss';
import Header from '../../components/Header'
import Id from '../../assets/images/id.svg'
import x from '../../assets/images/x.svg'
import v from '../../assets/images/v.svg'

const ScanPage: React.FC<{ photo: string, isPhotoValid: boolean, changeCamera: any }> = props => {
    
    const { photo, isPhotoValid, changeCamera} = props;

    return(
        <div className="scan-page">
            <Header/>
            <h4 className="title">Scan your ID</h4>
            <p className="text">Take a picture. It may take time to validate your personal information.</p>
            <div className={'image-container ' + (photo !== '' ? '' : 'image-container--padding')}>
                {photo !== '' ? 
                    <>
                        <img className={'image ' + (isPhotoValid ? 'image--valid' : 'image--invalid')} src={photo} alt="id taken" />
                        <div className={'feedback ' + (isPhotoValid ? 'feedback--valid' : 'feedback--invalid')}>
                            <img src={isPhotoValid ? v : x} alt="icon"/>
                            <p>{isPhotoValid ? 'Accepted' : 'Rejected'}</p>
                        </div>
                    </>
                    : 
                    <img className="image" src={Id} alt="id card icon"/>    
                }
                {isPhotoValid ? '' :
                    <button className="button" onClick={changeCamera}>
                        {photo !== '' ? 'Retake picture' : 'Take picture'}
                    </button>
                }
            </div>
        </div>
    )
}

export default ScanPage;