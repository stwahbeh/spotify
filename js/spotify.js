

var data;
var albumUrl = 'https://api.spotify.com/v1/search?type=album&query=' 
var trackUrl = 'https://api.spotify.com/v1/search?type=track&query='
var myApp = angular.module('myApp', [])
var accessToken;




//gets featured categories on load
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {

  $scope.audioObject = {}
  $scope.getAlbum = function() {
    
    $http.get(albumUrl + $scope.album).success(function(response){
      data = $scope.albums = response.albums.items  
      console.log(data);  
  
    })

  }
  //pre-loads categories
  //$scope.getCategories(); 



//{category_id}/playlists
  $scope.getTracks = function(category){
    $('#display').empty()
    $scope.trackObject = {}
    $http.get(trackUrl + $scope.track).success(function(response){
    data = $scope.tracks = response.tracks.items

    })
  }


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
