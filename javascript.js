function getQuote() {

         var quotes = new Array(
            "Burn it all, burn it all, I'm starting it fresh. Cause half the time I got it right I probably guessed.", 
         "All and all I learned a lesson from it though, you never see it coming you just get to see it go.", 
         "I really can't complain, everything's kosher. Two thumbs up, Ebert and Ropart.", 
         "I've been hearing all the shit you say through the grapevine, but jealously is just love and hate at the same time.", 
         "Now she want a photo, you already know tho. You only live once, that's the motto, YOLO.",
         "I've got my eyes on you,  you're everything that I see.",
         "I get it, I get it. I get it, I get it.",
         "I just been plottin' on the low, schemin' on the low, the furthest thing from perfect like everyone I know.");

         var randomChoice = Math.floor(Math.random()* quotes.length)         

         $("#myBox").html(quotes[randomChoice]);

      }

