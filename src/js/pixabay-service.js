const     axios = require('axios').default;

export default class PixabayService {

    static URL_API = 'https://pixabay.com/api/';
    static KEY_API = '31624230-baee54cc291d6db99c89b80ee';
    
    constructor(query) {
        this.searchQuery = query;
        this.page = 1;
    }

    fetchPhoto() {
        const result = axios.get(
            PixabayService.URL_API,
            {
                params: {
                    key: PixabayService.KEY_API,
                    q: this.searchQuery,
                    image_type: 'photo',
                    orientation: 'horizontal',
                    safesearch: 'true',
                    page: this.page,
                    per_page: 10,
                }
            });
        this.incrementPage();
        return result;
    }

    incrementPage() {
        this.page += 1;
    }
}