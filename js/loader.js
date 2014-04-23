/**
* CJ Ramki
* Access the CJ Ramki contents from JavaScript side.
*
* Copyright (c) 2014 CJ Ramki
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* */
function loadFeed(url, element, num = null) {
    google.load("feeds", "1");

    function initialize() {
        var feed = new google.feeds.Feed(url);
        if (num !== null) {
            feed.includeHistoricalEntries();
            feed.setNumEntries(num);
        }
        feed.load(function (result) {
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
                    var postTitle = document.createElement("a");
                    postTitle.class = 'post_title';
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
