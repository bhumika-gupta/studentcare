var container = $('.container');

//first button
var buttonStudying = $('.studying-btn');

buttonStudying.on("click", showStudyingMusic);

function showStudyingMusic() {
  event.preventDefault();
  container.text("");

  container.append(`
    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6?theme=0" width="40%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
  `);
}
var container = $('.container');

//second button
var buttonPiano = $('.piano-btn');

buttonPiano.on("click", showPianoMusic);

function showPianoMusic() {
  event.preventDefault();
  container.text("");

  container.append(`
  <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO?theme=0" width="40%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  `);
}

//third button
var buttonSoftpop = $('.soft-pop-btn');

buttonSoftpop.on("click", showSoftpopMusic);

function showSoftpopMusic() {
  event.preventDefault();
  container.text("");

  container.append(`<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTwnEm1IYyoj?theme=0" width="40%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  `);
}

// do the same for rest of 4 buttons 
var container = $('.container');
var buttonJazz = $('.jazz-btn');

buttonJazz.on("click", showCoffyTableJazz);

function showCoffyTableJazz() {
  event.preventDefault();
  container.text("");

  container.append(`
  <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVqfgj8NZEp1?theme=0" width="40%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
  `);
}

var container = $('.container');
var buttonCoffeehouse = $('.coffeehouse-btn ');

buttonCoffeehouse.on("click", showCoffeehouse);

function showCoffeehouse() {
  event.preventDefault();
  container.text("");

  container.append(`<iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX6ziVCJnEm59?theme=0" width="40%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  `);
}