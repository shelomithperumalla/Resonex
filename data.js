// ═══════════════════════════════════════════════════════
//  data.js — FIXED VERSION with Proper Audio Sync
//  Single audio instance shared across all pages
// ═══════════════════════════════════════════════════════

// ─── SONG DATABASE ────────────────────────────────────
const DATA = {
  categories: [
    { id: 'trending',  name: 'Trending',  emoji: '🔥', color: '#e94560' },
    { id: 'playlists', name: 'Playlists', emoji: '🎵', color: '#a78bfa' },
    { id: 'artists',   name: 'Artists',   emoji: '🎤', color: '#3ecfcf' },
    { id: 'favorites', name: 'Favorites', emoji: '❤️', color: '#f5a623' },
  ],
  
  playlists: [
    { 
      id: 'bts', 
      name: 'BTS', 
      emoji: '🌙',
      cover: 'images/btsimg.jpeg',
      description: 'BEST OF BTS',
      songs: [29,30,31,32,33,34,35,36,37]
    },
    { 
      id: 'journey', 
      name: 'Travelling Vibes', 
      emoji: '⚡',
      cover: 'images/journeyimg.jpeg',
      description: 'Waves of Pleasure',
      songs: [38,39,40,41,42,43,44,46]
    }
    
  ],

  artists: [
    {
      id: 'Anirudh',
      name: 'Anirudh Ravichandher',
      image: 'artistimg/anirudhimg.jpeg',
      emoji: '🌙',
      bio: 'Indian music composer, producer, and playback singer',
      songs: [0, 1, 2, 3, 4,27]
    },
    {
      id: 'Arjith',
      name: 'Arjith Singh',
      image: 'artistimg/arjithimg.jpeg',
      emoji: '⚡',
      bio: 'Indian singer and music producer',
      songs: [5, 6, 7, 8, 9, 39]
    },
    {
      id: 'Shreya',
      name: 'Shreya Ghoshal',
      image: 'artistimg/shreyaimg.jpeg',
      emoji: '🌊',
      bio: 'Indian Playback Singer',
      songs: [10, 11, 12, 13, 14]
    },
    {
      id: 'AR',
      name: 'A.R.Rahman',
      image: 'artistimg/ar.jpeg',
      emoji: '🎨',
      bio: 'Indian Musical Composer and Record Producer',
      songs: [15, 16, 17, 18, 19,28]
    },
    {
      id: 'Sid',
      name: 'Sid Sriram',
      image: 'artistimg/sidimg.jpeg',
      emoji: '☀️',
      bio: 'Indian Musician and Music Producer',
      songs: [20, 21, 22, 23, 24, 43, 45]
    }
  ],

  songs: [
     { 
      id: 0, 
      title: 'Fear Song (Telugu)', 
      artist: 'Anirudh Ravichandher',
      artistId: 'Anirudh',   
      dur: 270, 
      emoji: '⭐', 
      audio: 'audios/fearsong.mp3',
      cover: 'images/fearsongimg.jpeg',
      cat: ['trending'] 
    },
   
    { 
      id: 1, 
      title: 'Monica (Telugu)',     
      artist: 'Anirudh Ravichandher',
      artistId: 'Anirudh',    
      dur: 183, 
      emoji: '✨', 
      audio: 'audios/monica.mp3',
      cover: 'images/monicaimg.jpeg',
      cat: ['trending'] 
    },
    { 
      id: 2, 
      title: 'Chuttamalle(Telugu)',    
      artist: 'Anirudh Ravichandher',
      artistId: 'Anirudh',  
      dur: 224, 
      emoji: '🌊', 
      audio: 'audios/chuttamalle.mp3',
      cover: 'images/chuttamalleimg.jpeg',
      cat: ['trending'] 
    },
    { 
      id: 3, 
      title: 'hoyna hoyna (Telugu)',    
      artist: 'Anirudh Ravichandher',
      artistId: 'Anirudh',   
      dur: 271, 
      emoji: '🎨', 
      audio: 'audios/hoyna.mp3',
      cover: 'images/hoynaimg.jpeg',
      cat: [] 
    },
    { 
      id: 4, 
      title: 'Gaali Vaalugha (Telugu)',     
      artist: 'Anirudh Ravichandher',
      artistId: 'Anirudh',  
      dur: 241, 
      emoji: '🌅', 
      audio: 'audios/gaali.mp3',
      cover: 'images/gaaliimg.jpeg',
      cat: [] 
    },
    { 
      id: 5, 
      title: 'Channa Mereya',  
      artist: 'Arjith Singh',
      artistId: 'Arjith',  
      dur: 289, 
      emoji: '🌑', 
      audio: 'audios/channa.mp3',
      cover: 'images/channaimg.jpeg',
      cat: [] 
    },
    { 
      id: 6, 
      title: 'Ve Kamleya',      
      artist: 'Arjith Singh',
      artistId: 'Arjith',    
      dur: 247, 
      emoji: '🌧️', 
      audio: 'audios/vekam.mp3',
      cover: 'images/vekamimg.jpeg',
      cat: [] 
    },
    { 
      id: 7, 
      title: 'Kesariya',     
      artist: 'Arjith Singh',
      artistId: 'Arjith',  
      dur: 268, 
      emoji: '🌇', 
      audio: 'audios/kesariya.mp3',
      cover: 'images/kesariyaimg.jpeg',
      cat: [] 
    },
    { 
      id: 8, 
      title: 'Tum Hi Ho',   
      artist: 'Arjith Singh',
      artistId: 'Arjith',  
      dur: 262, 
      emoji: '🔔', 
      audio: 'audios/tum.mp3',
      cover: 'images/tumimg.jpeg',
      cat: [] 
    },
    { 
      id: 9, 
      title: 'Khairiyat', 
      artist: 'Arjith Singh',
      artistId: 'Arjith',   
      dur: 270, 
      emoji: '⭐', 
      audio: 'audios/khairiyat.mp3',
      cover: 'images/khairiyatimg.jpeg',
      cat: [] 
    },
    { 
      id: 10, 
      title: 'Poolane Kunukeyamaantaa', 
      artist: 'Shreya Ghoshal',
      artistId: 'Shreya',   
      dur: 305, 
      emoji: '⭐', 
      audio: 'audios/poolane.mp3',
      cover: 'images/poolaneimg.jpeg',
      cat: [] 
    },
    { 
      id: 11, 
      title: 'Sooseki', 
      artist: 'Shreya Ghoshal',
      artistId: 'Shreya',   
      dur: 256, 
      emoji: '⭐', 
      audio: 'audios/sooseki.mp3',
      cover: 'images/soosekiimg.jpeg',
      cat: ['trending'] 
    },
    { 
      id: 12, 
      title: 'Chikni Chameli', 
      artist: 'Shreya Ghoshal',
      artistId: 'Shreya',   
      dur: 364, 
      emoji: '⭐', 
      audio: 'audios/chikni-chameli.mp3',
      cover: 'images/chikni-chameliimg.jpeg',
      cat: [] 
    },
    { 
      id: 13, 
      title: 'Mandaara', 
      artist: 'Shreya Goshal',
      artistId: 'Shreya',   
      dur: 286, 
      emoji: '⭐', 
      audio: 'audios/mandaara.mp3',
      cover: 'images/mandaaraimg.jpeg',
      cat: [] 
    },
    { 
      id: 14, 
      title: 'Digu Digu Digu Naaga', 
      artist: 'Shreya Goshal',
      artistId: 'Shreya',   
      dur: 196, 
      emoji: '⭐', 
      audio: 'audios/digu.mp3',
      cover: 'images/diguimg.jpeg',
      cat: [] 
    },
    { 
      id: 15, 
      title: 'Adi Arabi Kadalandam', 
      artist: 'A.R Rehman',
      artistId: 'AR',   
      dur: 316, 
      emoji: '⭐', 
      audio: 'audios/adi.mp3',
      cover: 'images/adiimg.jpeg',
      cat: [] 
    },
    { 
      id: 16, 
      title: 'Tere Bina', 
      artist: 'A.R Rehman',
      artistId: 'AR',   
      dur: 308, 
      emoji: '⭐', 
      audio: 'audios/tere.mp3',
      cover: 'images/tereimg.jpeg',
      cat: [] 
    },
    { 
      id: 17, 
      title: 'Luka Chuppi', 
      artist: 'A.R Rehman',
      artistId: 'AR',   
      dur: 396, 
      emoji: '⭐', 
      audio: 'audios/luka.mp3',
      cover: 'images/lukaimg.jpeg',
      cat: [] 
    },
    { 
      id: 18, 
      title: 'Chikri chikri', 
      artist: 'A.R. Rehman',
      artistId: 'AR',   
      dur: 272, 
      emoji: '⭐',
      audio: 'audios/chikiri.mp3',
      cover: 'images/chikiriimg.jpeg',
      cat: ['trending'] 
    },
    { 
      id: 19, 
      title: 'Hayirabba', 
      artist: 'A.R Rehman',
      artistId: 'AR',   
      dur: 434, 
      emoji: '⭐', 
      audio: 'audios/hayirabba.mp3',
      cover: 'images/hayirabbaimg.jpeg',
      cat: [] 
    },
    { 
      id: 20, 
      title: 'Urike Urike', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 231, 
      emoji: '⭐', 
      audio: 'audios/urike.mp3',
      cover: 'images/urikeimg.jpeg',
      cat: [] 
    },
    { 
      id: 21, 
      title: 'Maate Vinadhuga', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 275, 
      emoji: '⭐', 
      audio: 'audios/maate.mp3',
      cover: 'images/maateimg.jpeg',
      cat: [] 
    },
    { 
      id: 22, 
      title: 'Adiga Adiga', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 213, 
      emoji: '⭐', 
      audio: 'audios/adiga.mp3',
      cover: 'images/adigaimg.jpeg',
      cat: [] 
    },
    { 
      id: 23, 
      title: 'Samajavaragamana', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 270, 
      emoji: '⭐', 
      audio: 'audios/samajavaragamana.mp3',
      cover: 'images/samajavaragamanaimg.jpeg',
      cat: [] 
    },
    { 
      id: 24, 
      title: 'Undiporaadhey', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 173, 
      emoji: '⭐', 
      audio: 'audios/undiporaadhey.mp3',
      cover: 'images/undiporaadheyimg.jpeg',
      cat: [] 
    },
    { 
      id: 25, 
      title: 'Singari (Telugu)', 
      artist: 'Sai Abyankar',
      artistId: '',   
      dur: 270, 
      emoji: '⭐', 
      audio: 'audios/singari.mp3',
      cover: 'images/singariimg.jpeg',
      cat: ['trending'] 
    },
     { 
      id: 26, 
      title: 'Boom Boom (Telugu)',   
      artist: 'Sai Abyankar',
      artistId: '',  
      dur: 240,
      emoji: '🌙', 
      audio: 'audios/boom-boom.mp3',
      cover: 'images/boom-boomimg.jpeg',
      cat: ['trending'] 
    },
   
    { 
      id: 27, 
      title: "Don'u Donu'u Don'u ", 
      artist: 'Anirudh Ravichandher',
      artistId: 'Anirudh',   
      dur: 187, 
      emoji: '⭐', 
      audio: 'audios/donu.mp3',
      cover: 'images/donuimg.jpeg',
      cat: ['trending'] 
    },
    { 
      id: 28, 
      title: 'Usure Poyene', 
      artist: 'A.R Rehman',
      artistId: 'AR',   
      dur: 363, 
      emoji: '⭐', 
      audio: 'audios/usure.mp3',
      cover: 'images/usureimg.jpeg',
      cat: [] 
    },
    { 
      id: 29, 
      title: 'Butter', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 182, 
      emoji: '⭐', 
      audio: 'audios/butter.mp3',
      cover: 'images/butterimg.jpeg',
      cat: [] 
    },
    
    { 
      id: 30, 
      title: 'Dynamite', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 198, 
      emoji: '⭐', 
      audio: 'audios/dynamite.mp3',
      cover: 'images/dynamiteimg.jpeg',
      cat: [] 
    },
    { 
      id: 31, 
      title: 'My Universe', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 228, 
      emoji: '⭐', 
      audio: 'audios/myuniverse.mp3',
      cover: 'images/myuniverseimg.jpeg',
      cat: [] 
    },
    { 
      id: 32, 
      title: 'Mic Drop', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 238, 
      emoji: '⭐', 
      audio: 'audios/micdrop.mp3',
      cover: 'images/micdropimg.jpeg',
      cat: [] 
    },
    { 
      id: 33, 
      title: 'Permission To Dance', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 299, 
      emoji: '⭐', 
      audio: 'audios/permissiontodance.mp3',
      cover: 'images/permissiontodanceimg.jpeg',
      cat: [] 
    },
    { 
      id: 34, 
      title: 'Fake Love', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 242, 
      emoji: '⭐', 
      audio: 'audios/fakelove.mp3',
      cover: 'images/fakeloveimg.jpeg',
      cat: [] 
    },
    { 
      id: 35, 
      title: 'DNA', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 223, 
      emoji: '⭐', 
      audio: 'audios/dna.mp3',
      cover: 'images/dnaimg.jpeg',
      cat: [] 
    },
    { 
      id: 36, 
      title: 'Black Swan', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 209, 
      emoji: '⭐', 
      audio: 'audios/blackswan.mp3',
      cover: 'images/blackswanimg.jpeg',
      cat: [] 
    },
    { 
      id: 37, 
      title: 'Boy With Love', 
      artist: 'BTS',
      artistId: 'BTS',   
      dur: 229, 
      emoji: '⭐', 
      audio: 'audios/boyswithlove.mp3',
      cover: 'images/boyswithloveimg.jpeg',
      cat: [] 
    },
    { 
      id: 38, 
      title: 'Life Of Ram', 
      artist: 'Pradeep Kumar',
      artistId: '',   
      dur: 371, 
      emoji: '⭐', 
      audio: 'audios/life-of-ram.mp3',
      cover: 'images/life-of-ramimg.jpeg',
      cat: [] 
    },
    { 
      id: 39, 
      title: 'Ilahi', 
      artist: 'Arjith Singh',
      artistId: '',   
      dur: 228, 
      emoji: '⭐', 
      audio: 'audios/illahi.mp3',
      cover: 'images/illahiimg.jpeg',
      cat: [] 
    },
    { 
      id: 40, 
      title: 'Dil Dhadakne Do', 
      artist: 'Farhan Akhtar',
      artistId: '',   
      dur: 231, 
      emoji: '⭐', 
      audio: 'audios/dil-dhadakane.mp3',
      cover: 'images/dil-dhadakaneimg.jpeg',
      cat: [] 
    },
    { 
      id: 41, 
      title: 'Rock On Bro', 
      artist: 'Raghu Dixit',
      artistId: '',   
      dur: 247, 
      emoji: '⭐', 
      audio: 'audios/rock-on-bro.mp3',
      cover: 'images/rock-on-broimg.jpeg',
      cat: [] 
    },
    { 
      id: 42, 
      title: 'Waare Wah Mama', 
      artist: 'Abijit Rao',
      artistId: '',   
      dur: 217, 
      emoji: '⭐', 
      audio: 'audios/ware-wah-mama.mp3',
      cover: 'images/ware-wah-mamaimg.jpeg',
      cat: [] 
    },
    { 
      id: 43, 
      title: 'Vellipomake...', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 261, 
      emoji: '⭐', 
      audio: 'audios/vellipomake.mp3',
      cover: 'images/vellipomakeimg.jpeg',
      cat: [] 
    },
    { 
      id: 44, 
      title: 'Kyon..', 
      artist: 'Sunidhi Chauhan',
      artistId: '',   
      dur: 266, 
      emoji: '⭐', 
      audio: 'audios/kyon.mp3',
      cover: 'images/kyonimg.jpeg',
      cat: [] 
    },
    
    { 
      id: 45, 
      title: 'Emai Poyave', 
      artist: 'Sid Sriram',
      artistId: 'Sid',   
      dur: 156, 
      emoji: '⭐', 
      audio: 'audios/emai-poyave.mp3',
      cover: 'images/emai-poyaveimg.jpeg',
      cat: [] 
    },
    { 
      id: 46, 
      title: 'Ee Chinni Life', 
      artist: 'Anoop Rubens and Alphons Joseph',
      artistId: '',   
      dur: 252, 
      emoji: '⭐', 
      audio: 'audios/ee-chinni-life.mp3',
      cover: 'images/ee-chinni-lifeimg.jpeg',
      cat: [] 
    },
     { 
      id: 47, 
      title: 'Meesala Pilla',     
      artist: 'Udit Narayan & Shweta Mohan',
      artistId: '',    
      dur: 227, 
      emoji: '✨', 
      audio: 'audios/pilla.mp3',
      cover: 'images/pillaimg.jpeg',
      cat: ['trending'] 
    },
    
  ]
};

