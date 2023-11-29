// Function to fetch a random quote from the Quotable API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'Failed to fetch quote.';
    }
}

// Function to generate a random quote
async function generateQuote() {
    const quote = await fetchQuote();
    document.getElementById('quote-text').textContent = quote;
}

// Event listener for the button click
document.getElementById('quote-button').addEventListener('click', generateQuote);

// Initial quote generation
generateQuote();
