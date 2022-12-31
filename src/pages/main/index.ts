import Page from '../../core/templates/pages';

class MainPage extends Page {

	constructor(id: string) {
		super(id);
	}
	createElement(tagName: string, className: string, elementMain: HTMLElement, classNameTwo?: string) {
		let element = document.createElement(tagName);
		element.classList.add(className);
		if (classNameTwo != null) { element.classList.add(classNameTwo) };
		elementMain.append(element);
		return element;
	 }
	renderMain() {
		this.container.classList.add('main');
		const mainContainer = this.createElement('div', 'main__container', this.container);
		const mainGrid = this.createElement('div', 'main__grid', mainContainer, 'grid');
		const gridFilters = this.createElement('div', 'grid__filters', mainGrid, 'filters');
		const filtersCategories = this.createElement('div', 'filters__categories', gridFilters, 'categories');
		const categoriesTitle = this.createElement('button', 'categories__reset', filtersCategories, 'button');
		if (categoriesTitle != null) { categoriesTitle.innerText = 'Reset Filters'; }
	}
	render() {

		this.renderMain();
		return this.container;
	}
}

export default MainPage;