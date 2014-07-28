var app = angular.module('mswq', []);

app.controller('QuizCtrl', ['$http', function($http){
    var quiz = this;
    quiz.scoreTotal = 0;

    $http.get('things.json').success(function(data){
      quiz.things = data;
    });

    this.toggleThing = function(thing) {
            quiz.scoreTotal += !thing.active ? thing.points : -1 * thing.points;
            thing.active = !thing.active;
    }

    this.reset = function() {
        quiz.scoreTotal = 0;

        quiz.things.forEach(function(e){
            e.active = false;
        });
    }

}]);
