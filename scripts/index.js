const btnOpenPopupForm = document.querySelector('#add');
const formAddCat = document.querySelector('#popup-form-cat');
const sectionCard = document.querySelector('.cards');

const popupAddCat = new Popup("popup-add-cats");
popupAddCat.setEventListeer();


cats.forEach(catData => {
    console.log(catData, '#card-template')
    const firstCat = cat.getElement()
    sectionCard.append(firstCat);
})

function handleFormAddCat(e) {
    e.preventDefault()

    popupAddCat.close();
}

btnOpenPopupForm.addEventListener('click', () => popupAddCat.open());
formAddCat.addEventListener('submit', handleFormAddCat);