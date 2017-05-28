# SydCSS Talk Notes

## Intro - personal

_(SLIDE 1)_

Hi, I'm Ben. I make things on the web for fun and for profit. I'm currently paid to make things on the web by Blake eLearning, they're a great company and if you'd like to be paid to make things on the web too, I recommend having a chat to them. I'm on various social pipes, but my pipe of choice is Twitter. I also have a blog where I write things from time to time, though far less regularly than I'd like to.

I said in my bio that my kid is the cutest, so I feel like I should back that up with a photo, so here she is _(SLIDE 2a)_. But she's 3 in 2 weeks so we're starting to see a lot more of this _(SLIDE 2b)_. (??? REMOVE? Intro too long?) We're also expecting in September so ... something about more sleepless nights or hurt?

## Intro - topic

_(SLIDE 3)_

??? Start with animations is one of the first things I got excited about with software development and the web?

??? One of the things that got me into front-end development and I still get excited about is how quickly you can turn around from lines of code to something visible and functioning in front of your eyes. As browsers continue to grow and improve it's become a fantastic execution environment. Recently 

!!!TO REMOVE!!! We spend so much time waiting for things on the web that you'd think we actually like waiting. Ideally we'd never have to wait, but loading spinners and animations are wonderful little UI hints to users of our web applications that things are actually happening. It turns out they're also a pretty neat way to exercise some creative curiosity with the sweet suite of tools provided by the CSS animation API.

## Animation 1 - fading dot

_(SLIDE 4a)_

The basic building blocks for animation with CSS are the `keyframes` at-rule and the `animation` property. Starting with this basic fading dot animation, which is just a square with rounded corners where I'm fading the `opacity` in and out, you can see that you define a `keyframes` at-rule with the keyword, then an identifier or name for the animation, then a list of keyframe steps which define CSS properties for each step. To use these keyframes to animate the dot I'm using the `animation` shorthand property to set the duration, name matching the `keyframes` at-rule which we defined earlier and iteration count which is 'infinite'. These properties are shorthand for the `animation-duration`, `animation-name` and `animation-iteration-count` properties. `animation-iteration-count` can be a number, but it defaults to '1' (!!!LIVE CODE!!!), so we'll be using 'infinite' for all of these animations. You can easily tweak the speed of the animation by modifying the `animation-duration` property (!!!LIVE CODE!!!).

_(SLIDE 4b)_

We can actually simplify the keyframes in this case by setting the `animation-direction` property to 'reverse' (??? or 'alternate'). Now the `keyframes` just need to define the start and end properties for the animation, and the `animation` property can handle the rest of the behaviour. This also now means that the 'fade' `keyframes` at-rule is more generic and can be used anytime we need to fade something in or out. You may also see `from` and `to` instead of percentages in a `keyframes` at-rule, (!!!LIVE CODE!!!) these are just aliases for '0%' and '100%' respectively.

## Animation 2 - basic spinner

_(SLIDE 5a)_

Spinners are another fairly basic animation that can be defined really easily in CSS. Firstly the `keyframes` at-rule still only needs to define a start and end but we're introducing the `transform` property now to handle the rotation. `transform` provides a great toolset of transform functions for 2D and 3D translating (as in movement), scaling and rotation. It's enough for a talk on it's own but we'll just dip our toes in here, it's worth mentioning that you should always prefer animating and transitioning elements with `transform` because it doesn't trigger a reflow of the layout, which is again a topic for another day. The 'rotate' `keyframe` at-rule sets the starting rotation to '0deg' and the ending rotation to '360deg'. The `animation` shorthand property adds one new value 'linear', this is shorthand for the `animation-timing-function` property which defaults to 'ease' which eases the animation in and out. This caused the fading dot to "breathe" in and out (???briefly back to SLIDE 4a), but for rotation we want a nice even linear animation.

With a basic spinner we can rotate whatever we want fairly easily...

_(SLIDE 5b)_

_(SLIDE 5c)_

We can also do more advanced animations without introducing any new properties but just building on what we already know, these are just concentric circles with a dot moving around each, because rotating circles aren't exactly exciting on their own. The second circle is just reversing the same animation as the other two.

## Animation 3 - pulsing series of dots

_(SLIDE 6a)_

For this pulsing series of dots I've made the `keyframes` at-rule slightly more complex by changing the `opacity` property like we did with the 'fade' `keyframes` at-rule earlier, but also using the `transform` property to scale the dots up slightly at full opacity. I'm introducing the `animation-delay` property to offset the start of the animation for each dot. As you can see this is a little complicated, especially if you want to change the timing of the overall animation, you'll need to update the offset for each element.

_(SLIDE 6b)_

If you're using SASS or something similar, you can simplify it with something like this. I've set the overall animation duration in a variable, then loop over each of the dots with a `for` loop and calculate the offset for each dot.

## Animation 4 - bouncing dots

_(SLIDE 7a)_

This bouncing dot uses another fairly simple `keyframes` at-rule, just using the `transform` property to translate the dot up. The interesting thing with the `animation` property here is the use of a custom timing function. If that looks confusing to you, don't worry, you shouldn't ever need to write one of these by hand. Chrome (and possibly other browsers?) has an awesome bezier curve editor where you can just drag some dots and lines to create the animation you want and it will write the timing function for you. I wanted something that accelerates up quickly and starts falling slowly.

_(SLIDE 7b)_

Finally, by using `animation-delay` here too we can get a nice little series of bouncing dots.

## Outro

_(SLIDE 8)_

It's worth mentioning that most of what I've talked about is relatively new to the CSS spec and browser support is mixed. Depending what browsers you need to target though you'll get a lot of mileage out of just using something like autoprefixer to process your CSS and automatically add any required vendor prefixes like `-webkit`, `-moz`, etc.

_(SLIDE 9)_

If you're interested in learning more about any of these, MDN is a great learning resources for understanding the CSS properties, but especially some of the more detailed guides such as for Animations and Transitions.

_(SLIDE 10)_

Thanks for listening, hopefully I've helped sparked some interest and some of you will dig into what's possible with animations and other emerging browser capabilities.
