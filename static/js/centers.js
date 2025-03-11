let markers = {};
let maps = {}; 

async function fetchCenters() {
    try {
        const response = await fetch('./static/data/centers.json');
        const centers = await response.json();
        return centers;
    } catch (error) {
        console.error("Error loading adoption centers:", error);
        return [];
    }
}

function initializeMap(containerId) {
    const map = L.map(containerId).setView([37.871, -122.256], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    return map;
}

async function renderCenters() {
    const state = document.getElementById("stateDropdown").value;
    const resultsContainer = document.getElementById("results");

    if (!state) {
        resultsContainer.innerHTML = "<p>Please select a state.</p>";
        return;
    }

    resultsContainer.innerHTML = "";

    const adoptionCenters = await fetchCenters();

    const filteredCenters = adoptionCenters.filter(center => {
        const centerState = center.location.split(", ").pop();
        return centerState === state;
    });

    if (filteredCenters.length === 0) {
        resultsContainer.innerHTML = "<p>Error! No adoptions locations found!.</p>";
        return;
    }

    const list = document.createElement("ul");
    list.style.listStyleType = "none";
    list.style.padding = "0";

    filteredCenters.forEach((center, index) => {
        const listItem = document.createElement("li");
        listItem.style.marginBottom = "15px";
        
        const mapId = `map-${index}`;

        listItem.innerHTML = `
            <strong>${center.name}</strong><br>
            <em>${center.location}</em><br>
            Address: ${center.address} ${center.zip}<br>
            Phone: ${center.phone}<br>
            <button id= "map-button" onclick="toggleMap(${index}, '${center.address} ${center.zip}')">Show Map</button>
            <div id="${mapId}" style="height: 300px; width: 400px; display: none; margin: 0 auto;"></div>        `;
        list.appendChild(listItem);
    });

    resultsContainer.appendChild(list);
}

function toggleMap(index, location) {
    const mapContainer = document.getElementById(`map-${index}`);
    const showHideButton = event.target;

    if (mapContainer.style.display === "none") {
        mapContainer.style.display = "block";
        showHideButton.textContent = "Hide Map";

        if (!maps[index]) {
            const map = initializeMap(`map-${index}`);
            maps[index] = map;

            mapContainer.style.height = '300px';

            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const lat = data[0].lat;
                        const lon = data[0].lon;
                        map.setView([lat, lon], 13);

                        if (!markers[index]) {
                            markers[index] = L.marker([lat, lon]).addTo(map);
                        } else {
                            markers[index].setLatLng([lat, lon]);
                        }
                    } else {
                        alert("Error! Location not found!");
                    }
                })
                .catch(error => console.error('Error:', error));
        } else {
            const map = maps[index];
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        const lat = data[0].lat;
                        const lon = data[0].lon;
                        map.setView([lat, lon], 13);

                        markers[index].setLatLng([lat, lon]);
                    } else {
                        alert("Error! Location not found!");
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    } else {
        mapContainer.style.display = "none";
        showHideButton.textContent = "Show Map";

        const map = maps[index];
        if (map) {
            map.remove();
            maps[index] = null;
        }
    }
}
