const banners = ['banner.jpg', 'banner2.jpg', 'banner3.jpg'];
const section1 = $('#main > section.one');
let counter = 1;

setInterval(() => {
  section1.fadeTo(500, 0.3, () => {
    if (counter === 3) counter = 0;
    section1.css({
      'background-image': () => {
        let url = `url("images/${banners[counter]}")`;
        return url;
      },
      'color': () => {
        return counter === 2 ? '#fff' : '#000';
      },
    }).fadeTo(500, 1);
    counter++;
  });
}, 8000);