// ═══════════════════════════════════════════════════════
//  STATE MANAGEMENT (sessionStorage for persistence)
// ═══════════════════════════════════════════════════════

// ─── LOAD STATE FROM SESSIONSTORAGE ───────────────────
function loadState() {
  try {
    const raw = sessionStorage.getItem('vibeState');
    if (raw) return JSON.parse(raw);
  } catch(e) {
    console.error('Error loading state:', e);
  }
  return { 
    currentIdx: -1, 
    isPlaying: false, 
    isShuffle: false, 
    isRepeat: false, 
    volume: 0.7, 
    currentTime: 0 
  };
}

// ─── SAVE STATE TO SESSIONSTORAGE ─────────────────────
function saveState() {
  try {
    const s = { ...state };
    // Save current playback position
    if (audio && audio.currentTime) {
      s.currentTime = audio.currentTime;
    }
    sessionStorage.setItem('vibeState', JSON.stringify(s));
  } catch(e) {
    console.error('Error saving state:', e);
  }
}

let state = loadState();

// ═══════════════════════════════════════════════════════
//  FAVORITES MANAGEMENT (localStorage for persistence)
// ═══════════════════════════════════════════════════════

function loadFavorites() {
  try {
    const raw = localStorage.getItem('vibeFavorites');
    return raw ? JSON.parse(raw) : [];
  } catch(e) {
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem('vibeFavorites', JSON.stringify(favorites));
  } catch(e) {}
}

