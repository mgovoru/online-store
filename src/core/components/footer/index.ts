import Component from '../../templates/components';

class Footer extends Component {
	constructor(tagName: string, className: string) {
		super(tagName, className);
	}

	renderFooter() {
		const footerContainer = document.createElement('div');
		const footerCopy = document.createElement('span');
		const footerGithubOne = document.createElement('a');
		const footerGithubTwo = document.createElement('a');
		const footerGithubThree = document.createElement('a');
		const footerDate = document.createElement('span');
		footerContainer.classList.add('footer__container');
		footerCopy.classList.add('copyright');
		footerGithubOne.classList.add('github');
		footerGithubTwo.classList.add('github');
		footerGithubThree.classList.add('github');
		footerDate.classList.add('date');
		const footerImgOne = document.createElement('img') as HTMLImageElement;
		const footerImgTwo = document.createElement('img') as HTMLImageElement;
		const footerImgThree = document.createElement('img') as HTMLImageElement;
		if (footerGithubOne != null) { footerGithubOne.href = 'https://rs.school/js/'; }
		if (footerGithubTwo != null) { footerGithubTwo.href = 'https://github.com/mgovoru'; }
		if (footerGithubThree != null) { footerGithubThree.href = 'https://github.com/MarkKulUa'; }
		if (footerImgOne != null) {
			footerImgOne.width = 70;
			footerImgOne.height = 30;
			footerImgOne.src = require('../../../assets/images/rs_school_js.svg');
		}
		if (footerImgTwo != null) {
			footerImgTwo.width = 30;
			footerImgTwo.height = 30;
			footerImgTwo.src = require('../../../assets/images/github.svg');
		}
		if (footerImgThree != null) {
			footerImgThree.width = 30;
			footerImgThree.height = 30;
			footerImgThree.src = require('../../../assets/images/github.svg');
		}
		if (footerCopy != null) { footerCopy.innerText = 'Copyright'; }
		if (footerDate != null) {
			const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			const dt = new Date();
			footerDate.innerText = `${month[dt.getMonth()]} ${dt.getFullYear()}`;
		}
		footerContainer.append(footerCopy);
		footerContainer.append(footerGithubOne);
		footerContainer.append(footerGithubTwo);
		footerContainer.append(footerGithubThree);
		footerContainer.append(footerDate);
		footerGithubOne.append(footerImgOne);
		footerGithubTwo.append(footerImgTwo);
		footerGithubThree.append(footerImgThree);
		this.container.append(footerContainer);
	}

	render() {
		this.renderFooter();
		return this.container;
	}
}

export default Footer;
