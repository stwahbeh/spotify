

var data;
var artistUrl = 'https://api.spotify.com/v1/search?type=artist&query=' 
var albumsUrl = 'https://api.spotify.com/v1/artists/{id}/albums'
var trackUrl = 'https://api.spotify.com/v1/albums/{id}/tracks'
var myApp = angular.module('myApp', [])
var accessToken;



//gets featured categories on load
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {

  $scope.audioObject = {}
  $scope.getArtist = function() {
    // var q = $scope.fArtist + '%20' + $scope.lArtist 
    $http.get(artistUrl + $scope.artist).success(function(response){
      data = $scope.artists = response.artists.items  
      console.log(data);  
  
    })

  }
  //$scope.getCategories();



//{category_id}/playlists
  $scope.getArtistAlbums = function(category){
    $('#display').empty()
    $scope.albumObject = {}
    $http.get(catPlaylistUrl + $scope.artist).success(function(response){
      data = $scope.album = response.album.images

    })
  }

  $scope.getAlbumTracks = function() {
    $('#display').empty()
    $scope.track = {}
    $http.get(trackUrl + $scope.track).success(function(response){
      data = $scope.track = response.track.images
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