let favorites = loadFavorites();

function toggleFavorite(songId) {
  const idx = favorites.indexOf(songId);
  if (idx > -1) {
    favorites.splice(idx, 1);
  } else {
    favorites.push(songId);
  }
  saveFavorites(favorites);
  updateFavoriteButton();
  return favorites.includes(songId);
}

function isFavorite(songId) {
  return favorites.includes(songId);
}

function updateFavoriteButton() {
  const btn = document.getElementById('favBtn');
  if (btn && state.currentIdx >= 0) {
    const fav = isFavorite(state.currentIdx);
    btn.innerHTML = fav ? '❤️' : '🤍';
    btn.classList.toggle('active', fav);
  }
}

// ═══════════════════════════════════════════════════════
//  AUDIO ENGINE (Single instance, restored on each page)
// ═══════════════════════════════════════════════════════

// ─── CREATE AUDIO ELEMENT ─────────────────────────────
let audio = new Audio();
audio.volume = state.volume;

// ─── TONE GENERATION FALLBACK ─────────────────────────
function makeToneURL(songId) {
  return new Promise((resolve) => {
    const freqs = [440,523,330,659,261,392,494,277,349,587];
    const types = ['sine','square','triangle','sine','triangle','sine','square','triangle','sine','sine'];
    const dur   = 4;

    const ctx   = new (window.AudioContext || window.webkitAudioContext)();
    const osc   = ctx.createOscillator();
    const gain  = ctx.createGain();
    const dest  = ctx.createMediaStreamDestination();

    osc.type            = types[songId % types.length];
    osc.frequency.value = freqs[songId % freqs.length];
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);

    osc.connect(gain);
    gain.connect(dest);
    osc.start();
    osc.stop(ctx.currentTime + dur);

    const rec    = new MediaRecorder(dest.stream);
    const chunks = [];
    rec.ondataavailable = e => chunks.push(e.data);
    rec.onstop = () => {
      resolve(URL.createObjectURL(new Blob(chunks, { type: 'audio/webm' })));
      ctx.close();
    };
    rec.start();
    setTimeout(() => rec.stop(), dur * 1000 + 150);
  });
}

