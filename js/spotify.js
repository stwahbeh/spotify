//2ca5d9af099947f18a90d7b1effa0c84 spotify Client ID  
//ab2a2536b6524864bbe2071afdf8caa9 spotify secret Client ID
var data;
var catPlaylistUrl = 'https://api.spotify.com/v1/browse/categories/'
var categoriesUrl = 'https://api.spotify.com/v1/browse/categories/{category_id}'
var myApp = angular.module('myApp', [])


//gets featured categories on load
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  
  $scope.imageObject = {}
  $scope.getCategories = function() {
    $http.get(categoriesUrl).success(function(response){
      data = $scope.categories = response.categories.images 
      console.log(data);     
    })

  }
  $scope.getCategories();



//{category_id}/playlists
//   $scope.getPlaylists = function(category){
//     $('#display').empty()
//     $scope.playlistObject = {}
//     $http.get(catPlaylistUrl + $scope.genre).success(function(response){
//       data = $scope.playlists = response.genre.images

//     })
//   }



  //plays songs
  $scope.play = function(song) {
    if($scope.currentSong == song) {
      $scope.audioObject.pause()
      $scope.currentSong = false
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }
})


// Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});