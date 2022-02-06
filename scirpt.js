const cardsImage = document.querySelectorAll('.card > .front-part > img');
const cards = document.querySelectorAll('.card');

// armazena os nomes das imagens
// e quantas vezes foram usadas

const imageArray = [
  { image: 'coffin.png', used: 0 },
  { image: 'eye.png', used: 0 },
  { image: 'zoombie.png', used: 0 },
  { image: 'hat.png', used: 0 },
  { image: 'ted.png', used: 0 },
  { image: 'book.png', used: 0 },
  { image: 'witch.png', used: 0 },
  { image: 'pumpkin.png', used: 0 },
  { image: 'scarecows.png', used: 0 },
];

// faz um loop, gera um números para selecionar
// as imagens dentro de imageArray, modifica o src
// de cada imagem e verifica se a imagem foi usada
// mais de duas vezes

for (let i = 0; i < cardsImage.length; i++) {
  let num = Math.floor(Math.random() * imageArray.length);
  if (imageArray[num].used < 2) {
    imageArray[num].used += 1;
    cardsImage[i].setAttribute('src', 'images/' + imageArray[num].image);
  } else {
    i--;
  }
}

// verifica se o primeiro card clicado é diferente
// do segundo card clicado e adiciona a class

let cardOne, cardTwo;
let disableDeck = false;

function showCard(card) {
  let cardClick = card.target;
  if (cardClick !== cardOne && !disableDeck) {
    cardClick.classList.add('show');
    if (!cardOne) {
      return (cardOne = cardClick);
    }
    cardTwo = cardClick;
    disableDeck = true;
    let cardOneImage = cardOne.querySelector('img').src,
      cardTwoImage = cardTwo.querySelector('img').src;
    mathCard(cardOneImage, cardTwoImage);
  }
}

// Verifica se as imagem do primeiro card
// é igual a imagem do segundo card se for
// ele remove os eventos de click
function mathCard(img1, img2) {
  if (img1 === img2) {
    cardOne.removeEventListener('click', showCard);
    cardTwo.removeEventListener('click', showCard);
    cardOne = cardTwo = '';
    return (disableDeck = false);
  }

  setTimeout(() => {
    cardOne.classList.remove('show');
    cardTwo.classList.remove('show');
    cardOne = cardTwo = '';
    disableDeck = false;
  }, 1200);
}

// faz um loop em cada card e adiciona
// um evento de click que mostra a carta
// e seleciona a parte da frente da carta

cards.forEach((card) => {
  card.addEventListener('click', showCard);
});