let toneCache = {};
async function getAudioURL(songId) {
  if (!toneCache[songId]) toneCache[songId] = await makeToneURL(songId);
  return toneCache[songId];
}

// ═══════════════════════════════════════════════════════
//  PLAYBACK CONTROL FUNCTIONS
// ═══════════════════════════════════════════════════════

// ─── PLAY A SPECIFIC SONG ─────────────────────────────
async function playSong(id, redirectToPlayer = true) {
  state.currentIdx = id;
  const song = DATA.songs[id];
  
  // Set audio source
  if (song.audio) {
    audio.src = song.audio;
  } else {
    const url = await getAudioURL(id);
    audio.src = url;
  }
  
  audio.volume = state.volume;
  state.currentTime = 0; // Reset playback position for new song
  
  // FIX: Start playback immediately, THEN redirect
  try {
    await audio.play();
    state.isPlaying = true;
  } catch (err) {
    console.log('Playback prevented:', err);
    state.isPlaying = false;
  }
  
  saveState();
  syncMiniPlayer();
  syncPlayerPage();
  updateFavoriteButton();

  // Redirect AFTER audio starts playing
  if (redirectToPlayer) {
    // Small delay to ensure audio is playing
    setTimeout(() => {
      window.location.href = 'player.html';
    }, 100);
  }
}

