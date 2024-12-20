
let uniqueIdCounter = 0; // Global counter to generate unique IDs

function appendChild(container, imgSrc, name, isArtist = true) {
    // Create the songs array
    const songs = []; // Initialize an empty array
    for (let i = 1; i <= 21; i++) {
        let song_name = `songs/anime_song_${i}.mp3`;
        songs.push(song_name); // Use push to append elements to the array
    }

    // Create the box container
    const box = document.createElement("div");
    box.classList.add("box");

    if (container !== ".container1") {
        box.classList.add("dif-rtw");
    }
    document.querySelector(container).appendChild(box);

    // Create the picture section
    const picture = document.createElement("div");
    picture.classList.add("picture");
    picture.style.backgroundImage = `url(${imgSrc})`;
    box.appendChild(picture);

    // Create the rst section with name(s)
    const rst = document.createElement("div");
    rst.classList.add("rst");
    rst.innerHTML = `<div>${name}</div><div>${isArtist ? "Artist" : ""}</div>`;
    box.appendChild(rst);

    // Create the square section with play image
    const square = document.createElement("div");
    square.classList.add("square");
    square.innerHTML = `<img src="assets/play.png" alt="Image">`;
    square.id = `square-${uniqueIdCounter++}`; // Assign a unique ID to each square
    box.appendChild(square);

    // Add onclick functionality to the square
    square.onclick = function () {
        const right = document.querySelector(".right");

        if (!right) {
            console.error("No .right element found.");
            return;
        }

        // Remove any previous audio elements if present
        const existingAudio = right.querySelector("audio");
        if (existingAudio) {
            existingAudio.pause();  // Pause the currently playing audio
            existingAudio.remove();  // Remove it from the DOM
        }

        // Create the song bar
        const song_bar = document.createElement("div");
        song_bar.classList.add("song-bar");
        right.appendChild(song_bar);

        const play_buttons = document.createElement("div");
        play_buttons.classList.add("play-buttons");
        song_bar.appendChild(play_buttons);

        // Get the song corresponding to the square's ID
        const squareId = parseInt(square.id.split("-")[1]); // Extract the numeric part of the ID
        const songSrc = songs[squareId % songs.length]; // Use modulo to wrap around if ID exceeds songs.length

        const audio = document.createElement("audio");
        audio.src = songSrc; // Assign the song source dynamically
        audio.controls = true; // Enable play/pause controls

        const icon = document.createElement("div");
        icon.classList.add("cross");

        const img = document.createElement("img");
        img.src = "assets/cross-icon.png";
        icon.appendChild(img);
        play_buttons.appendChild(icon);

        icon.onclick = () => {
            song_bar.remove();
            icon.remove();
            audio.pause();
        };

        play_buttons.appendChild(audio);

        // Start playing the audio
        audio.play().catch((error) => {
            console.error("Error playing audio:", error);
        });

        // Optional: Add event listeners to log play/pause actions
        audio.addEventListener("play", () => {
            console.log("Audio started playing");
        });

        audio.addEventListener("pause", () => {
            console.log("Audio paused");
        });

        console.log(`Playing song: ${songSrc}`);
    };
}

// USe this function to assign songs directly assgn songs to the boxes with respective ID
function assignSongToBox(boxIdNumber, songName) {
    const square = document.querySelector(`#square-${boxIdNumber}`);
    if (square) {
        square.dataset.song = songName; // Store the song name in the `data-song` attribute
        console.log(`Assigned song "${songName}" to box with ID square-${boxIdNumber}`);
    } else {
        console.error(`No square found with ID square-${boxIdNumber}`);
    }
}

// Example Usage
// assignSongToBox(1, "songs/anime_song_2.mp3");

function appendItems(container, images, names, isArtist = true) {
    images.forEach((imgSrc, index) => {
        appendChild(container, imgSrc, names[index], isArtist);
    });
}

