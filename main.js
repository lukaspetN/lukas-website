document.addEventListener('DOMContentLoaded', () => {


    const cursor = document.querySelector('.cursor');


    document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', 'top: ' + (e.pageY - 75) + 'px; left: ' + (e.pageX- 155) + 'px;') 
    })
    // cursor image is 310 x 150; so (e.pageY - 75) bec 150/2 and
    // 310/2 = 155 para gitna ng image yung mouse

    document.addEventListener('touchmove', e => {
      cursor.setAttribute('style', 'top: ' + (e.pageY - 75) + 'px; left: ' + (e.pageX- 155) + 'px;') 
    })

    // var $wrap = $('.wrapper'),
    var eyes = $('.doggo-eyes'),
    followX = 0,
    followY = 0,
    x = 0,
    y = 0,
    friction = 1 / 12;
  
  function animate() {
      x += (followX - x) * friction;
      y += (followY - y) * friction;
  
      eyes.css({
          '-webit-transform': 'translate(' + -x + 'px, ' + -y + 'px)',
          '-moz-transform': 'translate(' + -x + 'px, ' + -y + 'px)',
          'transform': 'translate(' + -x + 'px, ' + -y + 'px)'
      });

      window.requestAnimationFrame(animate);
  }
  
  $(window).on('mousemove', function (e) {
      var mouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
      var mouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
      followX = (12 * mouseX) / 125; 
      followY = (10 * mouseY) / 125;
  });
  
  animate();
});

