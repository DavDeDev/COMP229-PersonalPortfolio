// IIFE -> Immediately Invoked Function Expression
(function(){
    function Start(){
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();

//To display the resume
app.get('/asset', function(request, response){
    var tempFile="/public/assets/images/Resume.pdf";
    fs.readFile(tempFile, function (err,data){
       response.contentType("application/pdf");
       response.send(data);
    });
  });