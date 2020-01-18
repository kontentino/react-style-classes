'use-strict';

module.exports = function(){
  return Array.from(arguments).filter(function(item) {
    if(Array.isArray(item)) {
      return item.length > 0;
    }
    return !!item;
  }).map(function (item) {
    if(Array.isArray(item)) {
      return item.join(" ");
    }

    return item;
  }).join(" ");
};
