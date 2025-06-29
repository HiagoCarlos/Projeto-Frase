document.addEventListener('DOMContentLoaded', () => {
    const quoteTextElement = document.getElementById('quote-text');
    const newQuoteButton = document.getElementById('new-quote-btn');

    const fetchQuote = async () => {
        quoteTextElement.textContent = 'Carregando...';
        try {
            const response = await fetch('/api/quote'); 
            const data = await response.json();
            quoteTextElement.textContent = data.quote;
        } catch (error) {
            console.error('Failed to fetch quote:', error);
            quoteTextElement.textContent = 'Erro ao carregar a frase. Verifique o console.';
        }
    };

    newQuoteButton.addEventListener('click', fetchQuote);
});