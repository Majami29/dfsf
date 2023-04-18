//Initialize full page library for one page scrolling
new fullpage('#fullpage', {
  //options here
  licenseKey: '31EB1867-F27C4C2E-90C981D3-01B86BEC',
  autoScrolling: true,
  scrollHorizontally: true,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  resetSliders: true,
  resetSlidersKey: 'b3JvcGVuZG9sYS5kZXZfUUtwY21WelpYUlRiR2xrWlhKejI0ZA==',
});

//Animate logo entry on page load
setTimeout(function () {
  document.getElementsByClassName("centered")[0].classList.remove("outofscreen");
  document.getElementsByClassName("centered")[1].classList.remove("outofscreen");
}, 500)

setTimeout(function () {
  document.getElementsByClassName("oropendola")[0].classList.remove("nonvisible");
  document.getElementsByClassName("centered")[0].classList.remove("centered");
  document.getElementsByClassName("centered")[0].classList.remove("centered");
}, 1000)

//Identify what section of the page is the scroll in
const onHome = document.getElementsByClassName("fp-viewing-page-home");
const onAbout = document.getElementsByClassName("fp-viewing-page-about");
const onWork = document.getElementsByClassName("fp-viewing-page-work");
const onContact = document.getElementsByClassName("fp-viewing-page-contact");
const onLocaly = document.getElementsByClassName("fp-viewing-page-localy-0");
const onVeganfind = document.getElementsByClassName("fp-viewing-page-veganfind-0");
const onEcoimpakt = document.getElementsByClassName("fp-viewing-page-ecoimpakt-0");
const onLupamove = document.getElementsByClassName("fp-viewing-page-lupamove-0");
const onCastlexperience = document.getElementsByClassName("fp-viewing-page-castlexperience-0");
const onDragonleaves = document.getElementsByClassName("fp-viewing-page-dragonleaves-0");

//Select the style object of the different elements to animate
const body = document.querySelector("body");
const header = document.querySelector("header");
const links = document.querySelectorAll("nav a");
const slideNav = document.querySelectorAll(".fp-slidesNav ul li a span");
const arrowsNav = document.querySelectorAll(".fp-controlArrow");
const aboutLink = document.getElementById("aboutlink").style;
const workLink = document.getElementById("worklink").style;
const contactLink = document.getElementById("contactlink").style;
const footer = document.querySelector("footer");
const yellowBig = document.getElementsByClassName("yellowcircle-big")[0].style;
const blackBig = document.getElementsByClassName("blackcircle-big")[0].style;
const yellowSmall = document.getElementsByClassName("yellowcircle-small")[0];
const blackSmall = document.getElementsByClassName("blackcircle-small")[0];
const outlineSmall = document.getElementsByClassName("outlinecircle-small")[0].style;
const outlineBig = document.getElementsByClassName("outlinecircle-big")[0].style;
const oropendola = document.getElementsByClassName("oropendola")[0];
const projectContent = document.getElementsByClassName("projectcontentwrap");
const projectContentLinks = document.querySelectorAll(".projectcontentwrap a");

const localyH1 = document.getElementsByClassName("localyh1")[0].style;
const veganfindH1 = document.getElementsByClassName("veganfindh1")[0].style;
const ecoimpaktH1 = document.getElementsByClassName("ecoimpakth1")[0].style;
const lupamoveH1 = document.getElementsByClassName("lupamoveh1")[0].style;
const castlexperienceH1 = document.getElementsByClassName("castlexperienceh1")[0].style;
const dragonleavesH1 = document.getElementsByClassName("dragonleavesh1")[0].style;

//Helper function for white navigation
function whiteTheme() {
  header.style.color = '#fff';
  links.forEach(link => link.style.color = '#fff');
  footer.style.color = '#fff';
}

//Helper function for dark navigation
function darkTheme() {
  header.style.color = 'var(--darkgray)';
  links.forEach(link => link.style.color = 'var(--darkgray)');
  footer.style.color = 'var(--darkgray)';
  body.style.backgroundColor = '#fff';
}

