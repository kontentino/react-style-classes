![Kontentino - Making social media a piece of cake](https://static.kontentino.com/img/logo/logo.svg)

# react-style-classes by [Kontentino](https://www.kontentino.com/)

**GITHUB:** [react-style-classes](https://github.com/kontentino/react-style-classes)

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

#### Automatically filters boolean values
```javascript
<div className={ classes("className1", "className2", isModalVisible && style.modalWrapperVisible) } />
```
