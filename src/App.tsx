import React, {useRef, useEffect, useState} from 'react';
import './styles/App.scss';

// import ScanPage from './pages/ScanPage'
// import CapturePage from './pages/CapturePage'
import Header from './components/Header';
import Button from './components/Button';

import Id from './assets/images/id.svg'

import checkPhoto from './services/checkPhoto'

function App() {

  const [page, setPage] = useState('scan')
  const [hasPhoto, setHasPhoto] = useState(false);
  const [isPhotoValid, setIsPhotoValid] = useState(false);
  const [photo, setPhoto] = useState('');

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const changeCamera = () => {
    setPage('camera')
    setHasPhoto(false)
    setIsPhotoValid(false)
    setPhoto('')
    getVideo()
    setTimeout(() => {
      takePhoto()
    }, 1000);
  }
  
  const changeScan = () => {
    setPage('scan')
    
  }

  const takePhoto = () => {
      const width = 414;
      const height = width / (16/9);

      let video = videoRef.current;
      let photo: any = photoRef.current;

      photo.width = width;
      photo.height = height;

      let photoCtx = photo.getContext('2d');
      
      photoCtx.drawImage(video, 0, 0, width, height);

      let photoData: string = photo.toDataURL('image/jpeg');
    
      setHasPhoto(true);
      setPhoto(photoData)

      checkPhoto(photoData).then((data) =>{
        if(data.summary.outcome === "Approved"){
          setIsPhotoValid(true);
        }
      })
  }

  const getVideo = () => {
      navigator.mediaDevices
          .getUserMedia({ 
              video: {width: 1920, height: 1080} 
          })
          .then(stream => {
              let video: any = videoRef.current;
              video.srcObject = stream;
              video.play();
          })
          .catch(err => {
              console.error(err)
          })
  }


  return (
    <div className="wrapper">
      {/* <ScanPage/>
      <CapturePage/> */}
      {page === 'scan' ?
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

        :
    
      <div className="capture-page">
          <div>
            <video className={hasPhoto ? 'none' : 'image'} ref={videoRef}></video>
            <canvas className={'image' + isPhotoValid ? 'image--valid' : 'image--invalid'} ref={ photoRef }></canvas>
            
            <button className="button" onClick={changeScan}>
              Cancel
            </button>
          </div>
      </div>
      
      }
    
    </div>
  );
}

export default App;
