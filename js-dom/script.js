// Different methods to select elements
const myId = document.getElementById('myId');
const myClass = document.getElementsByClassName('myClass');
const div = document.getElementsByTagName('div');

// Modern methods (recommended)
const element = document.querySelector('#myId'); // Single element
const elements = document.querySelectorAll('.myClass'); // NodeList

// Examples
const header = document.querySelector('header');
const buttons = document.querySelectorAll('button.primary');
const firstListItem = document.querySelector('ul li:first-child');
