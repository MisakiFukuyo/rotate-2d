module.exports = function(x, y, rad){
  const nx = Math.cos(rad) * x - Math.sin(rad) * y;
  const ny = Math.sin(rad) * x + Math.cos(rad) * y;
  return {x: nx, y: ny};
};
