class NASAImageOfTheDay {
    getImage(element, apiKey) {
        const URL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

        function formatImage(imageUrl, imageTitle, imageCaption){
            let htmlContainer = `
            <div class="px-4 py-2">
                <div class="tailwind block p-2 border border-transparent rounded">
                    <img src="${imageUrl}" width="100%" style="display: block; margin-left: auto; margin-right: auto;" />
                    <div class="text-xl font-bold --h3-color mt-1">${imageTitle}</div>
                    <p class="text-sm --text-faint">${imageCaption}</p>
                </div>
            </div>
            `
            return htmlContainer
        }


        fetch(URL).then(function (response) {
            return response.json();
        }).then(function (data) {
            element.innerHTML = formatImage(data.url, data.title, data.explanation);
        });

    }
}