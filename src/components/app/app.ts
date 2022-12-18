import AppController from '../controller/controller';
import { AppView } from '../view/appView';
// import { INews, ISource } from 'src/interfaces';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    async start() {
        //TODO: define a route
        //TODO: render page
        //TODO: add event listeners
    }
}

export default App;
