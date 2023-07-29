import inquirer from 'inquirer';
import Player from './Player.js'
import Enemy from './Enemy.js';

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

    Game.prototype.initializeGame = function () {
        this.enemies.push(new Enemy('goblin' , 'sword'));
        this.enemies.push(new Enemy('orc', 'bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));

        this.currentEnemy = this.enemies[0];

        inquirer
        .prompt({
            type:'text',
            name: 'name',
            message: 'What is your name?'
        })
        .then(({name}) => {
            this.player = new Player(name);

            console.log(this.currentEnemy, this.player);
        });
    }
}
export default  Game;