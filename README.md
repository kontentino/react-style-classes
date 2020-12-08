![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)

# react-style-classes by [Kontentino](https://www.kontentino.com/)

[![](https://github.com/kontentino/react-style-classes/workflows/Test/badge.svg)](https://github.com/kontentino/react-style-classes/actions)
[![npm](https://img.shields.io/npm/v/react-style-classes?style=plastic)](https://www.npmjs.com/package/react-style-classes)
[![NPM](https://img.shields.io/npm/l/react-style-classes)](https://github.com/kontentino/react-style-classes/blob/master/LICENSE)

Javascript package for merge arguments of component style classnames or merge another arguments.

## Installation
`$ npm install react-style-classes`
or
`$ yarn add react-style-classes`

## Usage
```javascript
import classes from 'react-style-classes';
```

### Example
```javascript
<div className={ classes("className1", "className2") } />
```
or use CSS modules
```javascript
<div className={ classes("className1", "className2", style.container) } />
```

or even use Array
```javascript
<div className={ classes("className1", "className2", ['class1', 'class2']) } />
```

#### Automatically filters boolean values
```javascript
<div className={ classes("className1", "className2", isModalVisible && style.modalWrapperVisible) } />
```
