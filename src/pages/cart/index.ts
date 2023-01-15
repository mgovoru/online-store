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
class CartPage extends Page {

	constructor(id: string) {
		super(id);
	}

	renderMain() {
		let arrayidCardBuy: number[] = [];
		let arrayLocal = localStorage.getItem('idCardBuy');
		if (arrayLocal != null) {
			arrayidCardBuy = JSON.parse(arrayLocal);
		}
		let arrayidCard: number[] = [];
		this.container.classList.add('main');
		const mainContainer = this.createElementMain('div', 'main__container', this.container);
		const mainCartGrid = this.createElementMain('div', 'main__cart-grid', mainContainer);
		const mainListGrid = this.createElementMain('div', 'main__list-grid', mainCartGrid, 'list-products');
		const mainListHeader = this.createElementMain('div', 'list-products__header', mainListGrid);
		const mainListTitle = this.createElementMain('div', 'list-products__title', mainListHeader);
		mainListTitle.innerHTML = `Products In Cart`;
		const mainProductsItems = this.createElementMain('div', 'list-products__items', mainListHeader);
		mainProductsItems.innerHTML = `items: <span> 1 </span>`;
		const mainProductsPages = this.createElementMain('div', 'list-products__pages', mainListHeader);
		mainProductsPages.innerHTML = `pages: <span> 1 </span>`;
		const mainProductsBody = this.createElementMain('div', 'list-products__body', mainListGrid, 'product-cart');
		for (let i = 0; i < arrayidCardBuy.length; i++) {
			arrayidCard[i] = arrayidCardBuy[i] - 1;
			const mainProductsCardItem = this.createElementMain('div', 'product-cart__item', mainProductsBody);
			const mainProductsCardNumber = this.createElementMain('div', 'product-cart__number', mainProductsCardItem);
			mainProductsCardNumber.innerHTML = `1`;
			const mainProductsCardImage = this.createElementMain('div', 'product-cart__image', mainProductsCardItem, `-ibg`);
			const mainProductsCardImg = this.createElementMain('img', 'product-cart__img', mainProductsCardImage) as HTMLImageElement;
			mainProductsCardImg.src = `${arrayNew[arrayidCard[i]].thumbnail}`;
			const mainProductsCardInfo = this.createElementMain('div', 'product-cart__info', mainProductsCardItem);
			const mainProductsCardTitle = this.createElementMain('div', 'product-cart__title', mainProductsCardInfo);
			mainProductsCardTitle.innerHTML = `${arrayNew[arrayidCard[i]].title}`;
			const mainProductsCardDescription = this.createElementMain('div', 'product-cart__description', mainProductsCardInfo);
			mainProductsCardDescription.innerHTML = `${arrayNew[arrayidCard[i]].description}`;
			const mainProductsCardIAccount = this.createElementMain('div', 'product-cart__account', mainProductsCardItem);
			const mainProductsCardStock = this.createElementMain('div', 'product-cart__stock', mainProductsCardIAccount);
			mainProductsCardStock.innerHTML = `stock: ${arrayNew[arrayidCard[i]].stock} $`;
			const mainProductsCardAmount = this.createElementMain('div', 'product-cart__amount', mainProductsCardIAccount);
			mainProductsCardAmount.innerHTML = `<span>+</span> 3 <span>-</span>`;
			const mainProductsCardPrice = this.createElementMain('div', 'product-cart__price', mainProductsCardIAccount);
			mainProductsCardPrice.innerHTML = `price: <span>${arrayNew[arrayidCard[i]].price} $ </span></div>`;
		}
			const mainProductsCardSummary = this.createElementMain('div', 'main__list-summary', mainCartGrid, 'summary');
			const mainProductsSummaryTitle = this.createElementMain('div', 'summary__title', mainProductsCardSummary) as HTMLElement;
			mainProductsSummaryTitle.innerHTML = 'Products In Cart';
			const mainProductsSummaryItem = this.createElementMain('div', 'summary__item', mainProductsCardSummary) as HTMLElement;
			const mainProductsSummaryProducts = this.createElementMain('div', 'summary__products', mainProductsSummaryItem) as HTMLElement;
			mainProductsSummaryProducts.innerHTML = 'products:<span> 4</span>';
			const mainProductsSummaryTotal = this.createElementMain('div', 'summary__total', mainProductsSummaryItem) as HTMLElement;
			mainProductsSummaryTotal.innerHTML = 'total: <span>€2,546.00</span>';
			const mainProductsSummaryInput = this.createElementMain('input', 'summary__promokod', mainProductsSummaryItem) as HTMLInputElement;
			mainProductsSummaryInput.placeholder = 'enter promokod';
			mainProductsSummaryInput.type = 'text';
			const mainProductsSummaryButton = this.createElementMain('button', 'summary__button', mainProductsSummaryItem, 'button');
			mainProductsSummaryButton.innerHTML = `buy now`;

		
	}
	render() {
		this.renderMain();
		return this.container;
	}
}

export default CartPage;
