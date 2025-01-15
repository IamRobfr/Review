// local reviews data
const reviews = [
    {
      id: 1,
      name: "Chill guy a.k.a. 'My new character'",
      job: 'Smiling Friends Inc.',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Chill_guy_original_artwork.jpg/220px-Chill_guy_original_artwork.jpg',
      text: "I'm just a chill guy, everyone hears from me. But also a worker at the Smiling friends. Looks great, man. (Note: This is a fictional character that is used as a internet meme and art.)",
    },
    {
      id: 2,
      name: 'Rick Astley',
      job: 'English singer',
      img: 'https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1000&h=667&crop=1',
      text: 'Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you.',
    },
    {
      id: 3,
      name: 'Ernest Khalimov',
      job: 'Bodybuilder',
      img: 'https://preview.redd.it/a-smiling-picture-of-ernest-khalimov-v0-cjg40dsceria1.jpg?width=640&crop=smart&auto=webp&s=f95f4f7e867f5dbc15b4ba4952d2526f670f9b2a',
      text: 'Stop calling me Gigachad.',
    },
    {
      id: 4,
      name: 'Satoru Gojo',
      job: 'Main character of Jujutsu Kaisen',
      img: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png/revision/latest?cb=20210226205256',
      text: "Would you lose? Nah, I'd win.",
    },
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });
