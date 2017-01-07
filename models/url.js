// this sets up my url generator module
exports.URL_Short = (link)=>{
  var abc = 'ABCDEFGabcdefg123456789';
  var URL_text_length = 7;
  var URL_text = '';

  for(var i = 0; i < URL_text_length; i++){
    URL_text += abc.charAt((Math.random()) * abc.length);

  };
  return URL_text;
}
