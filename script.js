const artists = document.querySelectorAll(".artist");
const albums = document.querySelectorAll(".album");
const radios = document.querySelectorAll(".radio");
const charts = document.querySelectorAll(".chart");
const tracks = document.querySelectorAll(".track");


artists.forEach((artist) => {
    artist.addEventListener("mouseenter", () => {
        artist.children[0].children[1].classList.add("button-display");
    });

    artist.addEventListener("mouseleave", () => {
        artist.children[0].children[1].classList.remove("button-display");
    });

});

albums.forEach((album) => {
    album.addEventListener("mouseenter", () => {
        album.children[0].children[1].classList.add("button-display");
    });

    album.addEventListener("mouseleave", () => {
        album.children[0].children[1].classList.remove("button-display");
    });

});
radios.forEach((radio) => {
    radio.addEventListener("mouseenter", () => {
        radio.children[0].children[1].classList.add("button-display");
    });

    radio.addEventListener("mouseleave", () => {
        radio.children[0].children[1].classList.remove("button-display");
    });

});

charts.forEach((chart) => {
    chart.addEventListener("mouseenter", () => {
        chart.children[0].children[1].classList.add("button-display");
    });

    chart.addEventListener("mouseleave", () => {
        chart.children[0].children[1].classList.remove("button-display");
    });

});

tracks.forEach((track) => {
    track.addEventListener("mouseenter", () => {
        track.children[0].children[1].classList.add("button-display");
    });

    track.addEventListener("mouseleave", () => {
        track.children[0].children[1].classList.remove("button-display");
    });

});


