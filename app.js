var cross_slide, ns_slide;

//Specify pixels gap between each slideshow rotation (use integer):
var slideshowgap = 50;
var actualwidth = '';

function fillup() {
      cross_slide = document.getElementById('test2');
      cross_slide2 = document.getElementById('test3');
      cross_slide.innerHTML = cross_slide2.innerHTML = leftrightslide;
      actualwidth = document.getElementById('temp').offsetWidth;
      cross_slide2.style.left = actualwidth + slideshowgap + '50px';

    lefttime = setInterval('slideleft()', 30);
  }
  
  window.addEventListener('load', fillup);

  function slideleft() {
      if (parseInt(cross_slide.style.left) > actualwidth * -1 + 8)
        cross_slide.style.left =
          parseInt(cross_slide.style.left) - copyspeed + 'px';
      else {
        cross_slide.style.left =
          parseInt(cross_slide2.style.left) +
          actualwidth +
          slideshowgap +
          'px';
      }  
  }