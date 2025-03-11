const CLIENT_ID = 'bzgpOUgzCIRECUqjH5CPR4PZeOL6IIFeGo5oyggVxWFP0jQUIa';
const CLIENT_SECRET = 'vswl65sw5klhbPjCNvWRoc7JO0oI6Lk5pMhx2kLH';
const API_URL = 'https://api.petfinder.com/v2/animals';

let accessToken = '';

document.getElementById('search-button').addEventListener('click', function() {
    const location = document.getElementById('location').value.trim();
    if (location) {
        getAccessToken().then(() => fetchPets(location));
        const inputValue = document.getElementById('location').value.padStart(5, '0');
        const link = document.createElement('a');
        const texts = document.createElement('span');
        texts.innerHTML = ' (This is in work, but testing passing the value from this page to another in JS)';
        link.href = `map.html?location=${inputValue}`;
        link.innerHTML = 'Go to map';
        result.appendChild(link);
        result.appendChild(texts);
    } else {
        alert("Error! Please enter a location!");
    }
});

function getAccessToken() {
    return fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': CLIENT_ID,
            'client_secret': CLIENT_SECRET
        })
    })
    .then(response => response.json())
    .then(data => {
        accessToken = data.access_token;
    })
    .catch(error => {
        console.error('Error fetching access token:', error);
        alert('Error! Failed to get access token. Please try again later.');
    });
}

function fetchPets(location) {
    const headers = {
        'Authorization': `Bearer ${accessToken}`,
    };

    fetch(`${API_URL}?location=${location}`, { headers })
        .then(response => response.json())
        .then(data => {
            if (data && data.animals && data.animals.length > 0) {
                displayPets(data.animals);
            } else {
                document.getElementById('pet-list').innerHTML = '<p>Sorry, no pets were found in your location.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching pets:', error);
            alert('Error! Something went wrong while fetching pets.');
        });
}

function displayPets(pets) {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';

    pets.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');

        petCard.innerHTML = `
            <img src="${pet.primary_photo_cropped ? pet.primary_photo_cropped.small : 'https://via.placeholder.com/200'}" alt="${pet.name}">
            <h3>${pet.name}</h3>
            <p>Breed: ${pet.breeds.primary || 'Unknown'}</p>
            <p>Age: ${pet.age || 'Unknown'}</p>
            <p>Gender: ${pet.gender || 'Unknown'}</p>
            <a href="${pet.url}" target="_blank">View Details</a>
        `;

        petList.appendChild(petCard);
    });
}