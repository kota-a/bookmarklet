javascript:(function(url){
  var request = new XMLHttpRequest();
  
  request.open('GET', url, true);
  request.responseType = 'text';
  
  request.onload = function () {
    // If the response is javascript code, use the following code.
    // eval(this.response);
    
    // If the response is html, use the following code.
    // (In the case of the execution javascript code is embedded in first 'pre' tag)
    var page = document.createElement('html');
    page.innerHTML = this.response;
    eval(page.getElementsByTagName('pre')[0].innerHTML);
  };
  
  request.send();
})('https://raw.githubusercontent.com/kota-a/bookmarklet/main/execution_code.js')
