const URL_API = 'https://pixabay.com/api/';
const KEY_API = '31624230-baee54cc291d6db99c89b80ee';

export default class PixabayService {
    constructor(query) {
        this.searchQuery = query;
        this.page = 1;
    }

    fetchPhoto() {
        console.log(this.searchQuery);
    }

    incrementPage() {
        this.page += 1;
    }
}