const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

          /* Selectors */
          // Nav
const aTag = document.querySelectorAll('nav a');
aTag[0].textContent = siteContent['nav']['nav-item-1'];
aTag[1].textContent = siteContent['nav']['nav-item-2'];
aTag[2].textContent = siteContent['nav']['nav-item-3'];
aTag[3].textContent = siteContent['nav']['nav-item-4'];
aTag[4].textContent = siteContent['nav']['nav-item-5'];
aTag[5].textContent = siteContent['nav']['nav-item-6'];

const aValues = Object.values(siteContent['nav']);

for(let i = 0; i < aTag.length; i++){
  aTag[i].textContent = aValues[i]
}

const changeColor = document.querySelectorAll('nav a');
for (let i = 0; i < changeColor.length; i++){
  changeColor[i].style.color = 'green';
}

          // CTA
const cta = document.querySelector('cta');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
let headerImg = document.getElementById('cta-img');

h1.textContent = siteContent['cta']['h1'];
button.textContent = siteContent['cta']['button'];


          // Main Content
const mainContent = document.querySelector('.main-content');
const featuresH4 = document.querySelector('.features-h4');
const featuresContent = document.querySelector('.features-content');
const aboutH4 = document.querySelector('.about-h4');
const aboutContent = document.querySelector('.about-content');
const servicesH4 = document.querySelector('.services-h4');
const servicesContent = document.querySelector('.services-content');
const productH4 = document.querySelector('.product-h4');
const productContent = document.querySelector('.product-content');
const visionH4 = document.querySelector('.vision-h4');
const visionContent = document.querySelector('.vision-content');
let middleImg = document.getElementById('.middle-img');

          // Contact
const contact = document.querySelector('.contact');
const contactH4 = document.querySelector('.contact-h4');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

          //Footer
const footer = document.querySelector('.footer');
const copyright = document.querySelector('.copyright');

