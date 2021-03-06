// ViewSphere.js

var GL = bongiovi.GL;
var gl;

function ViewSphere() {
	bongiovi.View.call(this, bongiovi.ShaderLibs.get("generalVert"), bongiovi.ShaderLibs.get("simpleColorFrag"));
}

var p = ViewSphere.prototype = new bongiovi.View();
p.constructor = ViewSphere;


p._init = function() {
	gl = GL.gl;
	this.mesh = bongiovi.MeshUtils.createSphere(3, 10);
};

p.render = function(pos, color) {
	color = color || [ 1, 1, 1];
	this.shader.bind();
	this.shader.uniform("position", "uniform3fv", pos || [0, 0, 0]);
	this.shader.uniform("scale", "uniform3fv", [1, 1, 1]);
	this.shader.uniform("color", "uniform3fv", color);
	this.shader.uniform("opacity", "uniform1f", 1);
	GL.draw(this.mesh);
};

module.exports = ViewSphere;