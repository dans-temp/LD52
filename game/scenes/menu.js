import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const guy = {}

export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'menu'});
	},
	preload: function()
	{
		// TODO
		this.load.audio("title_theme", "assets/music/title_theme.mp3");
		this.load.spritesheet("idle_title",
		"assets/sprites/idle.png",
		{frameWidth: 20, frameHeight: 16}
	);
		
	},
	create: function()
	{

		this.anims.create({
            key: "idle_title",
            frames: this.anims.generateFrameNumbers("idle_title", {start: 0, end: 12}),
            frameRate: 10,
            repeat: -1
        });

		guy.sprite = this.add.sprite(WIDTH_CANVAS/4, HEIGHT_CANVAS/4, "idle_title").setDisplaySize(320, 256).setDepth(2);
		guy.sprite.play("idle_title", true);
		// TODO
		this.music = this.sound.add("title_theme", {volume: 0.7});
		this.music.loop = true;
		this.music.play()
		



		const start_game_text = this.add.text(WIDTH_CANVAS/5+ 75, HEIGHT_CANVAS/5 - 140, "CROP NINJA", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "48px"}).setOrigin(0.5).setDepth(2);
		const credit_text = this.add.text(WIDTH_CANVAS/5+ 75, HEIGHT_CANVAS/5 + 300, "MADE BY: DAN", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "22px"}).setOrigin(0.5).setDepth(2);
		const start = this.add.text(WIDTH_CANVAS/5+ 75, HEIGHT_CANVAS/5 + 250, "HIT SPACE TO START", {fontFamily: FONT_DEFAULT, color: "white", fontSize: "32px"}).setOrigin(0.5).setDepth(2);


		this.cursors = this.input.keyboard.addKeys("ENTER,SPACE");
	},
	update()
	{
		if(this.cursors.ENTER.isDown || this.cursors.SPACE.isDown)
		{
			this.music.stop();
			this.scene.start("gameplay");
		}
	}
});