import Page from '../../core/templates/pages';
import data from '../../assets/data/products.json';
import { Gadgets } from "../../types";
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
class CatalogPage extends Page {

    constructor(id: string) {
        super(id);
    }

    renderMain() {
        let idCard: number;
        if (localStorage.getItem('id')) {
            idCard = Number(localStorage.getItem('id')) - 1;

            this.container.classList.add('main');
            const mainContainer = this.createElementMain('div', 'main__container', this.container);
            const mainMenu = this.createElementMain('div', 'main__menu', mainContainer, 'menu');
            const menuItems = this.createElementMain('ul', 'menu__items', mainMenu);
            const menuItem = this.createElementMain('li', 'menu__item', menuItems);
            menuItem.innerHTML = `<a href = '/' alt =''>STORE</a>`;
            const menuItemOne = this.createElementMain('li', 'menu__item', menuItems);
            menuItemOne.innerHTML = `${arrayNew[idCard].category}`;
            const menuItemTwo = this.createElementMain('li', 'menu__item', menuItems);
            menuItemTwo.innerHTML = `${arrayNew[idCard].brand}`;
            const menuItemTree = this.createElementMain('li', 'menu__item', menuItems);
            menuItemTree.innerHTML = `${arrayNew[idCard].title}`;
            const mainCardInfo = this.createElementMain('div', 'main__card-info', mainContainer, 'card-info');
            const cardInfoHeader = this.createElementMain('div', 'card-info__header', mainCardInfo);
            cardInfoHeader.innerHTML = `${arrayNew[idCard].title}`;
            const cardInfoContent = this.createElementMain('div', 'card-info__content', mainCardInfo);
            const cardInfoImages = this.createElementMain('div', 'card-info__images', cardInfoContent);
            const cardImageOne = this.createElementMain('img', 'card-info__img', cardInfoImages) as HTMLImageElement;
            cardImageOne.src = `${arrayNew[idCard].images[0]}`;
            const cardImageTwo = this.createElementMain('img', 'card-info__img', cardInfoImages) as HTMLImageElement;
            cardImageTwo.src = `${arrayNew[idCard].images[1]}`;
            const cardImageTree = this.createElementMain('img', 'card-info__img', cardInfoImages) as HTMLImageElement;
            cardImageTree.src = `${arrayNew[idCard].images[2]}`;
            const cardImageFour = this.createElementMain('img', 'card-info__img', cardInfoImages) as HTMLImageElement;
            cardImageFour.src = `${arrayNew[idCard].images[3]}`;
            const cardImageBig = this.createElementMain('div', 'card-info__image', cardInfoContent);
            const cardImgBig = this.createElementMain('img', 'card-info__img-big', cardImageBig) as HTMLImageElement;
            cardImgBig.src = `${arrayNew[idCard].thumbnail}`;
            const cardInfoBlock = this.createElementMain('div', 'card-info__block', cardInfoContent);
            const cardInfoDescription = this.createElementMain('div', 'card-info__description', cardInfoBlock);
            const cardInfoTitle = this.createElementMain('p', 'card-info__title', cardInfoDescription);
            const cardInfoSubTitle = this.createElementMain('p', 'card-info__sub-title', cardInfoDescription);
            cardInfoTitle.innerHTML = `Description:`;
            cardInfoSubTitle.innerHTML = `${arrayNew[idCard].description}`;
            const cardInfoDiscount = this.createElementMain('div', 'card-info__discount', cardInfoBlock);
            const cardDiscountTitle = this.createElementMain('p', 'card-info__title', cardInfoDiscount);
            const cardDiscountSubTitle = this.createElementMain('p', 'card-info__sub-title', cardInfoDiscount);
            cardDiscountTitle.innerHTML = `Discount Percentage:`;
            cardDiscountSubTitle.innerHTML = `${arrayNew[idCard].discountPercentage}`;
            const cardInfoRating = this.createElementMain('div', 'card-info__rating', cardInfoBlock);
            const cardRatingTitle = this.createElementMain('p', 'card-info__title', cardInfoRating);
            const cardRatingSubTitle = this.createElementMain('p', 'card-info__sub-title', cardInfoRating);
            cardRatingTitle.innerHTML = `Rating:`;
            cardRatingSubTitle.innerHTML = `${arrayNew[idCard].rating}`;
            const cardInfoStock = this.createElementMain('div', 'card-info__stock', cardInfoBlock);
            const cardStockTitle = this.createElementMain('p', 'card-info__title', cardInfoStock);
            const cardStockSubTitle = this.createElementMain('p', 'card-info__sub-title', cardInfoStock);
            cardStockTitle.innerHTML = `Stock:`;
            cardStockSubTitle.innerHTML = `${arrayNew[idCard].stock}`;
            const cardInfoBrand = this.createElementMain('div', 'card-info__stock', cardInfoBlock);
            const cardBrandTitle = this.createElementMain('p', 'card-info__title', cardInfoBrand);
            const cardBrandSubTitle = this.createElementMain('p', 'card-info__sub-title', cardInfoBrand);
            cardBrandTitle.innerHTML = `Brand:`;
            cardBrandSubTitle.innerHTML = `${arrayNew[idCard].brand}`;
            const cardInfoCategory = this.createElementMain('div', 'card-info__stock', cardInfoBlock);
            const cardCategoryTitle = this.createElementMain('p', 'card-info__title', cardInfoBrand);
            const cardCategorySubTitle = this.createElementMain('p', 'card-info__sub-title', cardInfoCategory);
            cardCategoryTitle.innerHTML = `Category:`;
            cardCategorySubTitle.innerHTML = `${arrayNew[idCard].category}`;
            const cardInfoCart = this.createElementMain('div', 'card-info__cart', cardInfoContent);
            const cardInfoPrice = this.createElementMain('div', 'card-info__price', cardInfoCart);
            cardInfoPrice.innerHTML = `${arrayNew[idCard].price}$`;
            const cardInfoDrop = this.createElementMain('button', 'card-info__drop', cardInfoCart, 'button');
            cardInfoDrop.innerHTML = `drop from cart`;
            const cardInfoBuy = this.createElementMain('button', 'card-info__buy', cardInfoCart, 'button');
            cardInfoBuy.innerHTML = `buy now`;
          
        }
    }

    render() {
        this.renderMain();
        return this.container;
    }
}

export default CatalogPage;
