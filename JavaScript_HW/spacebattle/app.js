//Define an array six Aliens
const alienArray = [];
//Count the number of Aliens
var alienCount = 0;
//Define an actor class for the game
class Actor {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack() {
    if (alienCount >= 6) {
      $('#game-text').append('');
      $('#game-text').append(
        `<div class="action">You won! ${spaceShip.name} has defeated the aliens!<br></div>`
      );
    } else {
      if (Math.random() < spaceShip.accuracy) {
        alienArray[alienCount].hull =
          alienArray[alienCount].hull - spaceShip.firepower;
        if (alienArray[alienCount].hull <= 0) {
          $('#game-text').append(
            `<div class="action">${alienArray[alienCount].name} ${
              alienCount + 1
            } is destroyed<br></div>`
          );
          i++;
        } else {
          alienAttack();
        }
      } else {
        $('#game-text').append(
          `<div class="action">${spaceShip.name} has missed...<br></div>`
        );
        alienAttack();
      }
    }
  }
  retreat() {
    $('#game-text').append(
      `<div class="action">${this.name} has retreated! Game over!</div>`
    );
    var alienCount = 0;
  }
}