// ─── TOGGLE PLAY/PAUSE ────────────────────────────────
function togglePlay() {
  if (state.currentIdx < 0) return;
  
  if (state.isPlaying) { 
    audio.pause(); 
    state.isPlaying = false; 
  } else { 
    audio.play().catch(err => {
      console.log('Playback error:', err);
    });
    state.isPlaying = true;
  }
  
  saveState();
  syncMiniPlayer();
  syncPlayerPage();
}

// ─── PREVIOUS TRACK ───────────────────────────────────
function prevTrack() {
  const songs = DATA.songs;
  let idx = state.currentIdx - 1;
  if (idx < 0) idx = songs.length - 1;
  
  // Don't redirect if we're already on player page
  const onPlayerPage = window.location.pathname.includes('player');
  playSong(songs[idx].id, false);
  
  // If we're on player page, just update the UI
  if (onPlayerPage) {
    syncPlayerPage();
  }
}

// ─── NEXT TRACK ───────────────────────────────────────
function nextTrack() {
  const songs = DATA.songs;
  let idx;
  
  if (state.isShuffle) {
    idx = Math.floor(Math.random() * songs.length);
    while (idx === state.currentIdx && songs.length > 1) {
      idx = Math.floor(Math.random() * songs.length);
    }
  } else {
    idx = state.currentIdx + 1;
    if (idx >= songs.length) {
      if (state.isRepeat) {
        idx = 0;
      } else { 
        state.isPlaying = false; 
        saveState(); 
        syncMiniPlayer(); 
        syncPlayerPage();
        return; 
      }
    }
  }
  
  // Don't redirect if we're already on player page
  const onPlayerPage = window.location.pathname.includes('player');
  playSong(songs[idx].id, false);
  
  // If we're on player page, just update the UI
  if (onPlayerPage) {
    syncPlayerPage();
  }
}

