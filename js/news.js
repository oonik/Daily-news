const loadNews = () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayNews(data.data.news_category))
    .catch(error => console.log(error))
}

const displayNews = newses =>{
    const newsContainer = document.getElementById('news-container');
    newses.forEach(news => {
        //console.log(news)
        
    const newsDiv = document.createElement('div');
    newsDiv.classList.add('btn-group')
    newsDiv.innerHTML = `
    <a onclick="loadNewsId(${news.category_id})" href="#" class="btn" aria-current="page">${news.category_name}</a>
    
    `   
    newsContainer.appendChild(newsDiv) 
    
    });
    
}

const loadNewsId = (idNews) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/0${idNews}`
   fetch(url)
   .then(res => res.json())
   .then(data => loadNewsDetails(data.data))
   .catch(error => console.log(error));
}

const loadNewsDetails = details =>{
    toggleSpiner(true)
    const newsDetailsContainer = document.getElementById('news-details');

    newsDetailsContainer.innerHTML = '';
    
    details.forEach(detail => {
       //console.log(detail) 
       
        const detailDiv = document.createElement('div');
        detailDiv.classList.add('card');
        detailDiv.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
              <img src="${detail.thumbnail_url}" class="img-fluid rounded-start runded p-5" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body p-5">
                <h5 class="card-title">${detail.title}</h5>
                <p class="card-text">${detail.details.slice(0, 400)}</p>
               
              </div>
              <div class="d-flex justify-content-around">
                 <div class="d-flex justify-content-around">
                    <p>${detail.author.name}</p>
                    <img src="${detail.author.img}" alt="Logo" width="30" height="24" class="d-inline-block align-text-top rounded-circle mx-2">
                 </div>
                 <div class="d-flex justify-content-center">
                   <p>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                   <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                   <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                 </svg>
                   </p>
                   <p class="mx-2">${detail.total_view}</p>
                 </div>
                 
              </div>
            </div>
          </div>
        `
        newsDetailsContainer.appendChild(detailDiv)
    });
    toggleSpiner(false)
}

const toggleSpiner = isLoading =>{
   const loader = document.getElementById('loader');
   if(isLoading){
     loader.classList.remove('d-none');
   }
   else{
     loader.classList.add('d-none')
   };
}


loadNews();