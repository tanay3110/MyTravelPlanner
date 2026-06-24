// Fill search bar when top pick is clicked
function fillSearch(destination) {
    document.getElementById('searchInput').value = destination;
}

// Search button
function searchTrips() {
    let query = document.getElementById('searchInput').value;
    if (query === '') return;
    // Baad mein yahan feed.html pe redirect karenge
    console.log('Searching for:', query);
}