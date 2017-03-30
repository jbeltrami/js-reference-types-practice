'use strict'

// Code here.
/* GIVEN FUNCTION - DIDN'T USE
const stopsBetweenStations = (startLine, startStation, endLine, endStation) => {
}
*/

/*
NOT SURE IF I NEED TO USE THIS BLOCK

let startLine = subwayLines.a
let startStation = subwayLines.a.indexOf('c')
let endLine = subwayLines.b
let endStation = subwayLines.a.indexOf('d')
*/

// Array of red line stations
const red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
// Array of green line stations
const green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
// Array of orange line stations
const orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

/* Pseudo-code
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    return absolute math for (endStation - startStation)
  } else if (startLine !== endLine) {
    return absolute math for (endStation - Park Street) + (Park Street - startStation)
  }
}
*/
const stopsBetweenStations = function (startLine, startStation, endLine, endStation) {
  if (startLine === endLine) {
    return Math.abs(endLine.indexOf(endStation) - startLine.indexOf(startStation))
  } else if (startLine !== endLine) {
    return Math.abs((endLine.indexOf(endStation) - endLine.indexOf('Park Street')) + (startLine.indexOf('Park Street') - startLine.indexOf(startStation)))
  }
}

module.exports = {
  stopsBetweenStations,
  stretch: false
}

stopsBetweenStations(orange, 'North Station', green, 'Boylston')
stopsBetweenStations(green, 'Kenmore', red, 'South Station')

/* OBJECT OF ARRAYS FOR LINES AND STATIONS. NOT SURE IF IT IS GOING TO BE USED.
const subwayLines = {
 red: [
   'South Station',
   'Park Street',
   'Kendall',
   'Central',
   'Harvard',
   'Porter',
   'Davis',
   'Alewife'
 ],
 green: [
   'Government Center',
   'Park Street',
   'Boylston',
   'Arlington',
   'Copley',
   'Hynes',
   'Kenmore'
 ],
 orange: [
   'North Station',
   'Haymarket',
   'Park Street',
   'State',
   'Downtown Crossing',
   'Chinatown',
   'Back Bay',
   'Forest Hills'
 ]
}
*/
