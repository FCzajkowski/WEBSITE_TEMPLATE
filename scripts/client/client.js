function element(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    document.body.appendChild(element);
}

element('h1', 'Hajime');
element('p', 'this is Hajime template website');