//Helper function for home section
function scrollHome() {
  yellowBig.width = '75vmax';
  yellowBig.top = '-35vmax';
  yellowBig.left = '50%';
  yellowBig.transform = '';

  blackBig.width = '50vmax';
  blackBig.top = '70%';
  blackBig.left = '-25%';
  blackBig.transform = '';
  blackBig.backgroundColor = 'var(--darkgray)';

  outlineSmall.width = '60vmax';
  outlineSmall.top = '65%';
  outlineSmall.left = '-10%';
  outlineSmall.transform = '';
  outlineSmall.border = '1px solid var(--darkgray)';

  outlineBig.width = '90vmax';
  outlineBig.top = '-65vmax';
  outlineBig.transform = '';
  outlineBig.left = '10%';

  yellowSmall.classList.remove("centered");
  blackSmall.classList.remove("centered-black");
  yellowSmall.classList.remove("centered-yellow");
  oropendola.classList.remove("nonvisible")

  yellowSmall.classList.remove("overlap-yellow");
  blackSmall.classList.remove("overlap-black");

  yellowSmall.style.zIndex = "2";
  blackSmall.style.zIndex = "2";
  yellowSmall.style.backgroundColor = "var(--mustard)";

  aboutLink.textDecoration = "none";
  workLink.textDecoration = "none";
  contactLink.textDecoration = "none";
}

//Helper function for about section
function scrollAbout() {
  yellowSmall.classList.add("centered-yellow");
  blackSmall.classList.add("centered-black");
  oropendola.classList.add("nonvisible");
  yellowSmall.classList.remove("overlap-yellow");
  blackSmall.classList.remove("overlap-black");
  yellowSmall.style.zIndex = "-2";
  blackSmall.style.zIndex = "2";

  yellowBig.width = '130vmax';
  yellowBig.top = '-100vmax';
  yellowBig.left = '50%';
  yellowBig.transform = 'translateX(-50%)';

  outlineBig.width = '110vmax';
  outlineBig.top = '-300vmax';
  outlineBig.left = '50%';
  outlineBig.transform = 'translateX(-50%)';

  blackBig.transform = 'translateX(-50%)';
  blackBig.backgroundColor = 'var(--darkgray)';
  blackBig.left = '50%';

  outlineSmall.transform = 'translateX(-50%)';
  outlineSmall.border = '1px solid var(--darkgray)';
  outlineSmall.left = '50%';

  aboutLink.textDecoration = "underline";
  workLink.textDecoration = "none";
  contactLink.textDecoration = "none";

  if (window.innerWidth > 980) {
    blackBig.width = '45vmax';
    blackBig.top = '80%';

    outlineSmall.width = '90vmax';
    outlineSmall.top = '80%';
  }

  if (window.innerWidth <= 980) {
    blackBig.width = '25vmax';
    blackBig.top = '95%';

    outlineSmall.width = '40vmax';
    outlineSmall.top = '95%';
  }
}

//Helper function for work section
function scrollWork() {
  yellowBig.top = '-300%';
  yellowBig.right = '-5vw';

  blackBig.width = '45vmax';
  blackBig.left = '50%';
  blackBig.transform = 'translateX(-50%)';
  blackBig.backgroundColor = 'var(--darkgray)';

  outlineSmall.left = '50%';
  outlineSmall.transform = 'translateX(-50%)';
  outlineSmall.border = '1px solid var(--darkgray)';

  outlineBig.top = '-300vmax';

  yellowSmall.classList.add("centered-yellow");
  blackSmall.classList.add("centered-black");
  oropendola.classList.add("nonvisible");

  yellowSmall.style.zIndex = "2";
  blackSmall.style.zIndex = "-2";

  yellowSmall.classList.remove("overlap-yellow");
  blackSmall.classList.remove("overlap-black");

  yellowSmall.style.backgroundColor = "var(--mustard)";

  aboutLink.textDecoration = "none";
  workLink.textDecoration = "underline";
  contactLink.textDecoration = "none";

  if (window.innerWidth > 980) {
    blackBig.top = '-40%';

    outlineSmall.width = '90vmax';
    outlineSmall.top = '-70%';
  }

  if (window.innerWidth <= 980) {
    blackBig.top = '-15%';

    outlineSmall.width = '40vmax';
    outlineSmall.top = '0%';

    links.forEach(link => link.style.color = '#fff');
  }
}

