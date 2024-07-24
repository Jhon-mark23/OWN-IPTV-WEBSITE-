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
const radio13 = new Audio('http://stream.gmanews.tv/ioslive/livestream/playlist.m3u8');
const radio14 = new Audio('http://122.53.138.32:8000/dzrm.mp3');
const radio15 = new Audio('http://s3.free-shoutcast.com/stream/18342/;?nocache=40&type=http');
const radio16 = new Audio('https://s5.radio.co/s49bbdfa2a/listen');
const radio17 = new Audio('http://sg-icecast.eradioportal.com:8000/febc_dzfe');
const radio18 = new Audio('https://stream.zeno.fm/dphe9050afhvv');
const radio19 = new Audio('http://stream-145.zeno.fm/wp3e88sqtuquv?zt=eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJ3cDNlODhzcXR1cXV2IiwiaG9zdCI6InN0cmVhbS0xNDUuemVuby5mbSIsInJ0dGwiOjUsImp0aSI6ImNjRE');
const radio20 = new Audio('https://de3.amfmph.com:8133/stream'); 
const radio21 = new Audio('https://chloreign.com/listen/sanibpwersa/radio.mp3');
const radio22 = new Audio('https://castk.tunzilla.com/https://s5.myradiostream.com/43098/listen.mp3');
const radio23 = new Audio('https://playerservices.streamtheworld.com/api/livestream-redirect/EASYROCK_MNL_SC');
const radio24 = new Audio('https://sg-icecast.eradioportal.com:8443/akyson_iloilo'); 
const radio25 = new Audio('https://stream.zeno.fm/0cdp55nqam0uv');
const radio26 = new Audio('https://s36.radiolize.com/radio/8170/radio.mp3');
const radio27 = new Audio('https://cast.tunzilla.com/http://centova57.instainternet.com:8191/stream');


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
  { ele: radio13, audioName: 'DZBB'},
  { ele: radio14, audioName: 'REPUBLIKA FM 87.5'},
  { ele: radio15, audioName: '94.7 MELLOW'},
  { ele: radio16, audioName: '95.5 EAGLE FM'},
  { ele: radio17, audioName: '98.7 THE MASTER’S TOUCH'},
  { ele: radio18, audioName: 'BARANGGAY LS'},
  { ele: radio19, audioName: 'BOMBO RADIO'},
  { ele: radio20, audioName: '105.9 WILD FM'},
  { ele: radio21, audioName: 'HEART FM'},
  { ele: radio22, audioName: '88.7 DCG-FM'},
  { ele: radio23, audioName: '96.6 EASY ROCK'},
  { ele: radio24, audioName: 'AKSYON RADIO'},
  { ele: radio25, audioName: 'PINOY RAP RADIO'},
  { ele: radio26, audioName: 'FRESH FM'},
  { ele: radio27, audioName: 'SUPREME RADIO FM 98.1'},

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
