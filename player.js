let currentSong = 0;

let playing = false;


const playBtn =
    document.getElementById("playBtn");

const songTitle =
    document.getElementById("songTitle");

const artistName =
    document.getElementById("artistName");

const albumCover =
    document.getElementById("albumCover");

const progress =
    document.getElementById("progress");


function selectSong(index) {

    currentSong = index;

    loadSong();

    playing = true;

    playBtn.innerText = "⏸";

}


function loadSong() {

    const song =
        songs[currentSong];


    songTitle.innerText =
        song.title;


    artistName.innerText =
        song.artist;


    albumCover.innerText =
        song.emoji;


    progress.value = 0;

}


playBtn.addEventListener(
    "click",
    function () {

        playing = !playing;


        if (playing) {

            playBtn.innerText = "⏸";

        } else {

            playBtn.innerText = "▶";

        }

    }
);


document
    .getElementById("prevBtn")
    .addEventListener(
        "click",
        function () {

            currentSong--;

            if (currentSong < 0) {
                currentSong =
                    songs.length - 1;
            }

            loadSong();

        }
    );


document
    .getElementById("nextBtn")
    .addEventListener(
        "click",
        function () {

            currentSong++;

            if (
                currentSong >=
                songs.length
            ) {
                currentSong = 0;
            }

            loadSong();

        }
    );


// Fake progress animation

setInterval(
    function () {

        if (!playing) return;


        progress.value =
            Number(progress.value) + 1;


        if (progress.value >= 100) {

            progress.value = 0;

            currentSong++;

            if (
                currentSong >=
                songs.length
            ) {
                currentSong = 0;
            }

            loadSong();

        }

    },
    1000
);