display-feed-js
===============

This plugin used to display RSS feed links dynamically in your html page. In this plugin we are using [google Api](https://www.google.com/jsapi) get Feed from url.
***

DEMO
====

You can see live DEMO from my [blog](http://cj-ramki.blogspot.in/p/feeds-sample.html).
***

Features
========
* By using third parameter of our function, we can control how many entries should be visible for each feed.
* We can optionally enable or disable content snippet for each feed.
* Easy to use.
* Used only plain javascript.
* Easy to apply css style.

***

Code Usage
==========

in javascript, call ```loadFeed()``` method.

**Syntax:**
```js
loadFeed(url,element,num=null,enableContent=false);
```
**Parameters definition :**

* url - enter the feed url
* element - id of the element
* num - this is optional. By default, the Feed class loads four entries. If you want more, you can manually set number of entries for each feed. Else use ```null``` as a third parameter.
* enableContent - We can manually enable or disable content snippet for each feed using this parameter. If you want show content, simply add ```true``` as a fourth parameter. Else use ```false``` as a fourth parameter.

**Example:**
_with number of entries_

loadFeed('http://cj-ramki.blogspot.in/feeds/posts/default?alt=rss','feed1',10,true);

_without number of entries_

loadFeed('http://cj-ramki.blogspot.in/feeds/posts/default?alt=rss','feed1',null,true);

in html,

```html
<div id='feed1'></div>
```
is enough.

**To include more Feeds in single page**

in javascript,
```js
loadFeed('http://cj-ramki.blogspot.in/feeds/posts/default?alt=rss','feed1',10,false);
loadFeed('http://chillydraji.wordpress.com/feed/','feed2',null,true);
```
in HTML
```html
<div id="feed1"></div>
<div id="feed2"></div>
```
***
Styling Guide
=============

In this plugin, We are separated each feed into three sections.
1. Feed Title.
2. Post Title
3. Post Content snippet

So, We are using, three class for those three sections.
- ```.feed_title```    - for title of the Feed.
- ```.post_title```    - for Post title.
- ```.post_content```  - for Post content snippet.

**Example:**
```
	.feed_title{
		  color:green;
	}
	.post_title{
		color:red;
	}
	.post_content{
		color:blue;
	}
```
***
That's it... Happy coding....
