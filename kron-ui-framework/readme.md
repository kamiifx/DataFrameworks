## Kron UI
[![Logo](https://i.gyazo.com/fb1a9607aa6bba5deb89738b64027ac0.png)](https://github.com/kamiifx/Kron-UI-Framework)

> Kron UI is a simple UI Framework that helps create
> beautiful Layouts, with simple Components.
> This is part of DataFrameworks Exam @ HIOF GROUP 18

### Installation

```sh
npm install kron-ui
or
yarn add kron-ui
```

## Getting Started

- Vanilla Javascript
- React

#### Vanilla JavaScript Setup

*If you are unsure how to install, you will need a package manager. Easiest way is to install [**NodeJS**](https://nodejs.org/en/)
to get [**Npm**](https://www.npmjs.com) chances are you already have this installed aswell, you can check you version 
by writing ```node -v``` in the terminal. Make sure you have a version > 13.
With Node you get npm.*

```shell
npm init
or
yarn init
```

After initialization, install Kron-UI as shown in the installation above.
And you can starting importing Kron-UI by refrencing to it with the script tag :

```html  
<script src="node_modules/kron-ui/dist/kron-ui/kron-ui.js"></script> 
```

Your ``` <head> ``` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Awsome Site</title>
    <script src="node_modules/kron-ui/dist/kron-ui/kron-ui.js"></script>
</head>
```
Thats it! You have Kron UI setup in your project.


#### React Setup

Coming soon-


### Components & Properties

All components uses the ```appearance``` attribute for their styles, and some have component specific attributes
that is documentet for each component below. 

#### Colors

Colors are used within the ```appearance``` property as well as for color intensity, example:
```html
<kron-componenttype appearance='blue4'></kron-componenttype>
```
``` blue ``` is the color and ```4``` is the intensity of the color blue. Put togheter we get ```blue4```.
All the colors have an intensity from 1 to 10.

##### Colors Available

- Red
- Blue
- Green
- Yellow
- Pink
- Brown
- Grey
- Gray

### Components
#### Button
```html
<kron-button>Im a button!<kron-button>
```
![Button](https://i.gyazo.com/d940454f2366b333f2e4fe99ccabdf8f.png)


|attributes               | examples                                        |
| ----------------------- | ----------------------------------------------- |
|color = background color | blue10 : color + intensity(1-10)                |
|b-color = border color   | b-blue10 : b-color + intensity(1-10)            |
|h-color = hover color    | h-blue10 : b-color + intensity(1-10)            |
|bg-none = no border      | bg-none                                         |

```html
Example usage
<kron-button appearance='blue7 b-blue3 h-green3'>Styled Button!</kron-button>
<kron-button appearance='bg-none'>Button! Without a border</kron-button>
```

#### Menu
*Menu is only activated by hovering for now.*
```html
  <kron-menu menu='Sort By'>
    <a href='=asc'>Ascending Order</a>
    <a href='=desc'>Descending Order</a>
  <kron-menu>
```
![Menu](https://i.gyazo.com/fb589532486ad1429d337e9c1d78af48.png)

Properties ``` kron-menu ```
| properties | attributes                                             |
| ---------- | ------------------------------------------------------ |
| appearance | color,b-color,h-color,sm,md,lg,font-sm,font-md,font-lg |
| menu       | "text"                                                 |

|attributes               | examples                                        |
| ----------------------- | ----------------------------------------------- |
|color = background color | blue10 : color + intensity(1-10)                |
|b-color = border color   | b-blue10 : b-color + intensity(1-10)            |
|h-color = hover color    | h-blue10 : b-color + intensity(1-10)            |
|sm = small button size   | sm                                              |
|md = medium button size  | md                                              |
|lg = large button size   | lg                                              |
|font-sm = small font size| font-sm                                         |
|font-md = medium font size | font-md                                       |
|font-lg = large font size  | font-lg                                       |

```html
  Example Usage
  <kron-menu menu='Sort By' appearance='blue3 b-blue5 h-green3 sm font-sm'>
  <a href='=asc'>Ascending Order</a>
  <a href='=desc'>Descending Order</a>
  <kron-menu>
```

#### Navbar

```html
<kron-navbar> </kron-navbar>
```

Properties ``` kron-navbar ```
| properties | attributes                      |
| ---------- | ------------------------------- |
| appearance | color,hover-c,                  |
| navlogo    | "Text"                          |
| contactlogo| "Text"                          |

|attributes               | examples                                        |
| ----------------------- | ----------------------------------------------- |
|color = background color | blue10 : color + intensity(1-10)                |
|hover-c = hover color    | hover-b10 : hover color + intensity(1-10)           |

```html
Example usage
<kron-navbar appearance="blue5 hover-b8" contactlogo="Contact us!" navlogo="Testpage">
  <a href="#"> Home </a>
  <a href="#"> Page 2 </a>
</kron-navbar>
```
![Navbar](https://gyazo.com/924494b63778ae25cc7817796ef460d7.png)

#### Box

```html
<kron-box> </kron-box>
```
Properties ``` kron-box ```
| properties | attributes                      |
| ---------- | ------------------------------- |
| appearance | color,hover-c, flex-row-wrap, flex-column-wrap                  |

Attributes for kron-box
| Attributes | Example    |
| ------     |                                                          -------      |
| color = background color|    blue10 : color + intensity(1-10)                      |
| hover-c = hover color   |    hover-b10 : hover + color + intensity(1-10)           |
| flex-row-wrap           |    vertically placing the divs                           |
| flex-column-wrap        |    horisontally placing the divs                         |


```html
Example usage
 <kron-box appearance="flex-row-wrap blue1 hover-y10">
  <div> This</div>
  <div> is </div>
  <div> the same </div>
  <div> Component</div>
</kron-box>

<kron-box appearance="flex-column-wrap blue10 hover-r10">
  <div> as</div>
 <div>this one </div>
 
```
![box](https://i.gyazo.com/59d9649e0ded2a85fcfca70613b7a934.png)

#### article

```html
<kron-article appearance="large serif center ">
  <h2>header</h2>
  <p>lorum ipsom</p>
</kron-article>
```

Attributes for kron-article
| property appearance | property ability |
| --------- | --------------- |
| fontsize | large medium small |  
| fontstyle | serif sans-serif monospace fantasy |
| placement website | right left center |
| placcement artice | text.Right text.Left text.Center |

![article](https://i.gyazo.com/58eb8b6e647399d8018ad37904a0a6f7.png)

#### figure

```html
<kron-figure
  appearance="center"
  appearance-Image="size-40"
  appearance-Fig="figcaption-40"
  img="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
  text="bilde fra fjell"
>
</kron-figure>
```

| property appearance | property ability                 | property appearance-Image | property ability             |
| ------------------- | -------------------------------- | ------------------------- | ---------------------------- |
| placement website   | right left center                | radius img                | from radius-10 to readius-60 |
| placcement figure   | text.Right text.Left text.Center | img size                  | from size-10 to size-60      |

| property decorator for image | property ability                   |
| ---------------------------- | ---------------------------------- |
| img address                  | string value coping from website   |
| alternativ for image         | string value if image doesnt show  |
| text for figcaption          | string value for figcaption output |

![figure](https://i.gyazo.com/849f4f870c1deeda0932ba08487890b6.png)

#### form

```html
<kron-form appearance="large serif center" image="true">
  <div slot="start">
    <kron-figure slot="img" appearance="center" img="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg" appearance-Image="size-40 radius-50" />
  </div>
  <h2>registrer bruker</h2>
  <input type="text" name="fornavn" placeholder="  Fornavn" required />
  <button>knapp</button>
</kron-form>
```

Attributes for kron-form
| property appearance | property ability |
| --------- | --------------- |
| fontsize | large medium small |
| fontstyle | serif sans-serif monospace fantasy |
| placement website | right left center |
| placcement artice | text.Right text.Left text.Center |

![form](https://i.gyazo.com/d084212360eaa64c97d44f46a7683826.png)
