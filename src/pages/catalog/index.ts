import Page from '../../core/templates/pages';

class CatalogPage extends Page {

    constructor(id: string) {
        super(id);
    }

    createElementMain(tagName: string, className: string, elementMain: HTMLElement, classNameTwo?: string) {
        let element = document.createElement(tagName);
        element.classList.add(className);
        if (classNameTwo != null) {
            element.classList.add(classNameTwo);
        }

        elementMain.append(element);
        return element;
    }

    renderMain() {
        this.container.classList.add('main');
        const mainContainer = this.createElementMain('div', 'main__container', this.container);
        const mainMenu = this.createElementMain('div', 'main__menu', mainContainer, 'menu');
        const menuItems = this.createElementMain('ul', 'menu__items', mainMenu);
        const menuItem = this.createElementMain('li', 'menu__item', menuItems);
        menuItem.innerHTML = 'Product Details Page';
    }

    render() {
        this.renderMain();
        return this.container;
    }
}

export default CatalogPage;
