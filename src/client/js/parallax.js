
addEventListener('scroll', event => {
    var depth, layer, layers, movement, topDistance, translate3d;
    topDistance = window.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (let i = 0; i < layers.length; ++i) {
      layer = layers[i];
      layer.style.transition = "0s";
      depth = layer.getAttribute('data-depth');
      movement = -(topDistance * depth);
      translate3d = 'translate3d(0, ' + movement + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }

});
