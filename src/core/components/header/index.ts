import Component from '../../templates/components';

class Header extends Component {
	constructor(tagName: string, className: string) {
		super(tagName, className);
	}

	renderHeader() {
		const headerContainer = document.createElement('div');
		const headerLogo = document.createElement('div');
		const headerTotal = document.createElement('div');
		const headerCard = document.createElement('div');
		headerContainer.classList.add('header__container');
		headerLogo.classList.add('header__logo');
		headerTotal.classList.add('header__total');
		headerCard.classList.add('header__card');
		const headerImage = document.createElement('div');
		const headerImg = document.createElement('img') as HTMLImageElement;
		const headerTitle = document.createElement('h1');
		const headerCardImg = document.createElement('img') as HTMLImageElement;
		headerImage.classList.add('header__image');
		if (headerImg != null) { headerImg.src = require('../../../assets/images/logo.png'); }
		headerImg.classList.add('header__img');
		headerTitle.classList.add('header__title');
		if (headerTitle != null) {
			const logoLink = document.createElement('a');
			logoLink.href = '/';
			logoLink.title = 'Online Store homePage';
			logoLink.innerText = 'Online Store';
			headerTitle.append(logoLink);
		}
		if (headerTotal != null) { headerTotal.innerText = 'Cart total: €1,647.00'; } 
		if (headerCardImg != null) { headerCardImg.src = require('../../../assets/images/cart.png'); }
		headerContainer.append(headerLogo);
		headerContainer.append(headerTotal);
		headerContainer.append(headerCard);
		headerLogo.append(headerImage);
		headerImage.append(headerImg);
		headerLogo.append(headerTitle);
		headerCard.append(headerCardImg);
		this.container.append(headerContainer);
	}

	render() {
		this.renderHeader();
		return this.container;
	}
}

export default Header;
