async function fetchTopFivePhotos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    if (!response.ok) throw new Error('ქსელის შეცდომა');
    
    const photos = await response.json();
    const firstFive = photos.slice(0, 5);
    
    console.log("--- პირველი 5 ფოტოს სათაური ---");
    firstFive.forEach(photo => console.log(photo.title));
  } catch (error) {
    console.error("შეცდომა ფოტოების წამოღებისას:", error.message);
  }
}

fetchTopFivePhotos();