// Define image and name arrays for different sections
const section1Images = [
    "https://th.bing.com/th/id/OIP.Y5OpcOM6fFD-_CS0amuMeAHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://wallpaperaccess.com/full/4595693.jpg",
    "http://ts4.mm.bing.net/th?id=OIP.Uo0K86wp9-6QDsj9hDLwgQHaHa&pid=15.1",
    "https://th.bing.com/th/id/OIP.BnIqb6nXbfeBiBbKtcmRcQHaHa?w=214&h=214&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.d4bfCmfWTRkADJsMqs6r6wHaHa?pid=ImgDet&w=201&h=201&c=7&dpr=1.1",
];
const section1Names = ["Kitaumi", "Kitui", "Yamika", "Velina", "Muan"];

// Example for other sections
const section2Images = [
    "http://ts1.mm.bing.net/th?id=OIP.4PI5Qsk0odfAAqmzAfePuAHaHZ&pid=15.1",
    "https://th.bing.com/th/id/OIP.OZH1rOsUPXXBKgVm3Lk7UAHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.uIM-pX-JpRRj7KuhmIInKAHaHa?w=218&h=218&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.QOUV4395O0pnffTui7mqCwHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.qhU9eMz1mRyNezRNo6nPsgHaIO?w=156&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
];
const section2Names = ["Silent Night", "Night Rule", "Cat Memories", "Lost Blue", "Lies"];

// Append items for each section
appendItems(".container1", section1Images, section1Names);
appendItems(".container2", section2Images, section2Names);

const section3Images = [
    "https://wallpapercave.com/wp/wp6640493.jpg",
    "https://th.bing.com/th/id/OIP.kIznjWVm44_3shBjENQdIgHaHa?w=198&h=198&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    "https://th.bing.com/th/id/OIP.lyPtAYs7dsD9X1a6MtujOQHaIU?pid=ImgDet&w=201&h=225&c=7&dpr=1.1",
    "https://i.pinimg.com/236x/1a/40/1b/1a401b55f554e51b3748a15e51f8698e.jpg",
    "https://i.pinimg.com/474x/ef/4d/63/ef4d6314de10e0ba7c356053b5aa8037.jpg",
];

const section3Names = ["Heaven Rights", "Innocence", "Dragon Rights", "White Light", "Black and White"];

appendItems(".container3", section3Images, section3Names);

const section4Images = [
    'https://i.pinimg.com/474x/7b/6f/0b/7b6f0bcec66ee8506db5ccb3cce16b95.jpg',
    'https://i.pinimg.com/236x/77/42/c1/7742c158badf2a77c982829efc6ea975.jpg',
    'https://i.pinimg.com/236x/40/d9/2d/40d92d7d5641041445bf9d32da993229.jpg',
    'https://i.pinimg.com/736x/a5/62/e7/a562e7a08660b8f8ec07ba539f3e1b35.jpg',
    'https://i.pinimg.com/236x/47/47/78/474778e35db86152194fa4e49540714e.jpg',
];

const section4Names = ["Golden Lights", "Scars", "Dark Nights", "Good Light", "Blue Flowers"];

appendItems(".container4", section4Images, section4Names);

const section5Images = [
    'https://i.pinimg.com/236x/46/e7/a7/46e7a7a28919061d992d144d01b4e0a5.jpg',
    'https://i.pinimg.com/474x/fa/68/0d/fa680d5c283f7fd59d76e5bcf0918f29.jpg',
    'https://i.pinimg.com/236x/02/12/eb/0212ebb58bc26c4ea188626e60b0c06d.jpg',
    'https://i.pinimg.com/236x/ce/08/33/ce083329a189d6ada5df348c5beaeda8.jpg',
    'https://i.pinimg.com/736x/89/68/a0/8968a0aab4973ae12ea6a982fe3d2740.jpg',
];

const section5Names = ["The Nights", "Purple Light", "Golden Eye", "Escape", "Childhood"];

appendItems(".container5", section5Images, section5Names);

function append(container, sectionNames, sectionImages, image, name) {
    // Add new image and name to the arrays
    sectionImages.push(image);
    sectionNames.push(name);

    // Append only the new item
    appendChild(container, image, name);
}

//              EXAMPLE USAGE

// append('.container5',section5Names,section5Names,'','Fuck You');