function checkPlatform() {
    const url = document.getElementById('url').value.toLowerCase();
    const keyword = document.getElementById('keyword').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    // Known streaming platforms with popular movies
    const platforms = {
        'disney': {
            baseUrl: 'https://disney.com',
            movies: [
                'spiderman', 'frozen', 'moana', 'avatar', 'black panther', 'the lion king', 'aladdin', 
                'beauty and the beast', 'cinderella', 'toy story', 'the incredibles', 'finding nemo', 
                'monsters inc', 'zootopia', 'mulan', 'pirates of the caribbean', 'star wars', 
                'avengers', 'iron man', 'thor', 'doctor strange', 'black widow', 'guardians of the galaxy'
            ]
        },
        'netflix': {
            baseUrl: 'https://netflix.com',
            movies: [
                'stranger things', 'the crown', 'enola holmes', 'red notice', 'bird box', 'the witcher', 
                'money heist', 'squid game', 'to all the boys', 'the kissing booth', 'lucifer', 
                'narcos', 'umbrella academy', '13 reasons why', 'you', 'sex education', 'shadow and bone'
            ]
        },
        'amazon': {
            baseUrl: 'https://primevideo.com',
            movies: [
                'the boys', 'jack ryan', 'invincible', 'reacher', 'thirteen lives', 'the wheel of time',
                'the marvelous mrs. maisel', 'the tomorrow war', 'good omens', 'hunters', 'upload'
            ]
        },
        'sonyliv': {
            baseUrl: 'https://sonyliv.com',
            movies: [
                'scam 1992', 'rocket boys', 'chumbak', 'project power', 'a simple murder', 'bhonsle', 
                'welcome home', 'girl in the city', 'bose dead or alive', 'love jihad', 'avrodh'
            ]
        },
        'youtube': {
            baseUrl: 'https://youtube.com',
            movies: [
                'free guy', 'wonder woman', 'jumanji', 'the lego movie', 'dune', 'ghostbusters', 
                'despicable me', 'spider-man', 'batman', 'fast and furious', 'jurassic world'
            ]
        }
    };

    let platformFound = false;
    let message = '';

    // Check if the URL contains a known platform and if the keyword matches a movie title on that platform
    for (const [name, data] of Object.entries(platforms)) {
        if (url.includes(data.baseUrl) && data.movies.includes(keyword)) {
            message = `The movie "${keyword}" is officially available on the ${name.charAt(0).toUpperCase() + name.slice(1)} platform. Safe content.`;
            resultDiv.className = 'result safe';
            platformFound = true;
            break;
        }
    }

    // If no official platform is found or if movie isn't associated with that platform
    if (!platformFound) {
        message = `Potential piracy detected: The movie "${keyword}" might not be on an official platform. Please verify the URL.`;
        resultDiv.className = 'result flagged';
    }


    resultDiv.innerText = message;

    
}
