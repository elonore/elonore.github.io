/* START OF SCROOL REVEAL */

const sr = ScrollReveal({ 
  duration: 1000,
  reset: true
});


sr.reveal('h1', {
  origin: 'top' , 
  distance: '25px' ,
  scale: 0.5,
});



sr.reveal('h2',{
  delay: 200
});


sr.reveal('.person-name', {
  origin: 'top' , 
  distance: '50px' ,
  scale: 0.5,
});

sr.reveal('section-1-btn' , {
 delay: 750
});

sr.reveal('.project' , {
  delay: 500
}, 50);
          


/* END OF SCROLL REVEAL */