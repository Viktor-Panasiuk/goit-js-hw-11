import PixabayService from './js/pixabay-service';

let pixabayServiceObj = null;

const refs = {
    form: document.querySelector('.search__form'),
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

    // fetch(
    //     `${URL_API}?key=${KEY_API}&q=${searchText}`
    // )
    //     .then(response => response.json())
    //     .then(result => console.log(result.hits))
    //     .catch(error => console.dir(error.message))

    pixabayServiceObj = new PixabayService(searchText);

    pixabayServiceObj.fetchPhoto()
         .then(result => console.log(result.hits))
            .catch(error => console.dir(error.message))
}

function onMoreBtnClick(e) {
    pixabayServiceObj.fetchPhoto();
}