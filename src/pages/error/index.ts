import Page from '../../core/templates/pages';

export const enum ErrorTypes {
    Error_404 = 404,
}

class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    static TextObject: { [prop: string]: string } = {
        '404': 'Error! The page was not found  :('
    };

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    }

    renderMain() {
        this.container.classList.add('main');
        const mainContainer = this.createElementMain('div', 'main__container', this.container);
        const mainGrid = this.createElementMain('h1', 'main__empty-page', mainContainer);
        mainGrid.innerHTML = ErrorPage.TextObject[this.errorType];
    }
    render() {
        this.renderMain();
        return this.container;
    }
}

export default ErrorPage;
