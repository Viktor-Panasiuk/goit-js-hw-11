import PixabayService from './js/pixabay-service';
import photoCardTpl from './templates/photocard.hbs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


let pixabayServiceObj = null;
let totalShow = 0;

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
    markupReset();

    pixabayServiceObj = new PixabayService(searchText);
    pixabayServiceObj.fetchPhoto()
        .then(response => {
            if (!response.data.hits.length) {
                Notify.failure('Sorry, there are no images matching your search query. Please try again.');
                return;
            }
            Notify.info(`Hooray! We found ${response.data.totalHits} images.`);
            markupRequestPhoto(response.data);
        });
}

function onMoreBtnClick(e) {
    pixabayServiceObj.fetchPhoto()
        .then(response => {
            markupRequestPhoto(response.data);
        });
}

function markupRequestPhoto(data) {
    refs.gallary.insertAdjacentHTML('beforeend', photoCardTpl(data.hits));
    refs.moreBtn.classList.remove("hidden");
    totalShow += data.hits.length;

    console.log('totalHits: ', data.totalHits);
    console.log('totalShow: ', totalShow);

    if (totalShow == data.totalHits) {
        refs.moreBtn.classList.add("hidden");
        Notify.failure("We're sorry, but you've reached the end of search results.");
    }
}

function markupReset() {
    refs.gallary.innerHTML = '';
    refs.moreBtn.classList.add("hidden");
    totalShow = 0;
}