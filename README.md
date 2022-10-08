:no_entry: [DEPRECATED] Active at https://github.com/ThirashaPraween/RearGen
![N|Solid](https://i.imgur.com/brTmrW7.png)


![Build man](https://img.shields.io/badge/Library%20version-v1.0-green?style=for-the-badge&logo=appveyor) ![Build man](https://img.shields.io/github/repo-size/ThirashaPraween/fornyKit?style=for-the-badge&logo=appveyor) ![Build man](https://img.shields.io/tokei/lines/github/ThirashaPraween/fornyKit?style=for-the-badge) ![Build man](https://img.shields.io/github/last-commit/ThirashaPraween/fornyKit?style=for-the-badge) ![Build man](https://img.shields.io/badge/Developer-ThirashaPW-blueviolet?style=for-the-badge&logo=appveyor)


# fornyKit
fornyKit is also known as RearGen Material Kit. fornyKit library handles HTML elements as android responsive components.

## CDN Links

###### CSS

```
<link href="https://cdn.jsdelivr.net/gh/ThirashaPraween/fornyKit/fornykit-v1.0.css" rel="stylesheet" />
```

###### JS

```
<script src="https://cdn.jsdelivr.net/gh/ThirashaPraween/fornyKit/fornykit-v1.0.js"></script>
```

## or Minified CDN Links

###### CSS
```
<link href="https://cdn.jsdelivr.net/gh/ThirashaPraween/fornyKit/fornykit-v1.0.min.css" rel="stylesheet" />
```

###### JS
```
<script src="https://cdn.jsdelivr.net/gh/ThirashaPraween/fornyKit/fornykit-v1.0.min.js"></script>
```

### Guide
- [Components](#components)
- [Colors](#colors)
- [Navbar & Drawer](#navbar-and-drawer)
- [Radio Buttons](#radio-buttons)
- [Check Box](#check-box)
- [Other Classes](#other-classes)


## Components
![N|Solid](https://i.imgur.com/eIgdLos.png)

Browse [demo](https://thirashapraween.github.io/fornyKit/) component site.

You don't need any special classes to handle mobile responsive elements. After you implement the fornyKit library, It will automatically change the elements to responsive RearGen components.


## Colors
- Background Colors - `bg-primary`, `bg-secondary`, `bg-danger`, `bg-warning`, `bg-white`, `bg-dark`, `bg-black`
- Text Colors - `text-primary`, `text-secondary`, `text-danger`, `text-warning`, `text-white`, `text-dark`, `text-black`


## Navbar and Drawer
- Implement a primary color simple android nav bar\
![statusbar](https://i.imgur.com/dc3zrvS.png)

```
<nav class="bg-primary">
  <label>Status bar</label>
</nav>
```

- Implement a primary color simple android nav bar with drawer\
![navbar](https://i.imgur.com/e5WJhky.png)

```
<nav class="bg-primary">
  <span id="nav-burger">&#9776;</span>
  <label>Status bar</label>
  <div id="nav-side" class="nav-side bg-white nav-text-dark">
    <a href="javascript:void(0)" class="nav-head">fornyKit</a>
    <a href="javascript:void(0)" class="closebtn">&times;</a>
    <a href="#">&#9728; Home</a>
    <a href="#">&#9728; About</a>
    <a href="#">&#9728; Services</a>
    <a href="#">&#9728; Contact</a>
  </div>
</nav>
```

##### Special
- To bring down the `flow-container` from nav bar, add `off-nav` to `flow-container` div.
- To hide drawer when tapping the `flow-container`, add `hide-nav` to `flow-container` div.


## Radio Buttons
![Radiobuttons](https://i.imgur.com/09Vyneg.png)
```
<label class="radio-label">
    <input type="radio" name="group" />
    <span>Radio Option 2</span>
</label>
<label class="radio-label">
    <input type="radio" name="group" />
    <span>Radio Option 2</span>
</label>
```


## Check Box
![CheckBox](https://i.imgur.com/k9cPCCK.png)
```
<input type="checkbox" id="remember" />
<label for="remember" class="check-label">Remember me</label>
```


## Other Classes
- Container - `flow-container`
- Margins - `mu` , `ml` , `mr` , `md`
- Row - `row`
- Column - `column`
- Display - `d-flex`, `d-none`
- Vertical Alignments - `v-center`, `v-start`, `v-end`
- Horizontal Alignments - `h-center`, `h-between`, `h-around`, `h-evenly`,  `h-start`, `h-end`
- Center Screen - `center`
- Text Alignments - `text-center`, `text-left`, `text-right`
- Floating - `fl`, `fr`
- Flex Wrap - `f-wrap`


<br>
<p>
  <a href="https://www.buymeacoffee.com/thirashapraween">
      <img src="https://camo.githubusercontent.com/2ef5c63105d22716d9d093d2c8b77cd7aa9d540b/68747470733a2f2f63646e2e6275796d6561636f666665652e636f6d2f627574746f6e732f76322f64656661756c742d79656c6c6f772e706e67" height="50px"/>
  </a>
   <a href="https://www.patreon.com/thirasha">
      <img src="https://le-cdn.website-editor.net/05ce6571223a491289ae62de7892c2dd/dms3rep/multi/opt/Patreon-Button-2880w.png" height="50px"/>
  </a>
</p>


Thank you for using fornyKit (RearGen Material Kit)!
