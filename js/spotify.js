

var data;
var artistUrl = 'https://api.spotify.com/v1/search?q='
var albumsUrl = 'https://api.spotify.com/v1/artists/{id}/albums'
var trackUrl = 'https://api.spotify.com/v1/albums/{id}/tracks'
var myApp = angular.module('myApp', [])
var accessToken;



//gets featured categories on load
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  

  $scope.imageObject = {}
  $scope.getArtist = function() {
    var q = $('artistFirst') + '&20' + $('artistLast')
    console.log(q);
    $http.get(artistUrl + q).success(function(response){
      console.log("1");
      data = $scope.artist = response.artist.id 
      console.log('2');     
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
