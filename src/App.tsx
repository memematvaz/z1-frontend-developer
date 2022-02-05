import React, {useRef, useState} from 'react';
import './styles/App.scss';

import ScanPage from './pages/ScanPage'
import CapturePage from './pages/CapturePage'

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

  console.log('isPhotoValid', isPhotoValid)
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
      
      
      {page === 'scan' ?
        <ScanPage hasPhoto= {hasPhoto} photo={photo} isPhotoValid={isPhotoValid} changeCamera={changeCamera}/>
        :
        <CapturePage hasPhoto= {hasPhoto} isPhotoValid={isPhotoValid} changeScan={changeScan} videoRef={videoRef} photoRef={photoRef}/>
     
      }
    
    </div>
  );
}

export default App;
