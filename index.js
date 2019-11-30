var displayMode = 'full';

var hours = process.argv.slice(2);
var totalSeconds = hours.reduce(function(total, hour) {
    if ('--seconds' === hour) {
      displayMode = 'seconds';
      return total;
    }
    if ('--hours' === hour) {
      displayMode = 'hours';
      return total;
    }
    var tokens = hour.replace('h', ':').replace('m', ':').replace('s', ':').split(':');
    if (tokens.length >= 3)
        return total + 3600 * tokens[0] + 60 * tokens[1] + 1 * tokens[2];
    else if (tokens.length == 2)
        return total + 3600 * tokens[0] + 60 * tokens[1];
    else if (tokens.length == 1)
        return total + 3600 * tokens[0];
    else
        return total;
}, 0);

if (displayMode === 'seconds') {
  console.log(totalSeconds);
}
else if (displayMode == 'hours') {
  console.log(totalSeconds / 3600);
}
else {

  var h = Math.floor(totalSeconds / 3600);
  totalSeconds -= h * 3600;
  var m = Math.floor(totalSeconds / 60);
  totalSeconds -= m * 60;
  var s = Math.floor(totalSeconds);

  function w0(s) { return s > 9 ? s : '0' + s; }

  console.log('' + h + ':' + w0(m) + ':' + w0(s));
}
