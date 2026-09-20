import Phaser from "phaser";
import { BootScene } from "./scenes/BootScene";
import { GameScene } from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "game-container",
  pixelArt: true, // Mantém a nitidez da Pixel Art do Piskel
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }, // Jogo top-down / arena
      debug: true, // Ativo no início para visualizar hitboxes
    },
  },
  scene: [BootScene, GameScene],
};

new Phaser.Game(config);
