import React, {useRef, useState} from 'react';
import './styles/App.scss';
import ScanPage from './pages/ScanPage'
import CapturePage from './pages/CapturePage'
import checkPhoto from './services/checkPhoto'

function App() {
 
  const [page, setPage] = useState('scan')
  const [photo, setPhoto] = useState('');
  const [isPhotoValid, setIsPhotoValid] = useState(false);
  const [apiResponse, setApiResponse] = useState(false);

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const changeCamera = () => {
    setPage('camera')
    setIsPhotoValid(false)
    setApiResponse(false)
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
      
      checkPhoto(photoData).then((data) =>{
        setApiResponse(true);
        if(data.summary.outcome === "Approved"){
          setIsPhotoValid(true);
        }
      })
      setPhoto(photoData) 
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
      {page === 'scan' ?
        <ScanPage photo={photo} 
                  isPhotoValid={isPhotoValid} 
                  changeCamera={changeCamera}/>
        :
        <CapturePage isPhotoValid={isPhotoValid} 
                     changeScan={changeScan} 
                     videoRef={videoRef} 
                     photoRef={photoRef} 
                     apiResponse={apiResponse}/>
      }
    </div>
  );
}

export default App;
