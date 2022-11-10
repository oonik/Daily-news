const loadNews = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data.news_category));
}

const displayNews = newses =>{
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        console.log(news)
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('btn-group')
    newsDiv.innerHTML = `
    <a href="#" class="btn btn-primary active" aria-current="page">${news.category_name}</a>
    
    `   
    newsContainer.appendChild(newsDiv) 
    });
}

loadNews();