angular.module('post-app', ['post-app.postService', 'post-app.postController']);


.controller('PostController', function($http){
  var vm = this;
  vm.posts = [];
  vm.postForm = '';
  $http.get('/api/posts').success(function(data){
    vm.posts = data;
  }).error(function(data){
    console.log(data);
  });

  vm.createPost = function(){
    var text = vm.text;
    var name = vm.name;
    vm.text = '';
    vm.name = '';
    $http.post('/api/posts', {
      name:name,
      text:text
    }).success(function(data){
      vm.posts = data;
    }).error(function(data){
      console.log(data);
    });
  };
});