// ─── TOGGLE SHUFFLE ───────────────────────────────────
function toggleShuffle() { 
  state.isShuffle = !state.isShuffle; 
  saveState(); 
  syncMiniPlayer(); 
  syncPlayerPage(); 
}

// ─── TOGGLE REPEAT ────────────────────────────────────
function toggleRepeat() { 
  state.isRepeat = !state.isRepeat; 
  saveState(); 
  syncMiniPlayer(); 
  syncPlayerPage(); 
}

// ═══════════════════════════════════════════════════════
//  AUDIO EVENT LISTENERS (Update UI in real-time)
// ═══════════════════════════════════════════════════════

// ─── WHEN SONG ENDS ───────────────────────────────────
audio.addEventListener('ended', nextTrack);

// ─── UPDATE PROGRESS BAR ──────────────────────────────
audio.addEventListener('timeupdate', () => {
  const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
  
  // FIX: Save current time continuously
  state.currentTime = audio.currentTime;
  saveState();

  // Update mini player progress bar
  const mpFill = document.getElementById('mpFill');
  if (mpFill) mpFill.style.width = pct + '%';

  // Update main player progress bar
  const pFill = document.getElementById('playerFill');
  if (pFill) pFill.style.width = pct + '%';
  
  // Update current time display
  const pCur = document.getElementById('pTimeCur');
  if (pCur) pCur.textContent = fmtTime(audio.currentTime);
});

