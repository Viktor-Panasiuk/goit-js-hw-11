const axios = require('axios').default;

export default class PixabayService {
    static URL_API = 'https://pixabay.com/api/';
    static KEY_API = '31624230-baee54cc291d6db99c89b80ee';
    
    constructor(query) {
        this.searchQuery = query;
        this.page = 1;
    }

    fetchPhoto() {
        console.log(this.searchQuery, '   ', this.page);

        return fetch(
            `${PixabayService.URL_API}?key=${PixabayService.KEY_API}&q=${this.searchQuery}`
        )
            .then(response => response.json());
       

        this.incrementPage();
    }

    incrementPage() {
        this.page += 1;
    }
}