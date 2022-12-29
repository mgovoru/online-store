// import AppController from '../controller/controller';
// import { AppView } from '../view/appView';
// // import { INews, ISource } from 'src/interfaces';

// class App {
//     private controller: AppController;
//     private view: AppView;

//     constructor() {
//         this.controller = new AppController();
//         this.view = new AppView();
//     }

//     async start() {
//         //TODO: define a route
//         //TODO: render page
//         //TODO: add event listeners
//     }
// }

// export default App;
import Header from '../header/index';
import Footer from '../footer/index';
import MainPage from '../../modules/main';
import Page from '../../components/templates/pages';


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
     static renderNewPage(idPage: string) {
        // const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        // if (currentPageHTML) {
        //     currentPageHTML.remove();
        //  }
         let page: Page | null = null;

         if (idPage === PageIds.MainPage) {
             page = new MainPage(idPage);
         }
        //  } else if (idPage === PageIds.SettingsPage) {
        //      page = new CatalogPagePage(idPage);
        //  } else if (idPage === PageIds.StatisticsPage) {
        //      page = new CartPage(idPage);
        //  } else {
        //      page = new ErrorPage(idPage, ErrorTypes.Error_404);
        //  }

         if (page) {
             const pageHTML = page.render();
             pageHTML.id = App.defaultPageId;
             App.container.append(pageHTML);
         }
     }

    // private enableRouteChange() {
    //     window.addEventListener('hashchange', () => {
    //         const hash = window.location.hash.slice(1);
    //         App.renderNewPage(hash);
    //     });
    // }

    constructor() {
        this.header = new Header('header', 'header');
        this.footer = new Footer('footer', 'footer');
    }

    run() {
        App.container.append(this.header.render());
         App.renderNewPage('main-page');
        // this.enableRouteChange();
        App.container.append(this.footer.render());
    }
}

// Main, Settings, Statistics

export default App;