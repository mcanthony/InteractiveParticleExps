// app.js
window.bongiovi = require("./libs/bongiovi.js");
window.Sono     = require("./libs/sono.min.js");
var dat = require("dat-gui");

window.params = {
	numParticles:512*2,
	skipCount:10
};

(function() {
	var SceneApp = require("./SceneApp");

	App = function() {
		if(document.body) this._init();
		else {
			window.addEventListener("load", this._init.bind(this));
		}
	}

	var p = App.prototype;

	p._init = function() {
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.canvas.className = "Main-Canvas";
		document.body.appendChild(this.canvas);
		bongiovi.GL.init(this.canvas);

		this._scene = new SceneApp();
		bongiovi.Scheduler.addEF(this, this._loop);

		// this.gui = new dat.GUI({width:300});


		this.stats = new Stats();
		document.body.appendChild(this.stats.domElement);
	};

	p._loop = function() {
		this._scene.loop();
		this.stats.update();
	};

})();


new App();