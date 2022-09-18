'use strict';

let sections = document.querySelectorAll('.section');

function revealSection (entries, obsever) {
    let [entry] = entries;
    console.log(entry);

    if(!entry.isIntersecting) {
        return;
    }

    entry.target.classList.remove('section-hidden');
        obsever.unobserve( entry.target);
    
}

let option = {
    root: null,
    threshold: 0.15
}

let sectionObsever = new IntersectionObserver(revealSection, option)

sections.forEach(function (section) {
    sectionObsever.observe(section);
    section.classList.add('section-hidden');
})