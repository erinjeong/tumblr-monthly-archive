jQuery(function($) {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.open('GET', '/archive', true);
  xhr.onreadystatechange = function() {
    var $ul, months;
    if (xhr.readyState === 4 && xhr.status === 200) {
      $('#monthly-archive').replaceWith('<ul id="monthly-archive" />');
      months = $(xhr.responseText).find('.months > ul > li:not(.empty)');
      $ul = $('#monthly-archive');
      return months.each(function() {
        var ym, ym_str;
        ym = $(this).find('a').attr('href');
        ym_str = ym.replace(/\/archive\//, '');
        return $ul.prepend("<li><a href=\"" + ym + "\">" + ym_str + "</a></li>");
      });
    }
  };
  return xhr.send(null);
});
