![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)

# react-style-classes by [Kontentino](https://github.com/kontentino/react-style-classes)

**GITHUB:** [react-style-classes]()

Javascript package for merge arguments of component style classnames or merge another arguments.

## Installation
`$ npm install react-style-classes`
or
`$ yarn add react-style-classes`

## Usage
```react
const classes = require('react-style-classes');
```
or
```react
import * as classes from 'react-style-classes';
```

### Example
```react
<div className={ classes("className1", "className2") } />
```
or
```react
<div className={ classes("className1", "className2", style.container) } />
```

#### Boolean values
```react
<div className={ classes("className1", "className2", isModalVisible && style.modalWrapper) } />
```