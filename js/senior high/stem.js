var researchTitles = [
    'The effects of malnutrition in todays youth.',
    'Digital Age: The influence of ICT in Millennials Today.',
    'Working With Technology: The Pros & Cons of Having Technology in The Workplace.',
    'Humble abode: The Importance of Innovative Aspects in Home-Building.',
    'Futuristic: The World Ruled by Robots.',
    'Future Demand for Artificial Intelligence?',
    'Current Position for Artificial Intelligence?',
    'Virtual Reality?',
    'Human Health: What Are The Main Factors to Effect Human Health? & How to Reduce Them? How Technology has Improved Medicine?',
    'Life Changes.',
    'Stent Use in Heart Operations: How they Improved Longevity & Daily Functioning.',
    'Added Features of Computerized Conveniences in Passenger Vehicles: How The Improvement of Human Lives Are Affected?',
    'DNA Fingerprinting.',
    'Ethics & Genetics.',
    'Humans & Wildlife.',
    'Malnutrition.',
    'Psychology of Plastic Surgery.',
    'Vaccines.',
    'Lying with Numbers.'
]

function newTitle() {
	var randomTitles = Math.floor(Math.random() * (researchTitles.length));
	document.getElementById('answer').innerHTML = researchTitles[randomTitles];
	document.getElementById('answer').style.background = "#3BBA9C";
}