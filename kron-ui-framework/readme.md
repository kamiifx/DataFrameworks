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







#### Navbar
```html
<kron-navbar> 
    <a href="#"> Home</a>
</kron-navbar>
```
| appearance | navlogo | contactlogo | 
| ------ |     ----- |     ---- | 
| color  |     ----- |     ---- | 
------   |     ----  |     ---- |
------   |     ----- |     ---- |

