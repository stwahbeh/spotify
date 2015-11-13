

var data;
var albumUrl = 'https://api.spotify.com/v1/search?type=album&query=' 
var trackUrl = 'https://api.spotify.com/v1/albums/'
var myApp = angular.module('myApp', [])
var accessToken;
var search;




//gets featured categories on load
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {

  $scope.audioObject = {}
  $scope.getAlbum = function() {
    $scope.notTracks = false;
    $scope.notAlbum = true;
    search = albumUrl + $scope.album 
    $http.get(search).success(function(response){
      data = $scope.albums = response.albums.items 
      $scope.notTracks = !$scope.notTracks; 
  
    })

  }
  //pre-loads categories
  //$scope.getCategories(); 

$scope.switchView = function(){
   $scope.notTracks = false;
   $scope.notAlbum = true;
   $http.get(search).success(function(response){
      data = $scope.albums = response.albums.items 
      $scope.notTracks = !$scope.notTracks; 
})
 }

// {category_id}/playlists
  $scope.getTracks = function(category){
    var id = category;
    $scope.notTracks = true;
    $scope.notAlbum = false;
    $scope.trackObject = {}
    $http.get(trackUrl + id + '/tracks').success(function(response){  
    console.log(response);
    data = $scope.tracks = response.items
    console.log(data);
   
    $scope.notAlbum = !$scope.notAlbum; 
    console.log("clear albums");


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
