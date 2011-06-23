var lang;
var languages = ["en_gb", "en_us", "en_ie", "fr"];
var def = "en_gb"; // default language

function initLanguages(){
  lang = buildAllLanguages(); // Set the global variable to our built languages
  renderPicker(); // Render a dropdown language picker if we can
  updateLanguage(def); // Update the language for the first time to our default
}  

function buildAllLanguages(){ // Takes the language files & builds them into an object
  var ret = new Object();
  for (var i=0; i<languages.length; i++){
    var clIndex = languages[i]; // Current language index: Language identifier string, e.g. "en_gb"
    var clValue = this[clIndex]; // Current language value. Look for a global by the name clIndex, e.g. this["en_gb"]
    ret[clIndex] = clValue; // Append this to our return object with the clIndex as the array key, e.g. ret[en_gb] = clValue;
  }
  return ret;
}

function changeLanguage(form){
  var lCode = form.options[form.selectedIndex].value;
  updateLanguage(lCode);
}
function updateLanguage(l){
  var newLanguage = lang[l]; // Look up the required language in our global
  for (id in newLanguage){ // Iterate over key and value pairs
    if (newLanguage.hasOwnProperty(id)){
      $("#" + id).html(newLanguage[id]);
    }
  }
}
function renderPicker(){
  var picker = $("#fh_lang_picker");
  if (picker){ 
    for (l in languages){
      if (languages.hasOwnProperty(l)){
        var option = document.createElement("option");
        option.value = languages[l];
        option.innerHTML = languages[l];
        $(picker).append(option);
      }
    }

  }
}