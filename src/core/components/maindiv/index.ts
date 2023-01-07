import Component from '../../templates/components';

class Main extends Component {
	constructor(tagName: string, className: string) {
		super(tagName, className);
	}

	renderHeader() {
		const mainElement = document.createElement('main');
		mainElement.classList.add('main');
		this.container.append(mainElement);
	}

	render() {
		this.renderHeader();
		return this.container;
	}
}

export default Main;

