$(() => {
    /* Load the header */
    $("div#header").load("components/header.html", () => {
        /* Once it's loaded, fade it smoothly in */
        enableScrollFeature()
    })
})
