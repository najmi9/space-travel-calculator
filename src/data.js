const c = 299792458;
const starsGlaxies = [
    { 'star': 'Alpha Centauri', 'distance': 41343259000000000 },
    { 'star': 'Sirius', 'distance': 81362020000000000 },
    { 'star': 'Vega', 'distance': 236517500000000000 },
    { 'star': 'Canopus', 'distance': 2932817000000000000 },
    { 'star': 'Polaris', 'distance': 4068101000000000000 },
    { 'star': 'Antares', 'distance': 5203385000000000000 },
    { 'star': 'Pleiades', 'distance': 4200550800000000000 },
    { 'star': 'Betelgeuse', 'distance': 6054848000000000000 },
    { 'star': 'Rigel', 'distance': 8164584100000000000 },
    { 'star': 'Galactic Center of Milky Way', 'distance': 263953530000000000000 },
    { 'star': 'Andromeda Galaxy', 'distance': 23840964000000000000000 }
];
const exoplanets = [
    { 'exoplanet': 'Proxima Centauri b', 'distance': 39924154000000000 },
    { 'exoplanet': 'Rass 128b',   'distance': 104351521000000000 },
    { 'exoplanet': 'Teegarden b', 'distance': 107851980000000000 },
    { 'exoplanet': 'Kapteyn b',   'distance': 122989100000000000 },
    { 'exoplanet': 'Gliese 832c', 'distance': 151371200000000000 },
    { 'exoplanet': 'TRAPPIST-1d', 'distance': 378428000000000000 },
    { 'exoplanet': 'LHS 1140 b',  'distance': 378427900000000000 },
    { 'exoplanet': 'Galileo',     'distance':     386942630000000000 },
    { 'exoplanet': 'HD 42936 Ab', 'distance': 1508887043000000000 },
    { 'exoplanet': 'Kepler-452b', 'distance': 13263901400000000000 },
    { 'exoplanet': 'Kepler-442b', 'distance': 12219440120000000000 },
    { 'exoplanet': 'Kepler-443b', 'distance': 24030178000000000000 }
];
const PlantesOrDwarf = [
    {'planet' :'Sun' , 'distance': 149597870700},
    {'planet' : 'Mars' , 'distance':78340000000 },
    {'planet' :'Jupiter' , 'distance':628730000000},
    {'planet' :'Saturn' , 'distance':1275000000000 },
    {'planet' :'Uranus' , 'distance': 2723950000000},
    {'planet' :'Neptune' , 'distance': 4351400000000},
    {'planet' :'Venus' , 'distance': 41400000000},
    {'planet' :'Mercury' , 'distance': 91691000000},
    {'planet' :'Barnard\'s Star' , 'distance': 56364012390000000},
    {'planet': 'Wolf 359', 'distance': 74323259200000000},
    {'planet': 'Lalande 21185', 'distance': 78590034900000000},
    {'planet': 'Luyten 726-8', 'distance': 83169013700000000},
    {'planet': 'Lacaille 9352', 'distance': 101429110770000000},

];


//get user data and selected units
function getDataAndUnits() {
     //----part1
    const a = parseFloat(document.querySelector("input#acceleration").value.replaceAll(',',''));
    const AccUnit = document.querySelector("select#acc-units").value;
    const m = parseFloat(document.querySelector("input#mass").value.replaceAll(',',''));
    const MassUnit = document.querySelector("select#mass-units").value;
    const d = parseFloat(document.querySelector("input#distance").value.replaceAll(',',''));
    const DistUnit = document.querySelector("select#dist-units").value;
 
    // -----part 3 -----
    const timeUnit = document.querySelector("select#time-units").value;
    const veloUnit = document.querySelector("select#velocity-units").value;
    const fuelUnit = document.querySelector("select#fuel-units").value;

    // get choosen units;
    const fuelEnergyUnit = document.querySelector("select#fuel-energy-units").value;
    const maxKEUnit = document.querySelector("select#max-kenergy-units").value;

   return {
     'a':a, 'AccUnit':AccUnit, 'm':m, 'MassUnit':MassUnit,
     'd':d, 'DistUnit':DistUnit, 'timeUnit': timeUnit, 
     'veloUnit':veloUnit, 'fuelUnit':fuelUnit, 'maxKEUnit':maxKEUnit,
     'fuelEnergyUnit':fuelEnergyUnit
   };
}

