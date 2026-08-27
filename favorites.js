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
    document.getElementById("favoriteSongs");


function displayFavorites() {

    const favorites =
        getFavorites();


    const favoriteSongs =
        songs.filter(song =>
            favorites.includes(song.title)
        );


    container.innerHTML = "";


    if (favoriteSongs.length === 0) {

        container.innerHTML = `
            <div class="player-card">

                <div class="album-cover">
                    ♡
                </div>

                <div class="song-info">

                    <h2>
                        No favorites yet
                    </h2>

                    <p>
                        Go to your playlist and
                        tap ♡ on a song.
                    </p>

                </div>

            </div>
        `;

        return;
    }


    favoriteSongs.forEach(song => {

        container.innerHTML += `

            <div class="song-card">

                <div class="song-cover">
                    ${song.emoji}
                </div>

                <button
                    class="favorite liked"
                    onclick="removeFavorite('${song.title}')"
                >
                    ♥
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


function removeFavorite(title) {

    let favorites =
        getFavorites();


    favorites =
        favorites.filter(
            song => song !== title
        );


    localStorage.setItem(
        "melodifyFavorites",
        JSON.stringify(favorites)
    );


    displayFavorites();
}


displayFavorites();