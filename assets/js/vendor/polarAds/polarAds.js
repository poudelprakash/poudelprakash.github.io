//  Polar Ads
var $adHolder = $('.oama-ad-holder');
var oamaUrl = 'https://oama.herokuapp.com/api/v1/ads/';
$adHolder.each(function(index, el) {
  var adUrl = oamaUrl + el.dataset.uuid;
  $(document).ready(function() {
    $.ajax({
      url: adUrl,
      type: "GET"
    }).then(function(response) {
      var $image = $('<img>', {
        src: response.image,
        width: response.dimensions.width,
        height: response.dimensions.height
      });
      var $link = $('<a>', {
        href: response.url,
        target: '_blank'
      });
      $image.appendTo($link);
      $adHolder.html($link);
    });
  });
});
