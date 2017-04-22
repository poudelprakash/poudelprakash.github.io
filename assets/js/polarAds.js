//  Polar Ads
var PolarAds = window.PolarAds || {};

PolarAds.sideBar = function () {
  var $container = $('.polar-ads-container');
  $('body').prepend($container);
  var $closeBtn = $('#polar-ads-close');

  $closeBtn.click(function () {
    $container.fadeOut(1000)
  });

};

$(document).ready(function () {
  new PolarAds.sideBar();

  var $adHolder = $('.oama-ad-holder');
  var oamaUrl = 'https://oama.herokuapp.com/api/v1/ads/';
  $adHolder.each(function (index, el) {
    var adUrl = oamaUrl + el.dataset.uuid;
    $.ajax({
      url: adUrl,
      type: "GET"
    }).then(function (response) {
      var $image = $('<img>', {
        src: response.image,
        width: response.dimensions.width,
        height: response.dimensions.height
      });
      var openInSideBar = true;
      var $link = '';
      var openInNewPage = false;

      if (openInSideBar) {
        $link = $('<a>', {
          href: response.url
        });
        $link.click(function () {
          $('.polar-ads-container').fadeIn(1000);
        })
      } else {
        $link = $('<a>', {
          href: response.url,
          target: openInNewPage ? '_blank' : ''
        });
      }

      $image.appendTo($link);
      $adHolder.html($link);
    });

  });
});
