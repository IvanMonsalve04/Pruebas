var colorPicker = new iro.ColorPicker("#picker", {
    width: 320,
    color: "#f00"
  });

  var hex = colorPicker.color.hexString;
console.log(hex);

colorPicker.color.hsl = { h: 180, s: 100, l: 50 };

colorPicker.on('color:change', function(color) {
   
    
  });