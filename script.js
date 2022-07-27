const featureDetials = [
    {
        image: 'images/YB.jpg',
        name: 'Yochai Berkman',
        post: 'Berkman Professor of Entrepreneurial legal studies at arvard law of school',
        description: 'Benkler studied commons-based peer production, and published his seminal book The Wealth ofNetworks in 2006.'
    }
    , {
        image: 'images/Chon_Kilnam.jpg',
        name: 'Kilnam Chon',
        post: '',
        description: 'Kilnam Chon helped bring the internet to asia and is an outspoken advocate for the open web and digital common.In 2012,he was inducted to an inauguaral class of internet society(ISOC) ITERNET HALL OF FAME.'
    }
    , {
        image: 'images/SohY.jpg',
        name: 'SohYeong Noh',
        post: 'Director of Art Centre Nobi and the board member of Korea',
        description: 'As the main venue of the media art production in korea ,Nabi promotes crosss disciplinary collabration and understanding among Science technology ,humanities and art.'
    }
    , {
        image: 'images/julia.jpg',
        name: 'Julia Leda',
        post: 'President of Young Pirates of Europe',
        description: 'Eureopen ingetration,Politiczal democracy and participation of the Youth through oniline as her major condem,Reda\'s report ouding political changes to EU copywrite law was approved by the parliament in July.'
    }
    , {
        image: 'images/lila.jpg',
        name: 'Lila Tretikov',
        post: 'Executive Director of the Wikimedia Foundation',
        description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation,the nonprofit organizaton that operates wikipedia.Wikipedia is freely available in 290 languges and used by nearly half a million people around the world every month.'
    }
    , {
        image: 'images/ryan.jpg',
        name: 'Ryan Merkley',
        post: 'CEO of Commons,ex COO of the Mozilla Foundation',
        description: 'Ryan has been leading open source projects at Mozilla Foundation such as the open source movement.'
    }
]

console.log(featureDetials);

function loadup() {
const featureSpeaker = document.querySelector('#feature');
const h3 = document.createElement('h3');
const hr1 = document.createElement('hr');
   
h3.setAttribute('class', 'feature-h3');
hr1.setAttribute('class','feature-hr');

const h3Text = document.createTextNode('Feature Speakers');

h3.appendChild(h3Text);

featureSpeaker.appendChild(h3);
featureSpeaker.appendChild(hr1);

featureDetials.forEach((feature)=>{
    const div0 = document.createElement('div');
    const img = document.createElement('img');
    const div1 = document.createElement('div');
    const h4 = document.createElement('h4');
    const h5 = document.createElement('h5');
    const p = document.createElement('p'); 
    const hr = document.createElement('hr');
    
    div0.setAttribute('class', 'feature-div');
    div1.setAttribute('class', 'feature-body');
    h4.setAttribute('class', 'feature-h4');
    h5.setAttribute('class', 'feature-h5');
    p.setAttribute('class', 'feature-p');
    img.setAttribute('src', feature.image);
    hr.setAttribute('class','feature-body-hr');
    img.setAttribute('class','img-thumbnail');
    img.setAttribute('class','feature-img');
   


    const h4Text = document.createTextNode(feature.name);
    const h5Text = document.createTextNode(feature.post);
    const pText = document.createTextNode(feature.description);

    h4.appendChild(h4Text);  
    h5.appendChild(h5Text);
    p.appendChild(pText);

    div1.appendChild(h4);
    div1.appendChild(h5);
    div1.appendChild(hr);
    div1.appendChild(p);

    div0.appendChild(img);
    div0.appendChild(div1);
    featureSpeaker.appendChild(div0);
})

console.log(featureSpeaker);
}

window.onload =loadup();

const burger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close-btn');
const navBar = document.querySelector('.toggles');
const navItem = document.querySelectorAll('.nav-item');

burger.onclick = function () {
    navBar.classList.toggle('click');
    document.body.style.overflow = 'hidden';
  };
  
  closeBtn.onclick = function () {
    navBar.classList.remove('click');
    document.body.style.overflow = 'visible';
  };
  
  navItem.forEach((link) => {
    link.onclick = function () {
      navBar.classList.remove('click');
      document.body.style.overflow = 'visible';
    };
  });