document.addEventListener("DOMContentLoaded", function() {
  const apiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your API key
  const newsContainer = document.getElementById('news-container');
  const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  fetch(newsUrl)
    .then(response => response.json())
    .then(data => {
      data.articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');
        articleDiv.innerHTML = `
          <div class="news-article-text">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </div>
        `;
        newsContainer.appendChild(articleDiv);
      });
    })
    .catch(error => console.log(error));
});