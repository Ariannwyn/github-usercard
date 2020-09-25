/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

let data = {
  avatar_url: "https://i.pinimg.com/originals/a4/71/29/a471298a862ab551a81761b0d68abd6b.jpg",
  bio: null,
  followers: 1,
  following: 0,
  html_url: "url",
  location: "Portland, OR",
  login: "Ariannwyn",
  name: "Ari Adams",
  url: "url",
}
let fakeData = [data, data, data];

const friendsArray = ['https://api.github.com/users/Uniloki', 'https://api.github.com/users/squishiedragon', 'https://api.github.com/users/allraec', 'https://api.github.com/users/harvey-magana', 'https://api.github.com/users/ariannwyn']
let cards = document.getElementsByClassName('cards')[0];
friendsArray.forEach(friend => {
  axios.get(friend) 
    .then(response => {
      console.log(response.data)
      cards.appendChild(cardMaker(response.data));
    })
    .catch(error => {
      console.log("error")
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(data) {
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  const expand = document.createElement('span');
  const email = document.createElement('p');
  const twitter = document.createElement('p');

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  expand.classList.add('expandButton');

  userImg.setAttribute('src', data.avatar_url);
  name.textContent = data.name; 
  username.textContent = data.login;
  location.textContent = "Location: "+data.location;
  profile.textContent = "Profile: "
  link.setAttribute = data.html_url;
  followers.textContent = "Followers: "+data.followers;
  following.textContent = "Following: "+data.following;
  bio.textContent = "Bio: "+data.bio;
  expand.textContent = "+";
  email.textContent = "Email: "+data.email;
  twitter.textContent = "Twitter Handle: "+data.twitter_username;

  card.appendChild(userImg);
  card.appendChild(cardInfo);
  card.appendChild(expand);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(link);
  
  expand.addEventListener('click', () => {
    card.classList.toggle('card-open')
    if (card.classList.contains('card-open')){
      cardInfo.appendChild(email);
      cardInfo.appendChild(twitter);
    }
    else {
      cardInfo.removeChild(email);
      cardInfo.removeChild(twitter);
    }
  })
  return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
