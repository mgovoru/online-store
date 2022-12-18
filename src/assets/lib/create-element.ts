
const createElement = (html: string, htmlType = 'div'): HTMLElement => {
    const div: HTMLElement = document.createElement(htmlType);
    div.innerHTML = html;
    return div.firstElementChild as HTMLElement;
};


export default createElement;