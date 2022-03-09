function circleArea(r) {
  let area = Math.PI * r ** 2;
  console.log(area.toFixed(2));
}

function circleCircumference(r) {
  let circumference = 2 * Math.PI * r;
  console.log(circumference.toFixed(2));
}
module.exports = { circleArea, circleCircumference };
