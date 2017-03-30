/*Activity

Create a function in lib/mbta.js to calculate the number of stops between statio
ns on the "MBTA". Write additional functions used by this function as needed.
The function takes the line and stop that a rider is getting on at and the line
and stop that a rider is getting off at and returns the total number of stops fo
r the trip.
There are 3 subway lines:

All 3 subway lines intersect at Park Street, but there are no other intersection
 points. Some of this MBTA is fictionalized.
Hints

Assume good input. Your function need not check the validity of the line or stop.
Consider diagramming the lines by sketching out the subway lines and their stops
 and intersection.
Subway lines are keys in a dictionary (object literal), while the values are a
list (array) of all the stops on each line.
The key to the practice is to find the intersection of the lines at Park Street.
Solve an easier problem first.*/

'use strict'

// Code here.
/*
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

const red = ['South Station', 'Park Street', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife']
const green = ['Government Center', 'Park Street', 'Boylston', 'Arlington', 'Copley', 'Hynes', 'Kenmore']
const orange = ['North Station', 'Haymarket', 'Park Street', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']

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


/*
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
