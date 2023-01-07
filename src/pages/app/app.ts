import Header from '../../core/components/header/index';
import Footer from '../../core/components/footer/index';
import Main from '../../core/components/maindiv/index';
import Page from '../../core/templates/pages';
import MainPage from '../main/index';
import CatalogPage from '../catalog/index';
import ErrorPage, { ErrorTypes } from '../error/index';

export const enum PageIds {
    MainPage = 'main-page',
    CatalogPage = 'catalog-page',
    CartPage = 'cart-page',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId: string = 'current-page';
    private header: Header;
    private footer: Footer;
    private main: Main;
    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        console.log(currentPageHTML);
        if (currentPageHTML) {
            console.log('yes');
            currentPageHTML.remove();
            console.log(document.querySelector(`#${App.defaultPageId}`));
        }
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        }
        else if (idPage === PageIds.CatalogPage) {
            page = new CatalogPage(idPage);
            console.log(document.querySelector(`#${App.defaultPageId}`));
            console.log(page);
            //  } else if (idPage === PageIds.StatisticsPage) {
            //      page = new CartPage(idPage);
        }
        else {
            page = new ErrorPage(idPage, ErrorTypes.Error_404);
        }

        const pageHTML = page.render();
        pageHTML.id = App.defaultPageId;
        App.container.append(pageHTML);
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.header = new Header('header', 'header');
        this.main = new Main('main', 'main');
        this.footer = new Footer('footer', 'footer');
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('main-page');
        this.enableRouteChange();
        App.container.append(this.footer.render());
    }
}

// Main, Settings, Statistics

export default App;