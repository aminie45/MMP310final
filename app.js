// Animated Scroll
$('#submit').click(function () {

    $('html, body').animate({
        scrollTop: $('#gifs').offset().top
    }, 1000);
});

$(document).ready(function () {

    // Array of movies genre
    const movieGenre = [
        "Western Movies",
        "Comedy Movies",
        "Drama Movies", 
        "Thriller Movies",
        "Horror Movies",
        "Adventure Movies",
        "Rated X Movies",
        "Action Movies"
    ];

    // Array of filters for movie genre
    const filterChoices = [
    ];
    
    // Empty Strings
    let movieGenreQuery = "";


    // Displays Gif Buttons
    for (var i = 0; i < movieGenre.length; i++) {

        const gifBtn = document.getElementById('buttonDiv');
        const createButton = document.createElement('button');
        createButton.classList.add("movie-genre");

        createButton.innerHTML = movieGenre[i];
        createButton.value = movieGenre[i];

        gifBtn.appendChild(createButton);
    }

    $('.movie-genre').on('click', function () {
        movieGenreQuery = this.value;
    });


    // Displays Filter Buttons
  for (var i = 0; i < filterChoices.length; i++) {

        const filterBtn = document.getElementById('filterDiv');
       const createFilterBtn = document.createElement('button');

       createFilterBtn.innerHTML = filterChoices[i];
        createFilterBtn.value = filterChoices[i];

        filterBtn.appendChild(createFilterBtn);
    }


    // Shows Gif results when sumbit button is clicked
    $('#submit').click(function (event) {

        var offset = Math.round(Math.random() * 100);

        var query = movieGenreQuery;

        var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";
        var url = "https://api.giphy.com/v1/gifs/search?q="
            + query
            + "&api_key=" 
            + key
            + "&limit=12"
            + "&offset="
            + offset;

        $.getJSON(url, function (json) {
            console.log(json);

            // Hides previous results
            document.getElementById('gifs').innerHTML = "";

            // Displays Gifs
            for (let i = 0; i < json.data.length; i++) {

                const gif = json.data[i];

                const imgElem = $('<img>')
                    .attr('src', gif.images.downsized.url)

                const imgContainer = $('<div>')
                    .addClass('gif');

                imgContainer.append(imgElem)

                $('#gifs').append(imgContainer);
            }
        });
    }); 
});