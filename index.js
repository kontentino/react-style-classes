'use-strict';

module.exports = function(){
  return Array.from(arguments).filter(function(item) {
    return !!item;
  }).join(" ");
}
