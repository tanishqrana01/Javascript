// Array of phrases
var wordArrays = {
    nouns: ["Tree", "Mountain", "River", "Valley", "Sun"],
    verbs: ["Whispers", "Rises", "Shines", "Reflects", "Flows"],
    adjectives: ["Majestic", "Soothing", "Serene", "Glistening", "Tranquil"],
    nouns2: ["Bird", "Cloud", "Leaf", "Pebble", "Breeze"],
    places: ["Meadow", "Canyon", "Waterfall", "Lake", "Sky"]
};


// Function to pick a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random story
function generateRandomStory() {
    const noun = getRandomElement(nouns);
    const verb = getRandomElement(verbs);
    const adjective = getRandomElement(adjectives);
    const place = getRandomElement(places);
    const story = `${noun} ${verb} ${adjective} ${noun} ${place}`;
    return story;
}

// Event listeners for button clicks
document.getElementById("voice1").addEventListener("click", function() {
    textToSpeak += getRandomElement(nouns) + " ";
});

document.getElementById("voice2").addEventListener("click", function() {
    textToSpeak += getRandomElement(verbs) + " ";
});

document.getElementById("voice3").addEventListener("click", function() {
    textToSpeak += getRandomElement(adjectives) + " ";
});

document.getElementById("voice4").addEventListener("click", function() {
    textToSpeak += getRandomElement(nouns) + " ";
});

document.getElementById("voice5").addEventListener("click", function() {
    textToSpeak += getRandomElement(places) + " ";
});

document.getElementById("speakButton").addEventListener("click", function() {
    speakNow();
});

document.getElementById("randomStoryButton").addEventListener("click", function() {
    textToSpeak = generateRandomStory();
    speakNow();
});

document.getElementById("resetButton").addEventListener("click", function() {
    textToSpeak = "";
});
