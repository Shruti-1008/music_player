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


const container =
    document.getElementById("playlistSongs");


function displayPlaylist(list) {

    container.innerHTML = "";


    if (list.length === 0) {

        container.innerHTML = `
            <div class="player-card">

                <h2>No songs found 🎧</h2>

                <p>
                    Try searching for another song.
                </p>

            </div>
        `;

        return;
    }


    list.forEach(song => {

        container.innerHTML += `

            <div class="song-card">

                <div class="song-cover">
                    ${song.emoji}
                </div>

                <button
                    class="favorite"
                    onclick="toggleFavorite('${song.title}')"
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


displayPlaylist(songs);


// Search playlist

const search =
    document.getElementById("playlistSearch");


search.addEventListener(
    "input",
    function () {

        const query =
            search.value.toLowerCase();


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


        displayPlaylist(filtered);

    }
);