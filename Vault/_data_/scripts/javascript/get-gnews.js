class News {
    listNews(element, newsCategory, articleCount, apiKey) {
        let apikey = apiKey;
        let category = newsCategory
        let count = articleCount
        let url = 'https://gnews.io/api/v4/search?q=' + category + '&token=' + apikey + '&lang=en&country=us&max=' + count;

        function formatArticle(articleImage, articleTitle, publishedDate, publishingSource, articleContent, articleUrl){
            let articleHTML = '';
            articleHTML += `
                <div class="mt-2">
                    <div class='block p-1 --tag-border-color --tag-border-width rounded'>
                        <div class="flex border border-transparent pl-1">
                            <img class="border border-transparent rounded-md py-1" src="${articleImage}" width="128" height="auto" />
                            <div>
                                <div class="text-xl font-bold --text-bold pl-4">${articleTitle}</div>
                                <div class="flex justify-between">
                                    <small class="float-right --text-faint font-semibold text-sm pl-4">${publishedDate}</small>
                                    <small class="float-right --text-faint font-semibold text-sm pr-4">${publishingSource}</small>
                                </div>
                                <div class="--text-faint pl-4">
                                    ${articleContent}
                                </div>
                                <a href="${articleUrl}"><small class="font-semibold text-sm pl-4 --text-accent --link-external-color external-link">Read</small></a>
                            </div>
                        </div>
                    </div>
                </div>`;
            return articleHTML;
        }


        let html = ''

        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            if('errors' in data){
                html += '<div class="text-red-600 font-semibold text-sm"> Error: ' + data['errors'] + '</div>'
                element.innerHTML = html
            } else {
                for(let i=0; i<count; i++){
                    let article = data['articles'][i]
                    html += formatArticle(article['image'], article['title'], article['publishedAt'], article['source']['name'], article['content'], article['url'])
                }
                element.innerHTML = html
            }
        });
    }
}