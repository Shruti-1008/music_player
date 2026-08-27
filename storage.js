function getFavorites() {

    const favorites =
        localStorage.getItem(
            "melodifyFavorites"
        );

    return favorites
        ? JSON.parse(favorites)
        : [];
}


function toggleFavorite(title) {

    let favorites =
        getFavorites();


    if (favorites.includes(title)) {

        favorites =
            favorites.filter(
                song => song !== title
            );

    } else {

        favorites.push(title);

    }


    localStorage.setItem(
        "melodifyFavorites",
        JSON.stringify(favorites)
    );

    alert("Favorites updated ❤️");
}