//Helper function for contact section
function scrollContact() {
  yellowBig.top = '-300%';
  yellowBig.right = '-5vw';

  blackBig.left = '50%';
  blackBig.transform = 'translateX(-50%)';
  blackBig.backgroundColor = 'var(--darkgray)';

  outlineSmall.left = '50%';
  outlineSmall.transform = 'translateX(-50%)';
  outlineSmall.border = '1px solid var(--darkgray)';

  outlineBig.left = '50%';
  outlineBig.transform = 'translateX(-50%)';

  yellowSmall.classList.add("overlap-yellow");
  blackSmall.classList.add("overlap-black");
  oropendola.classList.add("nonvisible")

  yellowSmall.style.backgroundColor = "var(--mustard)";
  yellowSmall.style.zIndex = "2";
  blackSmall.style.zIndex = "1";

  aboutLink.textDecoration = "none";
  workLink.textDecoration = "none";
  contactLink.textDecoration = "underline";

  if (window.innerWidth > 980) {
    blackBig.width = '45vmax';
    blackBig.top = '70%';
    outlineBig.width = '65vmax';
    outlineBig.top = '-10%';
    outlineSmall.width = '40vmax';
    outlineSmall.top = '55%';
  }

  if (window.innerWidth <= 980) {
    outlineBig.top = '-5%';
    outlineBig.width = '85vmax';
    blackBig.width = '105vmax';
    blackBig.top = '80%';
    outlineSmall.width = '50vmax';
    outlineSmall.top = '65.5%';
    document.querySelector('footer').style.color = '#fff';
  }
}

//Helper function for project section
function scrollProject() {
  yellowBig.top = '-300%';
  yellowBig.right = '-5vw';

  blackBig.left = '50%';
  blackBig.transform = 'translateX(-50%)';
  blackBig.backgroundColor = 'var(--darkgray)';

  outlineSmall.left = '50%';
  outlineSmall.transform = 'translateX(-50%)';
  outlineSmall.border = '1px solid var(--darkgray)';

  outlineBig.top = '-300vmax';

  yellowSmall.classList.add("centered-yellow");
  blackSmall.classList.add("centered-black");
  oropendola.classList.add("nonvisible");

  yellowSmall.style.zIndex = "2";
  blackSmall.style.zIndex = "-2";

  yellowSmall.classList.remove("overlap-yellow");
  blackSmall.classList.remove("overlap-black");

  aboutLink.textDecoration = "none";
  workLink.textDecoration = "underline";
  contactLink.textDecoration = "none";

  if (window.innerWidth > 980) {
    blackBig.top = '-50%';
    blackBig.width = '35vmax';
    outlineSmall.width = '90vmax';
    outlineSmall.top = '-70%';
  }

  if (window.innerWidth <= 980) {
    blackBig.top = '-64%';
    blackBig.width = '75vmax';
    outlineSmall.width = '75vmax';
    outlineSmall.top = '85%';
  }
}



