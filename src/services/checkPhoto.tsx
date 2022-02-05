  
const checkPhoto = (photoData: string) => {
    return fetch('https://front-exercise.z1.digital/evaluations', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: photoData,
    }).then((response) => response.json());
};

export default checkPhoto;