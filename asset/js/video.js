const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.btn_pause')
const volume = videoPlayer.querySelector('.volume')
const currentTimeElement = videoPlayer.querySelector('.current')
const durationTimeElement = videoPlayer.querySelector('.duration')
const progress = videoPlayer.querySelector('.video-progress')
    //const progressBar = videoPlayer.querySelector('.video-progress-filled')
const audio = videoPlayer.querySelector('.audio')


//Play and Pause button
playButton.addEventListener('click', (e) => {
    if (video.paused) {
        //audio.play();
        video.play();
        e.target.src = './asset/img/pause_white_24dp.svg'
    } else {
        //audio.pause();
        video.pause();
        e.target.src = './asset/img/play_arrow_white_24dp.svg'
    }
})

//volume
/*volume.addEventListener('mousemove', (e)=> {
  video.volume = e.target.value
})*/

//current time and duration
/*const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)*/


//Progress bar
/*video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
})*/

//change progress bar on click
/*progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
})*/