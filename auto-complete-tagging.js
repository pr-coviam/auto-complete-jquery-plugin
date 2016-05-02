var wordlist = [
    'Basic',
    'Closure',
    'Cobol',
    'Delphi',
    'Erlang',
    'Earning',
    'Fortran',
    'Go',
    'Goa',
    'Guava',
    'Gym',
    'Garden',
    'Gear',
    'Gojava',
    'Groovy',
    'Haskel',
    'Java',
    'JavaScript',
    'OCAML',
    'PHP',
    'Perl',
    'Python',
    'Ruby',
    'Scala'
];
var selectedWords = [];
var words = [];

$("#autotagging").keyup(function() {
    var textEntered = $("#autotagging").val().toLowerCase();
    
    
    if (textEntered !== "") {
        showWordList(textEntered);
    }
    else{
    		$("#suggestions").html("");
    }

});

function showWordList(textEntered){
				var sentence = "";
				for (var i = 0; i < wordlist.length; i++) {
 					if($.inArray(wordlist[i],selectedWords) === -1){
            if (wordlist[i].toLowerCase().indexOf(textEntered) === 0) {
                words.push(wordlist[i]);
								sentence += '<li class = "text" data-id = "'+wordlist[i]+'"> ' + wordlist[i] + '</li> ';
            }
          }
        }
        $("#suggestions").html(sentence);
}


 function showSelectedWords(){
	selectedWordsHtml = "";
	for(var i = 0; i < selectedWords.length ; i++){
    
  		selectedWordsHtml += '<span class ="selectedText" data-id = "'+selectedWords[i]+'">'+selectedWords[i]+'<span class="remove"> &#9747; </span></span>';
     
  }
  $('#selections').html(selectedWordsHtml);
  $('#selected_count').html(selectedWords.length);
}


$('#suggestions').on("click",".text",function(){
	var selectedWord = $.trim($(this).data("id"));
	selectedWords.push(selectedWord);
  var textEntered = $("#autotagging").val();
  $("#suggestions").html("");
 	showWordList(textEntered);
  showSelectedWords();
});


$('#selections').on("click",".remove",function(){
var selectedWord = $.trim($(this).parent().data("id"));
selectedWords.splice( $.inArray(selectedWord, selectedWords), 1 );
 var textEntered = $("#autotagging").val();
 if (textEntered !== "") {
        showWordList(textEntered);
    }
    else{
    		$("#suggestions").html("");
    }
  showSelectedWords();
});







