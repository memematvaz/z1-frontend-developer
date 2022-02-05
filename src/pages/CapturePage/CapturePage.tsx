import React, {useRef, useEffect, useState} from 'react';
import './CapturePage.scss';

const CapturePage = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const [hasPhoto, setHasPhoto] = useState(false);

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9);

        let video = videoRef.current;
        let photo: any = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);

        let photoData: any = photo.toDataURL('image/jpeg');

        setHasPhoto(true);
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
    useEffect(()=> {
        getVideo();
    }, [videoRef])

    return(
        <div className="capture-page">
            <div className="camera">
                <video ref={videoRef}></video>
                <button onClick={takePhoto}>SNAP</button>
            </div>
            <div className={'result' + (hasPhoto ? 'hasPhoto' : '')}>
                <canvas ref={photoRef}></canvas>
                <button>close</button>
            </div>
        </div>

    );
}



export default CapturePage;