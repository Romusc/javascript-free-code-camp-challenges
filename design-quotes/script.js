$(document).ready(function() {
  $("#quoter").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        console.log(data);
        var post = data.shift();
        $('.quote-content').html(post.content);
        $('.quote-title').text(post.title);
      },
      error: function(jqXHR) {
        console.log("error");
      },
      cache: false
    });
  });

  $('#btn-tweet').click(function(e) {
    var textToTweet = $('.quote-content').text() + "-" + $('.quote-title').text();
    if (textToTweet.length > 140) {
      alert('Tweet should be less than 140 Chars');
    } else {
      var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
      window.open(twtLink, '_blank');
    }
  });
});
