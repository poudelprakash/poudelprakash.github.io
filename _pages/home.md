---
layout: splash
permalink: /
date:
title: " "
header:
  overlay_color: "#5e616c"
  overlay_image: assets/images/prakash-featured.jpg
  cta_label: 
  cta_url: 
  caption: 
excerpt: '<br /><br />'
feature_row:

announce-twitter:
  - excerpt: 'Follow me for my latest updates &nbsp; [<i class="fa fa-twitter"></i> @poudelprakash](https://twitter.com/poudelprakash
  ){: .btn .btn--twitter}{:target="_blank"}'
intro:
  - excerpt: '**I am full stack engineer from Nepal.**<br />I frequently write down new things I have learned into my blog'

---
{% include feature_row id="announce-twitter" type="center" %}
{% include feature_row id="intro" type="center" %}

<h3 class="archive__subtitle home-recent-posts">Recent Posts</h3>
<div class="grid__wrapper home-archive">
  {% for post in site.posts limit:8 %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>
