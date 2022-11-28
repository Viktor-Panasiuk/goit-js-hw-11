import PixabayService from './js/pixabay-service';
import photoCardTpl from './templates/photocard.hbs';


let pixabayServiceObj = null;

const refs = {
    form: document.querySelector('.search__form'),
    gallary: document.querySelector('.gallery'),
    moreBtn: document.querySelector('.load-more'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.moreBtn.addEventListener('click', onMoreBtnClick);


function onFormSubmit(e) {
    e.preventDefault();
    const searchText = e.target.elements.searchQuery.value;

    // const option = {
    //     key: KEY_API,
    //     method: 'GET',
    //     lang: 'en',
    //     q: searchText,
    //     image_type: 'photo',
    //     orientation: 'horizontal',
    //     per_page: 20,
    // }

    pixabayServiceObj = new PixabayService(searchText);

    pixabayServiceObj.fetchPhoto()
        .then(response => {
        
            console.log(response);
            const result = response.data;
            console.log(result.total);
            console.log(result.totalHits);
            console.log(result.hits);
            markupRequestPhoto(result.hits);

         })
            .catch(error => console.log(error.message))
}

function onMoreBtnClick(e) {
    pixabayServiceObj.fetchPhoto();
}

function markupRequestPhoto(photos) {
    refs.gallary.insertAdjacentHTML('beforeend', photoCardTpl({photos}))
}