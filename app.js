const scrollRevealOption = {
    distance: "500px",
    origin: "bottom",
    duration: 3000,
  };
  
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h2", {
    ...scrollRevealOption,
    delay: 200,
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 700,
  });
  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1100,
  });