# SydCSS Talk Notes

## Intro

_(SLIDE 1: title, personal details)_

Hi, I'm Ben and I make things for the web. I'm currently paid to make things for the web by Blake eLearning. I'm on Twitter as at-bkbooth11. I also have a blog at bkbooth.me where I write things from time to time, though far less regularly than I'd like to.

Today we're going to look at CSS animations by looking at some loading animations and spinners.

## Topic intro

_(SLIDE 2a: `@keyframes` sample)_

There are two basic building blocks for CSS animations. Firstly the `keyframes` at-rule, which you define with the at-`keyframes` keyword, then a name or identifier for the `keyframes` set, then a list of steps which define CSS properties for each step.

_(SLIDE 2b: `animation` sample)_

Secondly the `animation` properties which you can use in shorthand form, or by using individual sub-properties.

_(SLIDE 2c: animation sub-properties)_

There are only 8 animation sub-properties, but they provide a great deal of flexibility.

## Animation 1 - fading

_(SLIDE 3a: 3-step fading dot)_

Let's start with a simple fading dot animation, which is just a square with rounded corners where the `opacity` is being faded in and out. I've defined the `keyframes` at-rule with 3 steps going from completely visible, to completely invisible, then back to completely visible. To use these `keyframes` to animate the dot, I've used the `animation` shorthand property to set the `animation-duration` to 1 second; the `animation-name` to _'fade-in-out'_ which matches `keyframes` at-rule; and _'infinite'_ for the `animation-iteration-count`. `animation-iteration-count` can be a number or _'infinite'_ and defaults to 1. **(!!!LIVE EDIT!!!)** As you can see this isn't very useful for this type of animation, so I'll be using _'infinite'_ for all of these animations. You can tweak the speed of the animation by modifying the `animation-duration` property **(!!!LIVE EDIT!!!)** which takes seconds or milliseconds values.

_(SLIDE 3b: 2-step fading dot)_

In this case the `keyframes` at-rule can be simplified to just the start and end steps by setting the `animation-direction` property to _'alternate'_, which means the animation goes forward through the `keyframes` steps, then back through in reverse. Now that a full animation loop goes through the `keyframes` twice, the `animation-duration` should be halved. This approach means that you can define more generic and reusable `keyframes` at-rules. You may also see _'from'_ **(!!!LIVE EDIT!!!)** and _'to'_ instead of percentages for `keyframes` steps, these are just aliases for _'0%'_ and _'100%'_ respectively. I personally prefer to stick with percentage steps.

## Animation 2 - spinning

_(SLIDE 4a: spinning star)_

Spinners are another simple animation that can be defined easily in CSS. I've introduced the `transform` property to handle the rotation, `transform` provides a great toolset functions for 2D and 3D translating (as in movement), scaling and rotation. It's enough for a talk on it's own but we'll just dip our toes in here. The _'rotate'_ `keyframes` at-rule just sets the starting rotation to _'0deg'_ and the ending rotation to _'360deg'_. The `animation` shorthand property now has the `animation-timing-function` property set to _'linear'_. `animation-timing-function` defaults to _'ease'_ to ease the animation in and out. This caused the fading dot to "breathe" in and out **(!!!QUICKLY BACK TO LAST SLIDE!!!)**. If I set it to _'ease'_ **(!!!LIVE EDIT!!!)** here it speeds up and slows down, for rotation you want a nice even _'linear'_ animation.

_(SLIDE 4b: concentric circles)_

Using the same rotation `keyframes` at-rule you can create more complex animations by just combining things we've already looked at. These clock-like concentric circles aren't telling us the actual time, but the outer circle is rotating once a second and the inner circle is rotating once a minute. Another value that you can set for the `animation-direction` property is _'reverse'_ **(!!!LIVE EDIT!!!)** which as you can probably guess, plays the `keyframes` in reverse. I'll speed it up to make it more obvious. Now it's nothing like a clock, but it's... interesting?

You can use the same `keyframes` to rotate pretty much anything you want...

_(SLIDE 4c: spinning doge)_

...like doge.

## Animation 3 - chasing

_(SLIDE 5a: chasing dots)_

For this animation I've arranged a series of small dots around a circle and used a similar `keyframes` at-rule as earlier, fading the dots in and out to 20% opacity. The main `animation` shorthand property adds nothing new and is being applied to all of the individual dots with this fun little selector. I've set an `animation-delay` for each of the dots to offset each of them starting by an 1/8th of a second. As you can see it's a little tedious having to manually set the offset for each dot, especially if you wanted to change the speed of the whole animation.

_(SLIDE 5b: SASS example)_

If you're using SASS or something similar, you can simplify this by setting the desired animation speed and the number of dots in variables. Halve the animation speed for the `animation` property definition. Then loop through the number of dots and calculate the `animation-delay` for each dot using the desired animation speed, number of dots and current iteration variables.

## Animation 4 - bouncing

_(SLIDE 6a: single bouncing dot)_

This bouncing dot animation uses yet another fairly simple `keyframes` at-rule, it's just using the `transform` property to translate the dot up and down. To make it look more "bouncy" I've defined a _'cubic-bezier'_ function for the `animation-timing-function` property. If that looks a little daunting to you, don't worry, I didn't actually write this, and you should never need to write one of these by hand...

_(SLIDE 6b: Chrome dev tools screenshot)_

Chrome (and possibly other browsers?) has an awesome bezier curve editor where you can just drag some dots to visually create the cubic-bezier curve and it will write the cubic-bezier function for you.

_(SLIDE 6c: bouncing dot series)_

Finally, to create this excitedly impatient series of dots, I've defined a slightly more complex `keyframes` at-rule which performs the translation up and down in just the first 1/3rd of the time. I've also set an `animation-delay` for each of the dots in the series to offset them starting.

## Browser support

_(SLIDE 7: Caniuse and MDN screenshots)_

Most of what I've talked about today is relatively new to the CSS spec but support in modern browsers is actually really good. Depending what browsers you need to target though you'll get a lot of mileage out of using autoprefixer to process your CSS and automatically add any required vendor prefixes like `-webkit`, `-moz`, etc.

## Follow-up

_(SLIDE 8: MDN links)_

MDN is a great learning resources for understanding the CSS properties and rules. There's also a really helpful guide on using CSS animations.

## Thanks

_(SLIDE 9: thanks)_

Thanks to David and Fiona for giving us this opportunity, and thanks to all of you for listening.
