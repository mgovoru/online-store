import Page from '../../core/templates/pages';
import data from '../../assets/data/products.json';
import listCategories from '../../assets/data/categories.json';
import listBrends from '../../assets/data/brends.json';
import {Gadgets} from "../../types";

const SortIds: string[] = ['sort options',
    'sort by price ASC', 'sort by price DESC', 'sort by rating ASC', 'sort by rating DESC', 'sort by discount ASC', 'sort by discount DESC']
const converted: Array<Gadgets> = data.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
    discountPercentage: item.discountPercentage,
    rating: item.rating,
    stock: item.stock,
    brand: item.brand,
    category: item.category,
    thumbnail: item.thumbnail,
    images: [item.images[0], item.images[2], item.images[3], item.images[4], item.images[4]],
}));

let arrayNew: Gadgets[] = [];
arrayNew = converted;


class MainPage extends Page {

    constructor(id: string) {
        super(id);
    }

    createElementMain(tagName: string, className: string, elementMain: HTMLElement, classNameTwo?: string) {
        let element = document.createElement(tagName);
        element.classList.add(className);
        if (classNameTwo != null) {
            element.classList.add(classNameTwo)
        }
        ;
        elementMain.append(element);
        return element;
    }


    renderMain() {
        //динамически добавляются элементы на страницу main
        this.container.classList.add('main');
        const mainContainer = this.createElementMain('div', 'main__container', this.container);
        const mainGrid = this.createElementMain('div', 'main__grid', mainContainer, 'grid');
        const gridFilters = this.createElementMain('div', 'grid__filters', mainGrid, 'filters');
        //сортировка по категориям
        const categories = this.createElementMain('div', 'filters__categories', gridFilters, 'categories');
        const categoriesTitle = this.createElementMain('div', 'categories__title', categories);
        const categoriesReset = this.createElementMain('button', 'categories__reset', categoriesTitle, 'button');
        const categoriesCopy = this.createElementMain('button', 'categories__copylink', categoriesTitle, 'button');
        if (categoriesReset != null) {
            categoriesReset.innerText = 'Reset Filters';
        }
        if (categoriesCopy != null) {
            categoriesCopy.innerText = 'Copy Link';
        }
        const categoriesForm = this.createElementMain('form', 'categories__form', categories) as HTMLFormElement;
        const categoriesInfo = this.createElementMain('section', 'categories__info', categoriesForm);
        const categoriesSubTitle = this.createElementMain('h2', 'categories__sub-title', categoriesInfo);
        if (categoriesInfo != null) {
            categoriesSubTitle.innerText = 'Category';
        }
        const categoriesItems = this.createElementMain('div', 'categories__items', categoriesInfo);
        for (let i = 0; i < listCategories.length; i++) {
            const categoriesItem = this.createElementMain('div', 'categories__item', categoriesItems);
            const categoriesInput = this.createElementMain('input', 'categories__input', categoriesItem) as HTMLInputElement;
            categoriesInput.type = "checkbox";
            categoriesInput.name = "category";
            categoriesInput.value = `${listCategories[i]}`;
            categoriesInput.id = `${listCategories[i]}`;
            const categoriesLabel = this.createElementMain('label', 'categories__label', categoriesItem) as HTMLLabelElement;
            categoriesLabel.htmlFor = `${listCategories[i]}`;
            categoriesLabel.innerHTML =
                `${listCategories[i]}`;
            const categoriesQuantity = this.createElementMain('span', 'categories__quantity', categoriesItem, 'quantity-smartphones') as HTMLElement;
            categoriesQuantity.innerHTML = `${arrayNew.filter(item => (item.category == (categoriesInput.value))).length}`;
        }
        //сортировка по брендам
        const brandsSection = this.createElementMain('section', 'categories__brand', categoriesForm, 'brand');
        const brandsSubTitle = this.createElementMain('h2', 'brand__sub-title', brandsSection);
        if (brandsSection != null) {
            brandsSubTitle.innerText = 'Brand';
        }
        const brandsItems = this.createElementMain('div', 'brand__items', brandsSection);
        for (let i = 0; i < listBrends.length; i++) {
            const brandsItem = this.createElementMain('div', 'brand__item', brandsItems);
            const brandsInput = this.createElementMain('input', 'brand__input', brandsItem) as HTMLInputElement;
            brandsInput.type = "checkbox";
            brandsInput.name = "brands";
            brandsInput.value = `${listBrends[i]}`;
            brandsInput.id = `${listBrends[i]}`;
            const brandsLabel = this.createElementMain('label', 'brand__label', brandsItem) as HTMLLabelElement;
            brandsLabel.htmlFor = `${listBrends[i]}`;
            brandsLabel.innerHTML =
                `${listBrends[i]}`;
            const brandsQuantity = this.createElementMain('span', 'brand__quantity', brandsItem, 'quantity-smartphones');

        }
        //сортировка по цене
        const categoriesPrice = this.createElementMain('section', 'categories__price', categoriesForm, 'price');
        const priceSubTitle = this.createElementMain('h2', 'price__sub-title', categoriesPrice);
        if (categoriesPrice != null) {
            priceSubTitle.innerText = 'Price';
        }
        const priceItem = this.createElementMain('div', 'price__item', categoriesPrice);
        const priceValues = this.createElementMain('div', 'price__values', priceItem);
        const priceRangeOne = this.createElementMain('span', 'price__range1', priceValues);
        priceRangeOne.id = "range1";
        priceRangeOne.innerHTML = "10";
        const priceRangeZero = this.createElementMain('span', 'price__range0', priceValues);
        priceRangeZero.innerHTML = "";
        const priceRangeTwo = this.createElementMain('span', 'price__range2', priceValues);
        priceRangeTwo.id = "range2";
        priceRangeZero.innerHTML = "1949";
        const priceChoice = this.createElementMain('div', 'price__choice-price', priceItem);
        const priceTrack = this.createElementMain('span', 'price__track', priceChoice);
        priceRangeOne.id = "range1";
        priceRangeOne.innerHTML = "10";
        const priceInput = this.createElementMain('input', 'price__range', priceChoice) as HTMLInputElement;
        priceInput.type = "range";
        priceInput.min = "10";
        priceInput.max = "1749";
        priceInput.value = "10";
        priceInput.id = "slider1";
        const priceInputOne = this.createElementMain('input', 'price__range', priceChoice) as HTMLInputElement;
        priceInputOne.type = "range";
        priceInputOne.min = "10";
        priceInputOne.max = "1749";
        priceInputOne.value = "10";
        priceInputOne.id = "slider2";
        // сортировка по стоку
        const categoriesStock = this.createElementMain('section', 'categories__stock', categoriesForm, 'stock');
        const stockSubTitle = this.createElementMain('h2', 'stock__sub-title', categoriesStock);
        if (categoriesStock != null) {
            stockSubTitle.innerText = 'Stock';
        }
        const stockItem = this.createElementMain('div', 'stock__item', categoriesStock);
        const stockValues = this.createElementMain('div', 'stock__values', stockItem);
        const stockRangeOne = this.createElementMain('span', 'stock__range1', stockValues);
        stockRangeOne.id = "range1";
        stockRangeOne.innerHTML = "10";
        const stockRangeZero = this.createElementMain('span', 'stock__range0', stockValues);
        stockRangeZero.innerHTML = "";
        const stockRangeTwo = this.createElementMain('span', 'stock__range2', stockValues);
        stockRangeTwo.id = "range2";
        stockRangeZero.innerHTML = "1949";
        const stockChoice = this.createElementMain('div', 'stock__choice-price', stockItem);
        const stockTrack = this.createElementMain('span', 'stock__track', stockChoice);
        stockRangeOne.id = "range1";
        stockRangeOne.innerHTML = "10";
        const stockInput = this.createElementMain('input', 'stock__range', stockChoice) as HTMLInputElement;
        stockInput.type = "range";
        stockInput.min = "10";
        stockInput.max = "1749";
        stockInput.value = "10";
        stockInput.id = "slider1";
        const stockInputOne = this.createElementMain('input', 'price__range', stockChoice) as HTMLInputElement;
        stockInputOne.type = "range";
        stockInputOne.min = "10";
        priceInputOne.max = "1749";
        priceInputOne.value = "10";
        priceInputOne.id = "slider2";
        const gridCards = this.createElementMain('div', 'grid__cards', mainGrid, 'cards');
        const cardsHeader = this.createElementMain('div', 'cards__header', gridCards);
        const cardsSorting = this.createElementMain('div', 'cards__sorting', cardsHeader);
        const cardsSort = this.createElementMain('select', 'cards__sort', cardsSorting) as HTMLSelectElement;
        cardsSort.size = 1;
        cardsSort.name = 'sort';
        let optionArray: HTMLOptionElement[] = [];
        for (let i = 0; i < 6; i++) {
            const optionSort = this.createElementMain('option', 'option__sort', cardsSort) as HTMLOptionElement;
            optionSort.innerHTML = SortIds[i];
            optionSort.value = `sort${i}`;
            optionArray[i] = optionSort;
        }
        // сортировка и поиск
        const cardsFound = this.createElementMain('div', 'cards__found', cardsHeader);
        cardsFound.innerHTML = 'found:';
        const cardsSeach = this.createElementMain('div', 'cards__seach', cardsHeader);
        const cardsSeachInput = this.createElementMain('input', 'cards__input', cardsSeach) as HTMLInputElement;
        cardsSeachInput.type = 'text';
        cardsSeachInput.placeholder = 'seach product';
        const cardsDisplay = this.createElementMain('div', 'cards__display', cardsHeader);
        const cardsLarge = this.createElementMain('div', 'cards__large', cardsDisplay);
        const cardsSmall = this.createElementMain('div', 'cards__small', cardsDisplay);
        const cardsBody = this.createElementMain('div', 'cards__body', gridCards);
        const cardsItems = this.createElementMain('div', 'cards__items', cardsBody) as HTMLElement;

        cardsAdd(arrayNew.length, arrayNew);

        // функция, в которую передаются массив, по которому строятся карточки
        function cardsAdd(numberCards: number, arrayNew: Gadgets[]): void {
            cardsItems.innerHTML = '';
            for (let i = 0; i < numberCards; i++) {
                const cardsItem = document.createElement('a') as HTMLAnchorElement;
                cardsItem.href = '#catalog-page';
                cardsItem.classList.add('cards__item');
                cardsItem.classList.add('card');
                cardsItems.append(cardsItem);
                const cardImage = document.createElement('div');
                cardImage.classList.add('card__image');
                cardImage.classList.add('-ibg');
                cardsItem.append(cardImage);
                const cardImg = document.createElement('img') as HTMLImageElement;
                cardImg.classList.add('card__img');
                cardImage.append(cardImg);
                cardImg.loading = "lazy";
                cardImg.src = `${arrayNew[i].thumbnail}`;
                const cardInfo = document.createElement('div');
                cardInfo.classList.add('card__info');
                cardsItem.append(cardInfo);
                const cardTitle = document.createElement('div');
                cardTitle.classList.add('card__title');
                cardInfo.append(cardTitle);
                cardTitle.innerHTML = `${arrayNew[i].title}`;
                const cardCategory = document.createElement('div');
                cardCategory.classList.add('card__category');
                cardInfo.append(cardCategory);
                cardCategory.innerHTML = `category:\n${arrayNew[i].category}`;
                const cardBrand = document.createElement('div');
                cardBrand.classList.add('card__brand');
                cardInfo.append(cardBrand);
                cardBrand.innerHTML = `brand:\n${arrayNew[i].brand}`;
                const cardPrice = document.createElement('div');
                cardPrice.classList.add('card__price');
                cardInfo.append(cardPrice);
                cardPrice.innerHTML = `price:\n${arrayNew[i].price}$`;
                const cardDiscount = document.createElement('div');
                cardDiscount.classList.add('card__discount');
                cardInfo.append(cardDiscount);
                cardDiscount.innerHTML = `discount:\n${arrayNew[i].discountPercentage}$`;
                const cardRating = document.createElement('div');
                cardRating.classList.add('card__rating');
                cardInfo.append(cardRating);
                cardRating.innerHTML = `rating:\n${arrayNew[i].rating}$`;
                const cardStock = document.createElement('div');
                cardStock.classList.add('card__stock');
                cardInfo.append(cardStock);
                cardStock.innerHTML = `stock:\n${arrayNew[i].stock}$`;
                const cardBuy = document.createElement('div');
                cardBuy.classList.add('card__buy');
                cardsItem.append(cardBuy);
                const cardAdd = document.createElement('div');
                cardAdd.classList.add('card__add');
                cardAdd.classList.add('button');
                cardBuy.append(cardAdd);
                cardAdd.innerHTML = `add to cart`;
                const cardDetail = document.createElement('div');
                cardDetail.classList.add('card__detail');
                cardDetail.classList.add('button');
                cardBuy.append(cardDetail);
                cardDetail.innerHTML = `details`;
            }
        }

        // работа со строкой url c params, удалось в строку передать значения, но надо считывать при перезагрузке, с этим буду разбираться. Пока, чтобы обновить строку надо снова запускать startю И с самим алгоритмом проблемы, надо подумать. Пробный вариант.
        let url = new URL(window.location.href);
        let params = new URLSearchParams(url.search);
        let arrayFilters: Array<Gadgets> = [];
        let arrayParamsCategory: Array<string> = [];
        let arrayParamsBrand: Array<string> = [];
        let arrayFiltersBrand: Array<Gadgets> = [];
        categoriesForm.addEventListener('change', (e) => {
                arrayFilters.length = 0;
                arrayFiltersBrand.length = 0;
                if ((e.target as HTMLInputElement).checked != true) {
                    const values = params.getAll((e.target as HTMLInputElement).name);
                    if (values.length) {
                        params.delete((e.target as HTMLInputElement).name);
                        for (const value of values) {
                            if (value !== (e.target as HTMLInputElement).value) {
                                params.append((e.target as HTMLInputElement).name, (e.target as HTMLInputElement).value);
                            }
                        }
                    }
                } else {
                    params.append((e.target as HTMLInputElement).name, (e.target as HTMLInputElement).value);
                }
                window.history.pushState({}, '', `${url}?${params.toString()}`);


                arrayParamsCategory = params.getAll('category');
                arrayParamsBrand = params.getAll('brands');

                if (arrayParamsCategory.length != 0) {
                    for (let i = 0; i <= arrayParamsCategory.length; i++) {
                        arrayFilters = arrayFilters.concat(arrayNew.filter(item => item.category == arrayParamsCategory[i]));
                    }
                } else arrayFilters = arrayNew;

                if (arrayParamsBrand.length != 0) {
                    for (let i = 0; i <= arrayParamsBrand.length; i++)
                        arrayFiltersBrand = arrayFiltersBrand.concat(arrayFilters.filter(item => item.brand == arrayParamsBrand[i]));
                } else {
                    arrayFiltersBrand = arrayFilters;
                }
                // выводимые количества должны пересчитываться, надо еще подумать.
                if ((e.target as HTMLInputElement).name == 'category') {
                    const arrayFiltersLength = arrayNew.filter(item => (item.category == (e.target as HTMLInputElement).value));
                    ((e.target as HTMLInputElement).parentNode?.lastChild as HTMLElement).innerHTML = `${arrayFiltersLength.length} / ${arrayFiltersLength.length}`;
                }
                if ((e.target as HTMLInputElement).name == 'brands') {
                    const arrayFiltersLength = arrayNew.filter(item => (item.brand == (e.target as HTMLInputElement).value));
                    ((e.target as HTMLInputElement).parentNode?.lastChild as HTMLElement).innerHTML = `${arrayFiltersLength.length} / ${arrayFiltersLength.length}`;
                }

                cardsAdd(arrayFiltersBrand.length, arrayFiltersBrand);
            }
        )
    }

    render() {
        this.renderMain();
        return this.container;
    }
}

export default MainPage;
