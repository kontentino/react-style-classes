'use-strict';

export default function(){
  return Array.from(arguments).filter(function(item) {
    return !!item;
  }).join(" ");
}
