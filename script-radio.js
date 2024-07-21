const radio1= new Audio('https://28093.live.streamtheworld.com/YESTHEBEST_MNL.mp3');
const radio2 = new Audio('https://28093.live.streamtheworld.com/LOVERADIO_MNL.mp3');
const radio3 = new Audio('https://clubbingtv-oando.amagi.tv/playlist.m3u8');
const radio4 = new Audio('https://eu1.fastcast4u.com/proxy/bandaph?mp=/1.mp3');
const radio5 = new Audio('https://sc.kissfmkilig.net/proxy/kissfmkilig/stream.mp3');
const radio6 = new Audio('https://chloreign.com/listen/sanibpwersa/radio.mp3');
const radio7 = new Audio('https://cast3.bntworxtv.com/listen/frambulan/stream.mp3');
const radio8 = new Audio('https://myxnola-abscbn-ono.amagi.tv/index_4.m3u8');
const radio9 = new Audio('https://teleradyo-abscbn-ono.amagi.tv/playlist720_p.m3u8');
const radio10 = new Audio('http://stream-30.zeno.fm/sh37pvfd938uv?zs=9-6MPUdoSDuZq7riLOxKCg');
const radio11 = new Audio('http://stream-12.zeno.fm/2ss1hgnu6hhvv?zs=zu9MieNWTsuFyoR5UOZSPw');
const radio12 = new Audio('https://ph-icecast-win.eradioportal.com:8443/energyfm_manila');

// selecting elements
const prevBtn = document.querySelector('.previous');
const playBtn = document.querySelector('.play-pause');
const nextBtn = document.querySelector('.next');
const songName = document.querySelector('.song-name');
const playPauseIcon = document.querySelector('#play-pause-icon');


const songs = [
  { ele: radio1, audioName: 'YES FM' },
  { ele: radio2, audioName: 'LOVE RADIO' },
  { ele: radio3, audioName: 'CLUBBING' },
  { ele: radio4, audioName: 'BATANG PINOY' },
  { ele: radio5, audioName: 'KISS FM 95.1' },
  { ele: radio6, audioName: 'YOUR LOVE' },
  { ele: radio7, audioName: 'PINOY JUTSU'},
  { ele: radio8, audioName: 'MYX PH'},
  { ele: radio9, audioName: 'TELERADIO'},
  { ele: radio10, audioName: 'MAGIC 89.9'},
  { ele: radio11, audioName: 'WIN RADIO'},
  { ele: radio12, audioName: 'ENERGY FM'},
];

for(const song of songs) {
  song.ele.addEventListener('ended', ()=> {
    updateSong('next');
    playPauseSong();
  })
}

let current = 0;
let currentSong = songs[current].ele;
songName.textContent = songs[current].audioName;

playBtn.addEventListener('click',()=> {
  playPauseSong();
})

nextBtn.addEventListener('click', () => {
  updateSong('next');
  playPauseSong();
});

prevBtn.addEventListener('click', () => {
  updateSong('prev');
  playPauseSong();
});

const updateSong = (action)=> {
  currentSong.pause();
  currentSong.currentTime = 0;

  if(action === 'next'){
    current++;
    if(current > songs.length -1) current = 0;
  }
  if(action === 'prev'){
    current--;
    if(current < 0) current = songs.length - 1;
  }
  currentSong = songs[current].ele;
  songName.textContent = songs[current].audioName;
}

const playPauseSong = ()=> {
  if(currentSong.paused){
    currentSong.play();
    playPauseIcon.className = 'ph-bold ph-pause';
  }
  else {
    currentSong.pause();
    playPauseIcon.className = 'ph-bold ph-play';
  }
}
