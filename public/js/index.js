///////////////////
//
// Filename: index.js
// Author: Daniel Long
// Course: ICS4U1
// Description: Contains relevant page content information and functions for index.html
//
///////////////////

// Variables
// Contains the metadata necessary for determining 
// when sections of the page load
var pageContentInfo = [
  {
    "scrollPosition": 0,
    "className": "introduction-section",
    "loaded": false
  },
  {
    "scrollPosition": 100,
    "className": "introduction-section-2",
    "loaded": false
  },
  {
    "scrollPosition": 800,
    "className": "asymmetric-encryption-section",
    "loaded": false
  },
  {
    "scrollPosition": 1500,
    "className": "rsa-encryption-section",
    "loaded": false
  },
  {
    "scrollPosition": 1900,
    "className": "quantum-computing-section",
    "loaded": false
  },
  {
    "scrollPosition": 2400,
    "className": "quantum-computing-problems-section",
    "loaded": false
  },
  {
    "scrollPosition": 3000,
    "className": "quantum-computing-problems-section-2",
    "loaded": false
  },
  {
    "scrollPosition": 3600,
    "className": "quantum-computing-solutions-section",
    "loaded": false
  },
  {
    "scrollPosition": 4200,
    "className": "quantum-computing-solutions-section-2",
    "loaded": false
  }
]

// Functions
function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}