'use strict';

function jediName(firstName, lastName) {
  return `${lastName.slice(0,3)}${firstName.slice(0,2)}`
}

// jediName("Beyonce", "Knowles")

function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log('And beyond')
  } else if (num > 0 && num < Infinity) {
    console.log('To infinity');
  } else if (num < 0 && num > -Infinity) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('staying home');
  }
}

// beyond(100)

function decode(word) {
  switch(word[0]) {
  case 'a': return word[1];
  case 'b': return word[2];
  case 'c': return word[3];
  case 'd': return word[4];
  default: return ' ';
  }
}

function decodeMessage(sentence) {
  return sentence
    .split(" ")
    .map(decode)
    .join("")
}

// let secretMessage = 'craft block argon meter bells brown croon droop';
// console.log(decodeMessage(secretMessage));

function daysInMonth(month, leapYear=false) {
  const months = {
    'January': 31,
    'Febuary': 28,
    'March': 31,
    'April': 30,
    'May': 31,
    'June': 30,
    'July': 31,
    'August': 31,
    'September': 30,
    'October': 31,
    'November': 30,
    'December': 31
  };

  if (!months[month]) {
    throw new Error('Must provide a valid month');
  }

  let days = months[month];
  if (month === 'Febuary' && leapYear) {
    days += 1;
  }

  return `${month} has ${days} days.`;
}

// console.log(daysInMonth('March'));




