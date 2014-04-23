function loadFeed(url, element){
    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed(url);
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById(element);
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var div = document.createElement("a");
            div.href = entry.link; 
            div.appendChild(document.createElement('br'));
            div.appendChild(document.createTextNode(entry.title));
            var content = document.createElement('div')
            content.innerHTML = entry.contentSnippet;
            container.appendChild(div);
            container.appendChild(content);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);
}
