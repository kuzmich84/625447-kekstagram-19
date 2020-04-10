const pictures=[];
const numReserve = [];
const descriptions = ['Шикарное фото', 'Мое любимое фото', 'Фото котика', 'Сказочное Бали'];
const comments  = [{
    avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
    message: "В целом всё неплохо. Но не всё.",
    name: "Артем"
},
  {
    avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
    message: "Всё отлично!",
    name: "Дима"
  },
  {
    avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
    message: "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    name: "Юля"
  },
  {
    avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
    message: "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    name: "Вова"
  },
  {
    avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
    message: "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    name: "Миша"
  },
  {
    avatar: `img/avatar-${getRandomNumber(1,6)}.svg`,
    message: "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
    name: "Лена"
  }
  ];

let picture = document.querySelector('#picture').content;
let pic = document.querySelector('.pictures');
let fragment = document.createDocumentFragment();

function getPhotos() {
  const pictureAmount = 25;

  for (let i=0; i<pictureAmount; i++)
  {
    pictures[i] = {
      url: `photos/${getArrayNumbers()[i]}.jpg`,
      description: getRandomElement(descriptions),
      likes: getRandomNumber(15,200),
      comments: getRandomElementOfArray(comments),
    };
  }

  return pictures;
}
console.log(getPhotos());


function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}


function getArrayNumbers(){
  while (numReserve.length < 25) {
    let  randomNumber = getRandomNumber(1,26);
    let found = false;
    for (let i = 0; i <= numReserve.length; i++) {
      if (numReserve[i] === randomNumber){
        found = true;
        break;
      }
    }
    if (!found) { numReserve[numReserve.length]=randomNumber; }
  }

  return numReserve;

}

function getRandomElement (advertItem) {
  let randomIndex = Math.floor((advertItem.length) * Math.random());
  return advertItem[randomIndex];
}

function getRandomElementOfArray(advertItem) {
  let randomIndex = Math.floor((advertItem.length) * Math.random());
  return advertItem.slice(randomIndex);
}

function renderPicture(pictures) {
  let pictureElement = picture.cloneNode(true);
  console.log(pictureElement);

  pictureElement.document.querySelector('.pictures').firstChild.src = pictures.url;
  // pictureElement.document.querySelector('.picture__likes').textContent = pictures.likes;
  // pictureElement.document.querySelector('.picture__comments').textContent = pictures.comments;


  return pictureElement;
}

for (let i = 0; i < getPhotos().length; i++) {
  fragment.appendChild(renderPicture(getPhotos()[i]));
}

pic.appendChild(fragment);




