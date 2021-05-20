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

_If you are unsure how to install, you will need a package manager. Easiest way is to install [**NodeJS**](https://nodejs.org/en/)
to get [**Npm**](https://www.npmjs.com) chances are you already have this installed aswell, you can check you version
by writing `node -v` in the terminal. Make sure you have a version > 13.
With Node you get npm._

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

Your `<head>` should look like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Awsome Site</title>
    <script src="node_modules/kron-ui/dist/kron-ui/kron-ui.js"></script>
  </head>
</html>
```

Thats it! You have Kron UI setup in your project.

#### React Setup

Coming soon-

### Components & Properties

All components uses the `appearance` attribute for their styles, and some have component specific attributes
that is documentet for each component below.

#### Colors

Colors are used within the `appearance` property as well as for color intensity, example:

```html
<kron-componenttype appearance="blue4"></kron-componenttype>
```

`blue` is the color and `4` is the intensity of the color blue. Put togheter we get `blue4`.
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
<kron-button>Im a button!<kron-button></kron-button></kron-button>
```

![Button](https://i.gyazo.com/d940454f2366b333f2e4fe99ccabdf8f.png)

Properties `kron-button`
| properties | attributes |
| ---------- | ------------------------------- |
| appearance | color,b-color,h-color,bg-none |

| attributes               | examples                             |
| ------------------------ | ------------------------------------ |
| color = background color | blue10 : color + intensity(1-10)     |
| b-color = border color   | b-blue10 : b-color + intensity(1-10) |
| h-color = hover color    | h-blue10 : b-color + intensity(1-10) |
| bg-none = no border      | bg-none                              |

```html
Example usage
<kron-button appearance="blue7 b-blue3 h-green3">Styled Button!</kron-button>
<kron-button appearance="bg-none">Styled Button!</kron-button>
```

#### Navbar

```html
<kron-navbar appearance="blue5 hover-b8" contactlogo="Contact us!" navlogo="Testpage">
  <a href="#"> Home </a>
  <a href="#"> Page 2 </a>
</kron-navbar>
```

Attributes for kron-navbar
| appearance | navlogo | contactlogo |
| ------ | ----- | ---- |
| color | String | String |
| hover- | | |

![Navbar](https://gyazo.com/924494b63778ae25cc7817796ef460d7.png)

#### Box

```html
<kron-box appearance="flex-row-wrap">
  <div>1</div>
  <div>2</div>
</kron-box>
```

Attributes for kron-box
| appearance |
| ------ |  
| color |  
| hover- |  
| flex-row-wrap |  
| flex-column-wrap |

![box](https://gyazo.com/56b5d1a9eb6e09a989e6bac03b17a1c9.png)

#### Article

```html
<kron-article>
  <h2>header<h2>
  <p> lorum ispom</p>
</kron-article>
```

![Article](https://i.gyazo.com/58eb8b6e647399d8018ad37904a0a6f7.png)

Properties `kron-article`
| properties | attributes |
| ---------- | ------------------------------- |
| appearance | serif, sans-serif, monospace, fantasy, large, medium, small, right, center, left|

| attributes               | examples                          |
| ------------------------ | --------------------------------- |
| serif = font-family      | Times New Roman + Times + serif   |
| sans-serif = font-family | Arial + Helvetica + sans-serif    |
| monospace = font-family  | Courier New + Courier + monospace |
| fantasy = font-family    | Copperplate + Papyrus             |
| large = font-size        | big font size                     |
| medium = font-size       | medium font size                  |
| small = font-size        | small font size                   |

```html
<kron-article appearance="large serif center ">
  <h2>header</h2>
  <p>lorum ipsom</p>
</kron-article>
```

#### Figure

```html
<kron-figure></kron-figure>
```

![Figure](https://i.gyazo.com/849f4f870c1deeda0932ba08487890b6.png)

Properties `kron-figure`
| properties | attributes |
| ---------- | ------------------------------- |
| appearance | serif, sans-serif, monospace, fantasy right, center, left |
| appearance-Image | radius, size |
| img| src: enters image address |
| alt| string value if image doesnt show |
| appearance-Fig |string value for figcaption output |

| attributes                 | examples                                                      |
| -------------------------- | ------------------------------------------------------------- |
| serif = font-family        | Times New Roman + Times + serif                               |
| sans-serif = font-family   | Arial + Helvetica + sans-serif                                |
| monospace = font-family    | Courier New + Courier + monospace                             |
| fantasy = font-family      | Copperplate + Papyrus                                         |
| radius = radius size image | radius-size10: radius intensity increasing 10 each time to 60 |
| size = size image          | size increasing 10 each time to 60                            |
| large = font-size          | big font size                                                 |
| medium = font-size         | medium font size                                              |
| small = font-size          | small font size                                               |

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

#### Form

```html
<kron-form></kron-form>
```

![Form](https://i.gyazo.com/d084212360eaa64c97d44f46a7683826.png)

Properties `kron-form`
| properties | attributes |
| ---------- | ------------------------------- |
| appearance | serif, sans-serif, monospace, fantasy right, center, left |
| image |true, false |

| attributes                            | examples                                                      |
| ------------------------------------- | ------------------------------------------------------------- |
| serif = font-family                   | Times New Roman + Times + serif                               |
| sans-serif = font-family              | Arial + Helvetica + sans-serif                                |
| monospace = font-family               | Courier New + Courier + monospace                             |
| fantasy = font-family                 | Copperplate + Papyrus                                         |
| radius = radius size image            | radius-size10: radius intensity increasing 10 each time to 60 |
| size = size image                     | size increasing 10 each time to 60                            |
| large = font-size                     | big font size                                                 |
| medium = font-size                    | medium font size                                              |
| small = font-size                     | small font size                                               |
| placement website = center left right | floating center, floating left, floating right                |

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
