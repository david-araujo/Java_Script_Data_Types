/**
 *@name: scroll.js
 *@description: Scroll event that modifies the way header and content-wrapper
 *Behaves. Important to observe the tags on index.html and its built there.
 *Excellent alternative, code less, build more.
 */

app.directive('scrollHeader', function($window){
  return function(scope, element, attrs){
    angular.element($window).bind('scroll', function(){
      if(this.pageYOffset >= 100){
        scope.headAnimate = true;
        console.log("Scrolled bellow header.");
      }else{
        scope.headAnimate = false;
        console.log("Header is viewed.");
      }
      scope.$apply();
    });
  };
});


app.directive('scrollNav', function($window){
  return function(scope, element, attrs){
    angular.element($window).bind('scroll', function(){
      if(this.pageYOffset >= 147){
        scope.navAnimate = true;
        console.log("Scrolled bellow Nav");
      }else{
        scope.navAnimate = false;
        console.log("Nav is viewed");
      }
      scope.$apply();
    });
  };
});
