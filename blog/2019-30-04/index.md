---
date: '2019-04-30'
title: "Why you'll love Typescript's ReadonlyArray"
category: 'typescript'
---

![](https://cdn-images-1.medium.com/max/1600/1*E4fL_rwjpkvWwqHXEHi7eg.png)

If like me you also believe everything should be immutable, you’ll be happy to see what Typescript 3.4 brings with it. 

While just about everything seems great, the thing that caught my attention the most, simply because it’s still one of the most common errors I see in Javascript code, is the introduction of `ReadonlyArray`, which helps us prevent array mutations at compile time.

### Mutations are bad

This is just one of the many reasons why Redux was so popular in the first place. Mutations cause all sorts of issues in our code, and they also happen to be quite difficult bugs to track down. 

I see this happening a lot in Angular teams: an array gets passed down to a component, and the child component happens to be sorting this array: what happens? the array mutation propagates all the way up to the parent.

Consider the snippet below:

*   we have a parent component that declares an array of numbers
*   we have a child component that takes the input from the parent and calls the method `reverse()`
*   Result: both arrays get mutated!

![](https://cdn-images-1.medium.com/max/1600/1*ZP_eeKmaHEbcYPWBtARfgA.png)

![](https://cdn-images-1.medium.com/max/1600/1*D-HsVFalib8C2Y2piN99JA.png)

These sort of mistakes cost me hours and hours during my career, often mistakes made by me. 

But lately, these are bugs I have fixed for code that was already there, as I finally learned how to **never mutate an object or an array. **

The thing is, sometimes it can still happen.

### ReadonlyArray to the rescue

How does Typescript’s `ReadonlyArray` help us in minimizing this sort of errors? Check the image below:

![](https://cdn-images-1.medium.com/max/1600/1*tQN4h0mG5UOuXrFmATysaQ.png)

As you can see, the compiler warns us there’s a mistake, as the interface `ReadonlyArray` does not contain the method `reverse` 🎉

As weird as it sounds, I love being told I am making a mistake. It’s why I like Typescript so much.

Let’s see what the compiler tells us about different operations on read-only arrays:

![](https://cdn-images-1.medium.com/max/1600/1*gpRDv-jSUP43mMprl-k8ng.png)

As you can see, reverse, sort, splice, push are all methods that mutate the array — so we better avoid using them. 

Other methods, such as `filter`, `concat`, `reduce`, etc. are immutable, and should always be preferred.

Do your future-self, or whoever is going to pick up your code one day, a small favour: use `Readonly`.
