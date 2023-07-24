let apikey = 'd8e2a4ec029081d83c615baef8b8d83c';
let category = 'technology';
let count = '6'
let url = 'https://gnews.io/api/v4/search?q=' + category + '&token=' + apikey + '&lang=en&country=us&max=' + count;

fetch(url)
  .then(function (response) {
    return response.json();
  })
.then(function (data) {
	for(let i=0; i<count; i++){
		let article = data['articles'][i]
		dv.el('div',
			`<div class="py-2 mt-4">
				<div class='tailwind block max-w-sm p-4 bg-white border border-gray-200 rounded'>
					<div class="flex">
						<img class="rounded-md py-2" src="${article['image']}" width="128">
					<div>
					<div class="text-xl font-bold text-gray-800 pl-4">${article['title']}</div>
					<div class="flex justify-between">
						<small class="float-right text-gray-600 font-semibold text-sm pl-4">${article['publishedAt']}</small>
						<small class="float-right text-gray-600 font-semibold text-sm pl-4">${article['source']['name']}</small>
					</div>
					<div class="text-gray-600 pl-4">
						${article['content']}
					</div>
					<a href="${article['url']}"><small class="text-blue-600 font-semibold text-sm pl-4">Read →</small></a>
				</div>
		</div>
		</div></div>`
		)
	}
  });