// ─── UPDATE DURATION DISPLAY ──────────────────────────
audio.addEventListener('loadedmetadata', () => {
  const pDur = document.getElementById('pTimeDur');
  if (pDur) pDur.textContent = fmtTime(audio.duration);
});

// ─── HANDLE PLAYBACK ERRORS ───────────────────────────
audio.addEventListener('error', (e) => {
  console.error('Audio error:', e);
  state.isPlaying = false;
  saveState();
  syncMiniPlayer();
  syncPlayerPage();
});

// ═══════════════════════════════════════════════════════
//  UI SYNCHRONIZATION FUNCTIONS
// ═══════════════════════════════════════════════════════

// ─── SYNC MINI PLAYER (FOOTER) ────────────────────────
function syncMiniPlayer() {
  const mp = document.getElementById('miniPlayer');
  if (!mp) return;

  // Hide mini player if no song is selected
  if (state.currentIdx < 0) { 
    mp.classList.add('hidden'); 
    return; 
  }
  
  const s = DATA.songs[state.currentIdx];
  mp.classList.remove('hidden');
  
  // Update album art
  const mpArt = document.getElementById('mpArt');
  if (mpArt) {
    if (s.cover) {
      mpArt.innerHTML = `<img src="${s.cover}" alt="${s.title}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">`;
    } else {
      mpArt.textContent = s.emoji;
    }
  }
  
  // Update song info
  const mpTitle = document.getElementById('mpTitle');
  const mpArtist = document.getElementById('mpArtist');
  if (mpTitle) mpTitle.textContent = s.title;
  if (mpArtist) mpArtist.textContent = s.artist;

  // Update play/pause button
  const btn = document.getElementById('mpPlay');
  if (btn) btn.textContent = state.isPlaying ? '⏸' : '▶';
}

// ─── SYNC MAIN PLAYER PAGE ────────────────────────────
function syncPlayerPage() {
  if (state.currentIdx < 0) return;
  const s = DATA.songs[state.currentIdx];

  // Update vinyl disc image
  const disc = document.getElementById('playerDisc');
  if (disc) {
    if (s.cover) {
      disc.innerHTML = `<img src="${s.cover}" alt="${s.title}" style="width:100%; height:100%; object-fit:cover; border-radius:50%;">`;
    } else {
      disc.textContent = s.emoji;
    }
  }
  
  // Update song title and artist
  const title = document.getElementById('playerTitle');
  const artist = document.getElementById('playerArtist');
  if (title) title.textContent = s.title;
  if (artist) artist.textContent = s.artist;
  
  // Update playing animation
  const wrap = document.getElementById('playerArtWrap');
  if (wrap) wrap.classList.toggle('playing', state.isPlaying);
  
  // Update play/pause button
  const play = document.getElementById('pPlay');
  if (play) play.textContent = state.isPlaying ? '⏸' : '▶';
  
  // Update shuffle/repeat buttons
  const shuf = document.getElementById('pShuffle');
  const rep = document.getElementById('pRepeat');
  if (shuf) shuf.classList.toggle('active', state.isShuffle);
  if (rep) rep.classList.toggle('active', state.isRepeat);
  
  // Update volume slider
  const vFill = document.getElementById('pVolFill');
  if (vFill) vFill.style.width = (state.volume * 100) + '%';
  
  // Update favorite button
  updateFavoriteButton();
}

