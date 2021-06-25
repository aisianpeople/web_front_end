console.log("Successfully imported Neighborhood Page.");

const randomLocation = (evt) => {
	evt.preventDefault();
    const locations = ["https://slco.org/dimple-dell/", 
    "https://ahs.canyonsdistrict.org/", "https://www.costco.com/", 
    "https://www.google.com/maps/@40.5515321,-111.8825942,3a,75y,187.06h,81.74t/data=!3m7!1e1!3m5!1soI7KJ36F3zrYZH7P1mhPvA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DoI7KJ36F3zrYZH7P1mhPvA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D88.39262%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192",
    "https://www.shakeshack.com/location/the-school-yard-sandy-utah/?utm_source=G&utm_medium=local&utm_campaign=google-local"];

    const random = Math.floor(Math.random() * locations.length);
    window.location.href = locations[random];
}


const randomLocal = document.querySelector('#random');

randomLocal.addEventListener('click', randomLocation);