function loadFeed(url, element){
    google.load("feeds", "1");

    function initialize() {
      var feed = new google.feeds.Feed(url);
      feed.load(function(result) {
        if (!result.error) {
          var container = document.getElementById(element);
          
          //Feed title Section
          var feedTitle = document.createElement('h2');
          //use ".feed_title"  in css to style Title of the Feed
          feedTitle.class = 'feed_title';				
          feedTitle.innerHTML = result.feed.title;
          container.appendChild(feedTitle);
          
          //Feed Entries section
          for (var i = 0; i < result.feed.entries.length; i++) {
            var entry = result.feed.entries[i];
            var post = document.createElement('h3');
            post.class = 'post_title';
            var postTitle = document.createElement("a");
            //use ".post_title"  in css to style Title of the Post
            postTitle.href = entry.link; 
            postTitle.appendChild(document.createTextNode(entry.title));
            post.appendChild(postTitle);
            
            //Feed Content Snippet section
            var content = document.createElement('div');
            //use ".post_content"  in css to style Title of the Post
            content.class = 'post_content';
            content.innerHTML = entry.contentSnippet;
            container.appendChild(post);
            container.appendChild(content);
          }
        }
      });
    }
    google.setOnLoadCallback(initialize);
}
