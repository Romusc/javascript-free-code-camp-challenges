$(document).ready(function(e) {

  $("#random-1").on("click", function() {
    document.location.assign("https://en.wikipedia.org/wiki/Special:Random");
    return false;
  })

  $("#btn-test").on("click", function(e) {
    $('#wiki-results').empty();
    var searchText = $("input[name=wiki-search]").val();
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageprops&list=search&indexpageids=1&callback=?&utf8=1&srsearch=" + searchText + "&origin=*", function(json) {
      var myJson = json["query"]["search"];
      // console.log(json["query"]["search"][0].title);
      var count = 0;
      myJson.forEach(function(j) {
        $('#wiki-results').append('<div class="col-xs-12 box" id="first' + count + '"><a href="https://en.wikipedia.org/wiki/' + j.title + '"><h3 class="clickable">' + j.title + '</h3></a><p>' + j.snippet + '...</p></div>');
        count++;
        });
      }
    );
  });
});

// &indexpageids=1
