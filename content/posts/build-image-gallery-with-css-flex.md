---
cover_image: /images/uploads/how-to-build-an-image-gall.png
title: Build Image Gallery with CSS Flex
date: 2020-04-20T20:44:27.309Z
published: true
tags:
  - css
  - flex
  - web design
  - frontend
  - images
  - ""
canonical_url: true
description: Layout in CSS used to be a very daunting task for developers until
  flexbox and Grid were introduced. Before these design systems, most developers
  used Bootstrap to layout their sites, but why introduce an entire framework to
  build an image grid gallery for your site when you can do it in <10 lines of
  CSS? Let's dive into the "how to" already.
---
You already know flex and don't want to read the rest of this article?

```css
ul {
  display: flex;
  flex-flow: row wrap;
}
li {
	flex: 0 0 100%;
 }

@media (min-width: 605px) {
	li {
		flex: 0 0 50%;
	}
}
@media (min-width: 910px) { 
	li {
		flex: 0 0 33%;
	}
}
```

Let's say you're building a portfolio website for a designer or photographer or an artist, you would have to display their work in some sort of grid gallery.  The fastest way to do this and make it responsive is by using the bootstrap grid system but why introduce an entire CSS framework when you can implement in less than 10 lines of CSS. Flex is not the official layout system for CSS, but personally i feel it's easier to use than grid and it's best to use both when laying out your website.

Now let's dive into the code.

This is [github repo.](https://github.com/Umoren/flex_gallery)

Check the demo [here](https://flexgallery.netlify.app/)

## **The Markup**

```html
<ul>
    <li>
      <figure>
         <img src="https://res.cloudinary.com/samtech/image/upload/f_auto/q_auto/v1578386144/Ps-sm_5.jpg" alt="His Likeness Emmages">
         <figcaption>His Likeness Emmages</figcaption>
       </figure>
     </li>
</ul>
```

There's not much here. The first thing to do is define a flex container or parent and the `ul` tag here is the flex container while the `li` tag is the child element. We used `figure` here cause our images has captions and i used cloudinary to optimize the images. To reduce the image size without loosing quality, i added `q_auto` and `f_auto` to the url.

## The Styles

```css
ul {
  display: flex;
  flex-flow: row wrap;
}

li {
	flex: 0 0 100%;
 }

img { 
  width: 100%; 
}

@media (min-width: 605px) {
	li {
		flex: 0 0 50%;
	}
}
@media (min-width: 910px) { 
	li {
		flex: 0 0 33%;
	}
}
```

This is where the magic happens. We've introduced `display: flex` to the parent element. That's the first and most important thing to do. `flex-flow: row wrap` are default flex properties so you can decide not to use it.

The child element `li` has this property `flex: 0 0 100%`

> P.S. We are using mobile first responsive design techniques here. 

The `flex: 0 0 100%` is an aggregation of 3 flex properties; `flex-grow, flex-shrink and flex-basis` respectively. Flex-shrink and flex-basis are optional. The default value is `flex: 0 auto` which is equivalent to `flex: 0 1 auto`. Here our `flex-basis: 100%` for mobile, in flex we don't use `width` to define the width of a flex item cause `width` is kind of static and `flex-basis` is relative. `flex-basis`  is both width and height in a Flexbox, depending on the flex direction. [Read more about width vs flex-basis](https://www.freecodecamp.org/news/flexboxs-flex-basis-explained-83d1a01413b7/)

Furthermore, i used two breakpoints. `min-width: 605px` for tablets and `min-width: 910px` for desktop. Depending on how you want to place your images, here in tablet screens, they'll a 2 images in a row and in desktop mode  3 images.

> **Image credits: [Emmanuel Ikwuegbu.](<<a href="https://instagram.com/samuelumoren365/"><i class="fab fa-instagram"></i></a>>)** 

## **Summary**

Flexbox is not the official layout system for CSS (Grid is) but it's easier to use when creating layouts for simple pages like this. Use some of these flex layout generator tools to create your layout: [Loading.io](https://loading.io/flexbox/) or [Webflow](https://flexbox.webflow.com/). 

Check the demo [here](https://flexgallery.netlify.app/).