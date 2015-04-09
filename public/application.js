angular.module('myApp', []);

function Ctrl($scope) {
  $scope.snack;
  $scope.vacation;
  $scope.clothing;
  $scope.step1;
  $scope.step2;
  $scope.step3;
  $scope.step4;
  $scope.president;
  $scope.quiz = 0;

  $scope.selectSnack = function(snack) {
    $("input[value=cherries").prop('checked', true);
    $scope.snack = snack;
    $scope.step1 = true;
    $scope.quiz++;
  };

  $scope.selectState = function(vacation) {
    $scope.step2 = true;
    $scope.vacation = vacation;
    $scope.quiz++;
  };    

  $scope.selectAnimal = function(animal) {        
    $scope.step3 = true;
    $scope.animal = animal;
    $scope.quiz++;
  };
  
  $scope.selectClothing = function(clothing) {        
    $scope.quiz++;
    if ($("input[value="+clothing+"]").is(':checked')) {
      $("input[value="+clothing+"]").prop('checked', false);
      return;
    }
    
    var limit = $("input[type=checkbox][name=clothing]:checked").length >= 2;         
    $("input[type=checkbox][name=clothing]").not(":checked").attr("disabled",limit);    
    
    if(limit) return;

    $("input[value="+clothing+"]").prop('checked', true);
    var limit = $("input[type=checkbox][name=clothing]:checked").length >= 2; 
    if (limit) {
      if($scope.clothingChecked('hat')) {
        $scope.clothing = 'hat'
      };
      $scope.step4 = true;    
    } 
  };

  $scope.clothingChecked = function(clothing) {
    return $("input[value="+clothing+"]").is(':checked');
  }

  $scope.showPresident = function() {    
    if ($scope.animal == 'bear')
      return $scope.president = 'teddy';    
    if ($scope.snack == 'jellybeans')
      return $scope.president = 'reagan';    
    if ($scope.snack == 'dog')
      return $scope.president = 'coolidge';
    if ($scope.clothing == 'hat')
      return $scope.president = 'lincoln';
    if ($scope.clothing == 'socks')
      return $scope.president = 'ike';    
    if ($scope.clothing == 'boots')
      return $scope.president = 'w-bush';     
    if ($scope.snack == 'pigs')
      return $scope.president = 'ford';
    return $scope.president = 'hw-bush';  
  };

  $scope.$watch('quiz', function() {
    if ($scope.step1 && $scope.step2 && $scope.step3 && $scope.step4) {
      $scope.showPresident()
    };
  }, true);
  
  $scope.presidentOptions = {
    'teddy': { 'name': 'Teddy Roosevelt', 'content':'Generic wordage for Teddy Roosevelt.'},
    'reagan': { 'name': 'Ronald Reagan', 'content': 'Put down the Soviets.'}, 
    'ford': { 'name': 'Gerald Ford', 'content': 'Was awesome at football.'}, 
    'coolidge': { 'name': 'Calvin Coolidge', 'content': 'Probably rode in a Model-T.'}, 
    'ike': { 'name':'Dwight Eisenhower', 'content': 'This man needs no introduction, he saved the world from Nazis.'}, 
    'lincoln': { 'name': 'Abe Lincoln', 'content': 'Saved the Union and ended slavery.'}, 
    'hw-bush': { 'name': 'George HW. Bush',  'content': 'This man has jumped out of a buring plane.'}, 
    'w-bush': { 'name': 'George W Bush', 'content': 'Probably the coolest neighboor you could ever have.'}, 
  };

}
