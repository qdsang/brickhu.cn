---
layout: default
title: 首页
description: 胡飞的个人网站
---
<div class="index">
	<h1>{{ site.name }}</h1>
	<p>{{ site.description }}</p>
	<h2>{{ page.title }}</h2>
	<p>最新文章</p>
	<ul>
	　　{% for post in site.posts %}
	　　　　<li>{{ post.date | date_to_string }} <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
	　　{% endfor %}
	</ul>
</div>