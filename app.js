const songs = [
    {
        title: "Midnight Dreams",
        artist: "Luna",
        emoji: "🌙"
    },

    {
        title: "Pink Skies",
        artist: "Nova",
        emoji: "🌸"
    },

    {
        title: "Ocean Eyes",
        artist: "Kai",
        emoji: "🌊"
    },

    {
        title: "Afterglow",
        artist: "Mira",
        emoji: "✨"
    },

    {
        title: "Neon Nights",
        artist: "Juno",
        emoji: "🌃"
    },

    {
        title: "Cloud Nine",
        artist: "Aria",
        emoji: "☁️"
    }
];


const songList =
    document.getElementById("songList");


function displaySongs(list) {

    songList.innerHTML = "";


    list.forEach((song, index) => {

        songList.innerHTML += `

            <div
                class="song-card"
                onclick="selectSong(${index})"
            >

                <div class="song-cover">
                    ${song.emoji}
                </div>

                <button
                    class="favorite"
                    onclick="event.stopPropagation(); toggleFavorite('${song.title}')"
                >
                    ♡
                </button>

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${song.artist}
                </p>

            </div>

        `;

    });

}


displaySongs(songs);


// Search

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener(
    "input",
    function () {

        const query =
            searchInput.value.toLowerCase();


        const filtered =
            songs.filter(song =>
                song.title
                    .toLowerCase()
                    .includes(query)
                ||
                song.artist
                    .toLowerCase()
                    .includes(query)
            );


        displaySongs(filtered);

    }
);