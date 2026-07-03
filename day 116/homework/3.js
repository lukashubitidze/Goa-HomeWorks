async function fetchAllAlbumTitles() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const albums = await response.json();
    
    console.log("--- ყველა ალბომის სათაური ---");
    albums.forEach(album => console.log(album.title));
  } catch (error) {
    console.error("შეცდომა ალბომების წამოღებისას:", error.message);
  }
}

fetchAllAlbumTitles();