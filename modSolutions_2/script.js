


(function speak (names) {

      var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
      var helloSpeaker = {
            speak() {
                 return "Hello"
                  }
            }
                  var byeSpeaker = {
                        speak() {
                            return "Good Bye"
                        }
                  }
      for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
          byeSpeaker.speak(names[i]);
        } else {
          helloSpeaker.speak(names[i]);
        }
      }
        });