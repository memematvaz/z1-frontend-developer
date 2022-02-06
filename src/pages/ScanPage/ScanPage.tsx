import React from 'react';
import './ScanPage.scss';
import Header from '../../components/Header'
import Id from '../../assets/images/id.svg'
import x from '../../assets/images/x.svg'
import v from '../../assets/images/v.svg'

const ScanPage: React.FC<{ hasPhoto: boolean, photo: string, isPhotoValid: boolean, changeCamera: any }> = props => {

    const { hasPhoto, photo, isPhotoValid, changeCamera} = props;

    return(
        <div className="scan-page">
            <Header/>
            <h4 className="title">Scan your ID</h4>
            <p className="text">Take a picture. It may take time to validate your personal information.</p>
            <div className={'image-container ' + (hasPhoto ? '' : 'image-container--padding')}>
                {hasPhoto ? 
                    <>
                        <img className={'image ' + (isPhotoValid ? 'image--valid' : 'image--invalid')} src={photo} />
                        <div className={'feedback ' + (isPhotoValid ? 'feedback--valid' : 'feedback--invalid')}>
                            <img src={isPhotoValid ? v : x} />
                            <p>{isPhotoValid ? 'Accepted' : 'Rejected'}</p>
                        </div>
                    </>
                    : 
                    <img className="image" src={Id} />    
                }
                {isPhotoValid ? '' :
                    <button className="button" onClick={changeCamera}>
                        {hasPhoto ? 'Retake picture' : 'Take picture'}
                    </button>
                }

            </div>



        
        </div>

    )
    
}


export default ScanPage;