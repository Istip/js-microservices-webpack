import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// #1 - Immidiately render after the page loads
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products');

  // Assumption: the element is not yet in the DOM
  if (el) {
    // We probably are running in isolation
    mount(el);
  }
}

// #2 - Wait for the DOM to load
export { mount };
