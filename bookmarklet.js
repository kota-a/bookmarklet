javascript:(function(url){
  var request = new XMLHttpRequest();
  
  request.open('GET', url, true);
  request.responseType = 'text';
  
  request.onload = function () {
    eval(this.response);
  };
  
  request.send();
})('https://raw.githubusercontent.com/kota-a/bookmarklet/main/execution_code.js')
