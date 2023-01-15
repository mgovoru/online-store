abstract class Page {
	protected container: HTMLElement;

	constructor(id: string) {
		this.container = document.createElement('main');
		this.container.id = id;
	}
	createElementMain(tagName: string, className: string, elementMain: HTMLElement, classNameTwo?: string) {
		let element = document.createElement(tagName);
		element.classList.add(className);
		if (classNameTwo != null) {
			element.classList.add(classNameTwo)
		}
		;
		elementMain.append(element);
		return element;
	}

	render() {
		return this.container;
	}
}

export default Page;
