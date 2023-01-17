// const ntech = document.querySelector("ntech-shadow").shadowRoot;
// const b = ntech.querySelector("ntech");

// const event1 = new CustomEvent('ntechGet', { get: 'test' });
// b.dispatchEvent(event1);

const ntech = document.querySelector("ntech-shadow").shadowRoot;
const b = ntech.querySelector("ntech");

const event2 = new CustomEvent('ntechPost', { post: {"test": "wow"}});
b.dispatchEvent(event2);
