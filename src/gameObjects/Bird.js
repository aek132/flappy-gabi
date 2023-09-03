export default class Bird extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, type) {
    super(scene, x, y, type);
    scene.add.existing(this);
    this.scene.physics.world.enable(this);
    this.setScale(0.2);
  }
}