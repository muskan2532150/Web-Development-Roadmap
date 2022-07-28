const featureDetials = [
    {
      image: 'images/I1.jpg',
      name: 'Edureka',
      post: 'YouTube Channel',
      description: 'Edureka is online Youtube Channel which has Web Devlopment and many other courses videos',
    },
    {
      image: 'images/I2.jpg',
      name: 'Oniline Tutorials',
      post: 'YouTube Channel',
      description: 'Oniline Tutorials is online Youtube Channel which has Web Devlopment mainly focus on Css.',
    },
    {
      image: 'images/I3.webp',
      name: 'Web Dev Simplified',
      post: 'YouTube Channel',
      description: 'Web Dev Simplified  is online Youtube Channel which has Web Devplopment CSS videos.',
    },
    {
      image: 'images/I4.png',
      name: 'Udemy',
      post: 'Online Website',
      description: 'Udemy is online Website  which has Web Devlopment and many other courses videos with lectures and notes.',
    },
    {
      image: 'images/I5.png',
      name: 'Skill Share',
      post: 'Online Website',
      description: 'Skill share  is online Website which has Web Devlopment and many other courses videos and lectures.',
    },
    {
      image: 'images/I6.png',
      name: 'Coursea',
      post: 'Online Website',
      description: 'Coursea is online Website which has Web Devlopment and many other courses videos and lecture with Notes.',
    },
  ];
  
  function loadup() {
    const featureSpeaker = document.querySelector('#feature');
    const h3 = document.createElement('h3');
    const hr1 = document.createElement('hr');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
  
    h3.setAttribute('class', 'feature-h3');
    hr1.setAttribute('class', 'feature-hr');
    div2.setAttribute('class', 'div-1');
    div3.setAttribute('class', 'div-2');
    div4.setAttribute('class', ' div-sources d-grid  gap-3');
  
    const h3Text = document.createTextNode('Feature Speakers');
  
    h3.appendChild(h3Text);
  
    featureSpeaker.appendChild(h3);
    featureSpeaker.appendChild(hr1);
    featureSpeaker.appendChild(div4);
  
    featureDetials.forEach((feature, index) => {
      const div0 = document.createElement('div');
      const img = document.createElement('img');
      const div1 = document.createElement('div');
      const h4 = document.createElement('h4');
      const h5 = document.createElement('h5');
      const p = document.createElement('p');
      const hr = document.createElement('hr');
  
      div0.setAttribute('class', 'feature-div d-flex m-3');
      div1.setAttribute('class', 'feature-body d-flex flex-column');
      h4.setAttribute('class', 'feature-h4');
      h5.setAttribute('class', 'feature-h5');
      p.setAttribute('class', 'feature-p');
      img.setAttribute('src', feature.image);
      hr.setAttribute('class', 'feature-body-hr');
      img.setAttribute('class', 'img-thumbnail');
      img.setAttribute('class', 'feature-img');
  
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
      if (index < 3) {
        div2.appendChild(div0);
      } else {
        div3.appendChild(div0);
      }
  
      if (index === 2) { div4.appendChild(div2); } else if (index === 5) { div4.appendChild(div3); }
    });
  }
  
  window.onload = loadup();

  const datePlace = document.getElementById('date-place');
  const dayPlace = document.getElementById('day-place');
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  datePlace.innerHTML =`${d.getDate()}.${month[d.getMonth()]}.${d.getFullYear()}`;
  dayPlace.innerHTML = `${ weekday[d.getDay()]}`;
  