//Animate the different background elements depending on scroll
function scrollAnimations(mutationList) {
  mutationList.forEach(function (mutation) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {

      //Modify the CSS of every element depending on the scrolled section
      if (onHome.length) {
        darkTheme();
        scrollHome();
      }

      if (onAbout.length) {
        darkTheme();
        scrollAbout();
      }

      if (onWork.length) {
        darkTheme();
        scrollWork();
      }

      if (onContact.length) {
        darkTheme();
        scrollContact();
      }

      if (onLocaly.length) {
        scrollProject();
        whiteTheme();
        localyH1.color = '#fff';
        blackBig.backgroundColor = '#fff';
        outlineSmall.border = '1px solid #fff';
        yellowSmall.style.backgroundColor = "var(--localypurple)";
        body.style.backgroundColor = 'var(--localypurple)';
        projectContent[0].style.color = '#fff';
        slideNav.forEach(span => span.style.backgroundColor = '#fff');
        projectContentLinks.forEach(link => link.style.color = '#fff')
        arrowsNav.forEach(arrow => arrow.classList[1] === ('fp-next') ?
          arrow.style.borderColor = 'transparent transparent transparent #fff' :
          arrow.style.borderColor = 'transparent #fff transparent transparent')

        if (window.innerWidth <= 980) {
          links.forEach(link => link.style.color = 'var(--localypurple)');
        }
      }

      if (onVeganfind.length) {
        scrollProject();
        darkTheme();
        veganfindH1.color = 'var(--veganfindcoral)';
        blackBig.backgroundColor = 'var(--veganfindcoral)';
        outlineSmall.border = '1px solid var(--veganfindcoral)';
        yellowSmall.style.backgroundColor = "var(--veganfindgreen)";
        body.style.backgroundColor = 'var(--veganfindgreen)';
        projectContentLinks.forEach(link => link.style.color = 'var(--darkgray)')
        slideNav.forEach(span => span.style.backgroundColor = 'var(--veganfindcoral)');
        arrowsNav.forEach(arrow => arrow.classList[1] === ('fp-next') ?
          arrow.style.borderColor = 'transparent transparent transparent var(--veganfindcoral)' :
          arrow.style.borderColor = 'transparent var(--veganfindcoral) transparent transparent')

        if (window.innerWidth <= 980) {
          links.forEach(link => link.style.color = '#fff');
        }
      }

      if (onEcoimpakt.length) {
        scrollProject();
        darkTheme();
        ecoimpaktH1.color = 'var(--darkgray)';
        blackBig.backgroundColor = 'var(--darkgray)';
        outlineSmall.border = '1px solid var(--darkgray)';
        yellowSmall.style.backgroundColor = "var(--ecoimpaktbeige)";
        body.style.backgroundColor = 'var(--ecoimpaktbeige)';
        slideNav.forEach(span => span.style.backgroundColor = 'var(--darkgray)');
        projectContentLinks.forEach(link => link.style.color = 'var(--darkgray)')
        arrowsNav.forEach(arrow => arrow.classList[1] === ('fp-next') ?
          arrow.style.borderColor = 'transparent transparent transparent var(--darkgray)' :
          arrow.style.borderColor = 'transparent var(--darkgray) transparent transparent')

        if (window.innerWidth <= 980) {
          links.forEach(link => link.style.color = '#fff');
        }
      }

      if (onLupamove.length) {
        scrollProject();
        whiteTheme();
        lupamoveH1.color = 'var(--lupamovepeach)';
        blackBig.backgroundColor = 'var(--lupamovepurple)';
        outlineSmall.border = '1px solid var(--lupamovepeach)';
        yellowSmall.style.backgroundColor = "var(--lupamovesalmon)";
        body.style.backgroundColor = 'var(--lupamovesalmon)';
        projectContent[3].style.color = '#fff';
        slideNav.forEach(span => span.style.backgroundColor = '#fff');
        arrowsNav.forEach(arrow => arrow.classList[1] === ('fp-next') ?
          arrow.style.borderColor = 'transparent transparent transparent #fff' :
          arrow.style.borderColor = 'transparent #fff transparent transparent')

        if (window.innerWidth <= 980) {
          links.forEach(link => link.style.color = '#fff');
        }
      }

      if (onCastlexperience.length) {
        scrollProject();
        whiteTheme();
        castlexperienceH1.color = '#fff';
        blackBig.backgroundColor = 'var(--darkgray)';
        outlineSmall.border = '1px solid #fff';
        yellowSmall.style.backgroundColor = "var(--castlexperiencepink)";
        body.style.backgroundColor = 'var(--castlexperiencepink)';
        projectContentLinks.forEach(link => link.style.color = '#fff')
        projectContent[4].style.color = '#fff';
        slideNav.forEach(span => span.style.backgroundColor = '#fff');
        arrowsNav.forEach(arrow => arrow.classList[1] === ('fp-next') ?
          arrow.style.borderColor = 'transparent transparent transparent #fff' :
          arrow.style.borderColor = 'transparent #fff transparent transparent')
      }

      if (onDragonleaves.length) {
        scrollProject();
        darkTheme();
        dragonleavesH1.color = 'var(--dragonleavesgreen)';
        blackBig.backgroundColor = 'var(--dragonleavesgreen)';
        outlineSmall.border = '1px solid var(--dragonleavesgreen)';
        yellowSmall.style.backgroundColor = "var(--dragonleavespeach)";
        body.style.backgroundColor = 'var(--dragonleavespeach)';
        projectContentLinks.forEach(link => link.style.color = 'var(--darkgray)')
        slideNav.forEach(span => span.style.backgroundColor = 'var(--dragonleavesgreen)');
        arrowsNav.forEach(arrow => arrow.classList[1] === ('fp-next') ?
          arrow.style.borderColor = 'transparent transparent transparent var(--dragonleavesgreen)' :
          arrow.style.borderColor = 'transparent var(--dragonleavesgreen) transparent transparent')

        if (window.innerWidth <= 980) {
          links.forEach(link => link.style.color = '#fff');
        }
      }
    }
  })
}

//Set an observer to call the animations upon scroll-related changes in the body class
const options = { attributes: true };
const observer = new MutationObserver(scrollAnimations);
observer.observe(body, options);
