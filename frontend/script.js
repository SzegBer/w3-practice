
let favoriteBooks = [
  {
      title: "Öreg néne őzikéje",
      author: "Fazekas Anna",
      year: 1952,
      isNewerThan2000: false,
  },
  {
      title: "Szamárfül",
      author: "Romhányi József",
      year: 2003,
      isNewerThan2000: true
  }
]


/*
for (let index = 0; index < favoriteBooks.length; index++) {
  const element = favoriteBooks[index].author;
  const element2 = favoriteBooks[index].title;
  console.log("Író:", element)
  console.log("Címe a könyvnek:", element2)
}
*/



/*
for (let index = 0; index < favoriteBooks.length; index++) {
  if (favoriteBooks[index].isNewerThan2000 === true) {
  console.log(favoriteBooks[index].title + " bizony ez egy újabb könyv")
  } else {
    console.log(favoriteBooks[index].title + " bizony ez egy régebbi könyv")
  }

}*/



console.log("5ös feladat")

/*5ös feladat*/

for (let index = 0; index < favoriteBooks.length; index++) {
  if (favoriteBooks[index].isNewerThan2000 !== true) {
    console.log(favoriteBooks[index].title + " - bizony ez egy régebbi könyv (2000 előtti)")

  } else {
    console.log(favoriteBooks[index].title + " - bizony ez egy újabb könyv (2000 utáni)")
  }
}



/*6os feladat*/

console.log("6os feladat")

for (let index = 0; index < favoriteBooks.length; index++) {
  if (favoriteBooks[index].year < 2000) {
    console.log(favoriteBooks[index].title + " - bizony ez egy régebbi könyv (2000 előtti)")

      } else {
    console.log(favoriteBooks[index].title + " - bizony ez egy újabb könyv (2000 utáni)")
  }
}


