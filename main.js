
console.log('before making the request');

let myPromise = axios.get('https://www.redbullshopus.com/products.json');

myPromise.then(function(response) {
  console.log('Received the response');
  console.log(response.data.products);

  let POHandle = response.data.products;

  let product1 = POHandle[6].images[1].src;
  let product2 = POHandle[8].images[1].src;
  let product3 = POHandle[10].images[0].src;

  let productTitle1 = POHandle[6].title;
  let productTitle2 = POHandle[8].title;
  let productTitle3 = POHandle[10].title;

  let productP1 = POHandle[6].body_html;
  let productP2 = POHandle[8].body_html;
  let productP3 = POHandle[10].body_html;

  document.querySelector('.firstProduct').src = product1;
  document.querySelector('.secondProduct').src = product2;
  document.querySelector('.thirdProduct').src = product3;

  document.querySelector('.productTitle1').innerText = productTitle1;
  document.querySelector('.productTitle2').innerText = productTitle2;
  document.querySelector('.productTitle3').innerText = productTitle3;

  document.querySelector('.productBio1').innerHTML = productP1;
  document.querySelector('#pb2').innerHTML = productP2;
  document.querySelector('#pb3').innerHTML = productP3;
});

console.log('after making the request');
