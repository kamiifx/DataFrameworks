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

må endres etterpå
![Navbar](https://gyazo.com/924494b63778ae25cc7817796ef460d7.png)

#### figure

```html
<kron-figure appearance="center text.center" appearance-Image="radius-50 size-30" img="copy img adresse" alt="image" text="image"> </kron-figure>
```

Attributes for kron-figure

| property appearance  | property ability                   | property appearance-Image | property ability             |
| -------------------- | ---------------------------------- | ------------------------- | ---------------------------- |
| placement website    | right left center                  | radius img                | from radius-10 to readius-60 |
| placcement figure    | text.Right text.Left text.Center   | img size                  | from size-10 to size-60      |
| ----------           | -------------------                |
| property decorator   | property ability                   |
| ---------            | ---------------                    |
| img address          | string value coping from website   |
| alternativ for image | string value if image doesnt show  |
| text for figcaption  | string value for figcaption output |

#### form

```html
<kron-form appearance="large serif center ">
  <input />
</kron-form>
```

Attributes for kron-form
| property appearance | property ability |
| --------- | --------------- |
| fontsize | large medium small |  
| fontstyle | serif sans-serif monospace fantasy |
| placement website | right left center |
| placcement artice | text.Right text.Left text.Center |

må endres etterpå
![Navbar](https://i.gyazo.com/770f99891fc1efb34ff785f08d834b50.png)
