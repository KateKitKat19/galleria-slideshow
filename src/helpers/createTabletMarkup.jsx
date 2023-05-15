export function makeTabletList(data) {
  let firstCol = [
    'Starry Night',
    'Guernica',
    'The Storm on the Sea of Galilee',
    'Van Gogh self-portrait',
    'Lady with an Ermine',
    'The Boy in the Red Vest',
    'Mona Lisa',
  ];
  // let secondCol = [
  //   'Girl with a Pearl Earring',
  //   'Penitent Magdalene',
  //   'The Great Wave off Kanagawa',
  //   'The Sleeping Gypsy',
  //   'The Night Café',
  //   'The Basket of Apples',
  //   'Arnolfini Portrait',
  //   'The Swing',
  // ];

  let one = [];
  let two = [];
  data.forEach(painting => {
    if (firstCol.includes(painting.name)) {
      one.push(painting);
    } else {
      two.push(painting);
    }
  });

  return { firstColumn: one, secondColumn: two };
}
