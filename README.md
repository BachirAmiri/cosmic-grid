# COSMIC GRID 

![demo](https://raw.githubusercontent.com/BachirAmiri/cosmic-grid/master/images/grid-demo-x.gif)


## Live DEMO

You can try it at this link : https://bachiramiri.github.io/cosmic-grid/ 

## Why ?

The purpose of this repos is mainly out of frustration watching tutorials having a static 3x3 grid for their examples.

My approch for square was simple : i mainly focused on the grid css, defining row and columns with a variable, then for the size it was specified in documentation that columns can be defined by % on 'grid-template-columns', that, i get by a dedicated function that returns 100 divided by side size, and the result was not too shabby.

So it can be mainly wrapped to : 

![approch](https://raw.githubusercontent.com/BachirAmiri/cosmic-grid/master/images/approach.PNG)

Nebular was not the best choice for this case scenario, due to their components having a lot of effects and a ridid min size, a better result could be achieved with vanilla css, but for the purpore of this experimentation it was ok. 

## Dependency 

[Nebular](https://akveo.github.io/nebular/) for theming : fairly easy to quick start + eva icon pack

[ng5-slider](https://angular-slider.github.io/ng5-slider/) for the sliding effect
