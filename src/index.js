import Phaser from 'phaser';
import PlayScene from './PlayScene';

var config = {

    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 300
            },
            debug: false
        }
    },

    scene: new PlayScene()
};

const game = new Phaser.Game(config);
