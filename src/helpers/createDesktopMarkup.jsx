export function makeDesktopList(data) {
  const firstCol = [
    'Starry Night',
    'The Storm on the Sea of Galilee',
    'Lady with an Ermine',
    'The Boy in the Red Vest',
  ];

  const secondCol = [
    'Girl with a Pearl Earring',
    'The Great Wave off Kanagawa',
    'The Night Café',
    'Arnolfini Portrait',
  ];
  const thirdCol = ['Guernica', 'Van Gogh self-portrait', 'Mona Lisa'];

  // const fourthCol = [
  //   'Penitent Magdalene',
  //   'The Sleeping Gypsy',
  //   'The Basket of Apples',
  //   'The Swing',
  // ];

  let one = [];
  let two = [];
  let three = [];
  let four = [];

  data.forEach(painting => {
    if (firstCol.includes(painting.name)) {
      one.push(painting);
    } else if (secondCol.includes(painting.name)) {
      two.push(painting);
    } else if (thirdCol.includes(painting.name)) {
      three.push(painting);
    } else {
      four.push(painting);
    }
  });

  return {
    firstColumn: one,
    secondColumn: two,
    thirdColumn: three,
    fourthColumn: four,
  };
}
