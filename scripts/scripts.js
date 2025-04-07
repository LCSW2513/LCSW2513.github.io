function seeMagic() {
    var video = document.getElementById("video-content").getElementsByTagName("video")[0];
    var videoSource = video.getElementsByTagName("source")[0];
    videoSource.src = "media/SmoothPress_ The Ultimate Wrinkle Remove.mp4";
    var videoContainer = document.getElementById("video-content");
    videoContainer.style.display = "block"; 
    video.load();
    video.play();
}
