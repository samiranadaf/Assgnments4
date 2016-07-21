function leap_year(from, to) {
  for (var i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      console.log(i + ' ' + "Leap Year");
    }
    else {
      console.log(i + ' ' + "not Leap Year");
    }
  }
}
leap_year(2000, 2016);