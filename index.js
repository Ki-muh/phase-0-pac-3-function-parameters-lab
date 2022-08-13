function introduction(name) {
    return(`Hi, my name is ${name}.`);
  }
  hiMyNameIs("Aki"); 
  hiMyNameIs("Samip"); 

  function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  }
  
  hiMyNameIs("Aki");andIAmLearningToCodeIn(Ember.js);
  hiMyNameIs("Samip");andIAmLearningToCodeIn(React);
  
  function introductionWithLanguageOptional(name, JavaScript) {
    return(`Hi, my name is ${name} and I am learning to program in ${JavaScript}.`);
  }
  
  hiMyNameIs("Aki");andIAmLearningToCodeIn("Ember.js");
  hiMyNameIs("Samip");andIAmLearningToCodeIn("React");
  
  function introductionWithLanguageOptional(name, JavaScript) {
    return(`Hi, my name is ${name} and I am learning to program in ${JavaScript}.`);
  }
  
  hiMyNameIs("Gracie");andIAmLearningToCodeIn("JavaScript");
  hiMyNameIs("Gracie");andIAmLearningToCodeIn("JavaScript");
  
