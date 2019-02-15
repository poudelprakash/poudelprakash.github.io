---
title: Scrapping kaymu products using NOKOGIRI
categories: ruby
excerpt: scrapping kaymu products
tags:
comments: true
share: true
date: 2016-06-18T07:51:29+05:45
last_modified_at:
---

It's saturday morning and I have nothing interesting to do. So I thought of scraping Kaymu and list out products and their price using ruby. I targeted raspberry pi for this exercise.

Libraries I used are:

1. [httparty][httparty]{: rel="nofollow"}{:target="_blank"} to make http request
2. [nokogiri][nokogiri]{: rel="nofollow"}{:target="_blank"} to parse html
3. [pry][pry]{: rel="nofollow"}{:target="_blank"} for debugging

Here is the commented script:

```ruby
# requiring dependencies
require 'nokogiri' 
require 'httparty' 
require 'pry'

# kaymu url to search raspberry pi and list them in ascending order of price
SITE = "http://www.kaymu.com.np/catalog/?q=raspberry+pi&sort=price&dir=asc"

# hitting the url to get data
page = HTTParty.get(SITE)

parse_page = Nokogiri::HTML(page)

products_array = []

# acquiring required data using Nokogiri's css methods
parse_page.css('.row-products .product').each do |product|
  products_array.push({item: product.css('h3').text, price: product.css('.price').text})
end

p products_array
```

Output:

```ruby
[
{:item => "Raspberry Pi Lcd 3.5 inch", :price => "Rs 3,500 "}, 
{:item => "Raspberry Pi 3.5” TFT with Touch Screen", :price => "Rs 3,970 "},
{:item => "Raspberry Pi - 2 Camera", :price => "Rs 4,669 "}, 
{:item => "Raspberry PI Model B+", :price => "Rs 5,900 "}, 
{:item => "Raspberry Pi Model B+", :price => "Rs 6,330 "}, 
{:item => "Raspberry Pi-2 B Plus with Casing", :price => "Rs 6,899 "}, 
{:item => "5 inch HDMI Touch Screen for Raspberry Pi", :price => "Rs 7,200 "}, 
{:item => "Raspberry Pi 3", :price => "Rs 7,300 "}, 
{:item => "Raspberry Pi 3 (Made in UK)", :price => "Rs 8,299 "}, 
{:item => "Raspberry Pi 3 Model B", :price => "Rs 8,500 "}
]
```

If you want to learn scrapping yourself, [you can follow better tutorial here][tutorial]{: rel="nofollow"}{:target="_blank"}.

[nokogiri]: https://github.com/sparklemotion/nokogiri
[pry]: https://github.com/pry/pry
[httparty]: https://github.com/jnunemaker/httparty
[tutorial]: https://www.distilled.net/resources/web-scraping-with-ruby-and-nokogiri-for-beginners/
