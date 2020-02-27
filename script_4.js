console.log("exercice 4");

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Quels entrepeneurs sont nés dans les années 70 ?")

let entrepreneurs70 = entrepreneurs.filter(function(entrepreneur) {
  return entrepreneur.year >= 1970 ;   
});


let methode = entrepreneurs70.filter(entrepreneur70 => entrepreneur70.year <= 1980);
console.log(methode) 






console.log("Voici une array qui contient le prénom et le nom des entrepreneurs ")


entrepreneursfirst = [];
  for (let i=0; i < entrepreneurs.length ; i++){
    entrepreneursfirst[i]={ first: entrepreneurs[i].first,last: entrepreneurs[i].last};
  }
  console.log(entrepreneursfirst);





  console.log("Voici une array avec l'age des entrepreneurs d'aujourd'hui")


  entrepreneursage = [];
  for (let i=0; i < entrepreneurs.length ; i++){
    entrepreneursage[i]={first: entrepreneurs[i].first,last: entrepreneurs[i].last, age: (2020-entrepreneurs[i].year)}
  }
  console.log(entrepreneursage);

