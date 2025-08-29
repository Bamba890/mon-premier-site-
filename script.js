var counter = 0;

function Upvote() {
    counter += 1;

    document.getElementById("votes").innerHTML = counter + " votes";
}

function Downvote() {
    counter -= 1;

    document.getElementById("votes").innerHTML = counter + " votes";
}