const posts = [
    {
        name: "Vincent van Gogh", 
        username: "vincey1853", 
        location: "Zudert, Netherlands", 
        avatar: "images/avatar-vangogh.jpg", 
        post: "images/post-vangogh.jpg", 
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]

const nameElement = document.getElementById("nameElement");
const userNameElement = document.getElementById("userNameElement");
const locationElement = document.getElementById("locationElement");
const avatarElement = document.getElementById("avatarElement");
const postElement = document.getElementById("postElement");
const commentElement = document.getElementById("commentElement");
const likesElement = document.getElementById("likesElement");

let currentIndex = 0;

postElement.addEventListener("click", function() {
    
        nameElement.innerHTML = posts[currentIndex].name;
        userNameElement.innerHTML = posts[currentIndex].username;
        locationElement.innerHTML = posts[currentIndex].location;
        avatarElement.src = posts[currentIndex].avatar;
        postElement.src = posts[currentIndex].post;
        commentElement.innerHTML = posts[currentIndex].comment;
        likesElement.innerHTML = posts[currentIndex].likes.toLocaleString() + " likes";

        currentIndex++;

        if (currentIndex >= posts.length) {
            currentIndex = 0;
    }  

});

