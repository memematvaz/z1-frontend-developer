import React from 'react';
import './ScanPage.scss';
import Header from '../../components/Header'
import Id from '../../assets/images/id.svg'

const ScanPage: React.FC<{ hasPhoto: boolean, photo: string, isPhotoValid: boolean, changeCamera: any }> = props => {
    console.log('props', props)

    const { hasPhoto, photo, isPhotoValid, changeCamera} = props;

    return(
        <div className="scan-page">
            <Header/>
            <h4>Scan your ID</h4>
            <p>Take a picture. It may take time to validate your personal information.</p>
            <img className="image" src={Id} />

            {hasPhoto ? 
                <img className="image" src={photo} />
            : ''}

            <button className="button" onClick={changeCamera}>
                {hasPhoto ? 'Retake picture' : 'Take picture'}
            </button>
        
        </div>

    )
    
}


export default ScanPage;