// ─── HIGHLIGHT CURRENTLY PLAYING SONG IN LISTS ────────
function highlightActiveSong() {
  document.querySelectorAll('.song-item').forEach(el => {
    el.classList.toggle('playing', el.dataset.songId == state.currentIdx && state.isPlaying);
  });
}

// ═══════════════════════════════════════════════════════
//  SONG LIST BUILDER (FIXED: Now uses images)
// ═══════════════════════════════════════════════════════

function buildSongItem(song, rank) {
  const div = document.createElement('div');
  div.className = 'song-item';
  div.dataset.songId = song.id;
  div.onclick = () => playSong(song.id, true);
  
  // FIX: Use image if available, emoji as fallback
  let artHTML;
  if (song.cover) {
    artHTML = `<img src="${song.cover}" alt="${song.title}" style="width:100%; height:100%; object-fit:cover; border-radius:8px;">`;
  } else {
    artHTML = song.emoji;
  }
  
  div.innerHTML = `
    <span class="song-rank">${rank}</span>
    <div class="song-art">${artHTML}</div>
    <div class="song-details">
      <div class="song-title">${song.title}</div>
      <div class="song-artist">${song.artist}</div>
    </div>
    <span class="song-dur">${fmtTime(song.dur)}</span>
    <div class="song-eq"><span></span><span></span><span></span></div>
  `;
  return div;
}

// ═══════════════════════════════════════════════════════
//  UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════

function fmtTime(s) {
  if (!s || isNaN(s)) return '0:00';
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

// ═══════════════════════════════════════════════════════
//  KEYBOARD SHORTCUTS
// ═══════════════════════════════════════════════════════

document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT') return;
  
  switch (e.key) {
    case ' ':
      e.preventDefault();
      togglePlay();
      break;
    case 'ArrowRight':
      e.preventDefault();
      if (audio.duration) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 5);
      break;
    case 'n':
      nextTrack();
      break;
    case 'p':
      prevTrack();
      break;
  }
});

// ═══════════════════════════════════════════════════════
//  INITIALIZE AUDIO ON PAGE LOAD (CRITICAL FIX!)
// ═══════════════════════════════════════════════════════

/**
 * FIX: This function restores the audio player state when navigating
 * between pages. It ensures continuous playback across page transitions.
 */
function initAudio() {
  console.log('Initializing audio...', state);
  
  // If no song was selected, nothing to restore
  if (state.currentIdx < 0) {
    syncMiniPlayer();
    return;
  }
  
  const song = DATA.songs[state.currentIdx];
  if (!song) return;
  
  // Set audio source
  if (song.audio) {
    audio.src = song.audio;
  } else {
    getAudioURL(state.currentIdx).then(url => {
      audio.src = url;
    });
  }
  
  audio.volume = state.volume;
  
  // Wait for audio to be ready, then restore playback position
  audio.addEventListener('loadedmetadata', () => {
    // Restore playback position
    if (state.currentTime && state.currentTime > 0) {
      audio.currentTime = state.currentTime;
    }
    
    // Resume playback if it was playing
    if (state.isPlaying) {
      audio.play().catch(err => {
        console.log('Auto-play prevented by browser:', err);
        state.isPlaying = false;
        saveState();
        syncMiniPlayer();
        syncPlayerPage();
      });
    }
    
    // Update UI
    syncMiniPlayer();
    syncPlayerPage();
    highlightActiveSong();
  }, { once: true });
}

// ═══════════════════════════════════════════════════════
//  AUTO-RUN ON PAGE LOAD
// ═══════════════════════════════════════════════════════

// Call initAudio() when the page loads
initAudio();