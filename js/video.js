const videoButton = document.querySelector('[data-bem = "gym__video-button"]');
const videoContent = document.querySelector('[data-bem = "gym__video-content"]');
const videoPoster = document.querySelector('[data-bem = "gym__video-poster"]');
const videoPlayer = videoContent.querySelector('iframe');
let videoSrc = videoPlayer.getAttribute('src');

const videoButtonOnClick = () => {
  videoPoster.classList.add('gym__video-poster--hidden');
  videoButton.classList.add('gym__video-button--hidden');
  videoContent.classList.remove('gym__video-content--hidden');
  videoSrc += '&autoplay=1';
  videoPlayer.setAttribute('src', videoSrc);
};

const initVideo = () => {
  videoButton.addEventListener('click', videoButtonOnClick);
};

export {
  initVideo
};
