$(() => {
    /* Load the header */
    $("div#header").load("components/header.html", () => {
        /* Once it's loaded, fade it smoothly in */
       // enableScrollFeature()
        console.log( "header ready!" );
    })
    $("div#footer").load("components/footer.html", () => {
        /* Once it's loaded, fade it smoothly in */
        //enableScrollFeature()
        console.log( "footer ready!" );
    })
})