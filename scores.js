document.getElementById("fetch-stats").addEventListener("click", function() {
    const league = document.getElementById("league-select").value;
    getStats(league);
});

async function getStats(league) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.footystats.org/league?key=${apiKey}&league=${league}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
            displayStats(data);
        } else {
            document.getElementById("stats-display").innerHTML = 
                `<p>Failed to fetch data for ${league}. Please try again later.</p>`;
        }
    } catch (error) {
        document.getElementById("stats-display").innerHTML = 
            `<p>An error occurred: ${error.message}</p>`;
    }
}

function displayStats(data) {
    const statsDisplay = document.getElementById("stats-display");
    statsDisplay.innerHTML = `
        <h2>Statistics for ${data.league.name}</h2>
        <p>Goals Scored: ${data.stats.goals_scored}</p>
        <p>Cards: ${data.stats.cards}</p>
        <p>Corners: ${data.stats.corners}</p>
        <!-- Add more stats as needed -->
    `;
}
