const hasGetUserMedia = () => {
    if (!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
        alert('Unable to enable camera');
    } else {
        enable = true;
    }
}

const onCapture = () => {
    navigator.mediaDevices.getUserMedia({video: true})
    .then(stream => {
        video.srcObject = stream;
        prompt1.style.display = 'none';
        prompt2.style.display = 'block';
        screenshot.disabled = false;
        clear.disabled = false;
    })
    .catch(err => alert('Error occured: ' + err));
}
