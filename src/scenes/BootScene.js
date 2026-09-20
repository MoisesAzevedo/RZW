import Phaser from "phaser";

export class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  preload() {
    // Exemplo de carregamento futuro de assets
    // this.load.image('player', 'assets/images/player.png');
    // this.load.audio('shoot', 'assets/audio/shoot.ogg');
  }

  create() {
    // Transição imediata para iniciar a arena de combate rapidamente
    this.scene.start("GameScene");
  }
}
