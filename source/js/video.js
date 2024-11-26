// const URL = 'https://www.youtube.com/embed/9TZXsZItgdw?si=pRy2uuKoXKjNUmrQ';
const URL = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&amp;si=pRy2uuKoXKjNUmrQ';
const video = document.querySelector('.video');
const img = video.querySelector('.video__ilustration');
const buttonPlay = video.querySelector('.video__button');

function createIframe () {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframe.setAttribute('src', URL);
  //   iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('height', '170');
  iframe.setAttribute('width', '320');
  iframe.setAttribute('frameborder', '0');

  return iframe;
}

buttonPlay.addEventListener('click', ()=>{
  const iframe = createIframe();
  img.remove();
  buttonPlay.remove();
  video.appendChild(iframe);
});
