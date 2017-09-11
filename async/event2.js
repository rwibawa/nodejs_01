const Countdown = require('./event.js');

function launch() {
   return new Promise(function(resolve, reject) {
      console.log("Lift off!");
      setTimeout(function() {
         resolve("In orbit!");
      }, 2*1000);    // a very fast rocket indeed
   });
}

const c = new Countdown(5)
   .on('tick', i => console.log(i + '...'));

c.go()
   .then(launch)
   .then(function(msg) {
      console.log(msg);
   })
   .catch(function(err) {
      console.error("Houston, we have a problem....");
   })