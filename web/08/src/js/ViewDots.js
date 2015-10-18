// ViewDots.js

var GL = bongiovi.GL;
var gl;
var glslify = require("glslify");
var vertices = [[0,52.573111,85.065081],[0,-52.573111,85.065081],[85.065081,0,52.573111],[85.065081,0,-52.573111],[0,52.573111,-85.065081],[0,-52.573111,-85.065081],[-85.065081,0,-52.573111],[-85.065081,0,52.573111],[52.573111,85.065081,0],[-52.573111,85.065081,0],[-52.573111,-85.065081,0],[52.573111,-85.065081,0],[29.524181,95.542256,0],[0,100,0],[-29.524181,95.542256,0],[14.76209,68.171835,71.656692],[30.901699,80.901699,50],[44.286271,86.418783,23.885564],[-14.76209,68.171835,71.656692],[-30.901699,80.901699,50],[-44.286271,86.418783,23.885564],[86.418783,23.885564,44.286271],[80.901699,50,30.901699],[68.171835,71.656692,14.76209],[23.885564,44.286271,86.418783,],[50,30.901699,80.901699],[71.656692,14.76209,68.171835],[86.418783,23.885564,-44.286271],[80.901699,50,-30.901699],[68.171835,71.656692,-14.76209],[95.542256,0,29.524181],[100,0,0],[95.542256,0,-29.524181],[14.76209,68.171835,-71.656692],[30.901699,80.901699,-50],[44.286271,86.418783,-23.885564],[71.656692,14.76209,-68.171835],[50,30.901699,-80.901699],[23.885564,44.286271,-86.418783],[-14.76209,68.171835,-71.656692],[-30.901699,80.901699,-50],[-44.286271,86.418783,-23.885564],[-86.418783,23.885564,-44.286271],[-80.901699,50,-30.901699],[-68.171835,71.656692,-14.76209],[-23.885564,44.286271,-86.418783],[-50,30.901699,-80.901699],[-71.656692,14.76209,-68.171835],[-86.418783,23.885564,44.286271],[-80.901699,50,30.901699],[-68.171835,71.656692,14.76209],[-95.542256,0,-29.524181],[-100,0,0],[-95.542256,0,29.524181],[-23.885564,44.286271,86.418783],[-50,30.901699,80.901699],[-71.656692,14.76209,68.171835],[-29.524181,-95.542256,0],[0,-100,0],[29.524181,-95.542256,0],[-14.76209,-68.171835,71.656692],[-30.901699,-80.901699,50],[-44.286271,-86.418783,23.885564],[14.76209,-68.171835,71.656692],[30.901699,-80.901699,50],[44.286271,-86.418783,23.885564],[86.418783,-23.885564,44.286271],[80.901699,-50,30.901699],[68.171835,-71.656692,14.76209],[23.885564,-44.286271,86.418783],[50,-30.901699,80.901699],[71.656692,-14.76209,68.171835],[86.418783,-23.885564,-44.286271],[80.901699,-50,-30.901699],[68.171835,-71.656692,-14.76209],[71.656692,-14.76209,-68.171835],[50,-30.901699,-80.901699],[23.885564,-44.286271,-86.418783],[14.76209,-68.171835,-71.656692],[30.901699,-80.901699,-50],[44.286271,-86.418783,-23.885564],[-14.76209,-68.171835,-71.656692],[-30.901699,-80.901699,-50],[-44.286271,-86.418783,-23.885564],[-23.885564,-44.286271,-86.418783],[-50,-30.901699,-80.901699],[-71.656692,-14.76209,-68.171835],[-86.418783,-23.885564,-44.286271],[-80.901699,-50,-30.901699],[-68.171835,-71.656692,-14.76209],[-86.418783,-23.885564,44.286271],[-80.901699,-50,30.901699],[-68.171835,-71.656692,14.76209],[-23.885564,-44.286271,86.418783],[-50,-30.901699,80.901699],[-71.656692,-14.76209,68.171835],[0,29.524181,95.542256],[0,0,100],[0,-29.524181,95.542256],[0,29.524181,-95.542256],[0,0,-100],[0,-29.524181,-95.542256],[-16.245985,95.105652,26.286556],[16.245985,95.105652,26.286556],[0,85.065081,52.573111],[58.778525,68.819096,42.53254],[68.819096,42.53254,58.778525],[42.53254,58.778525,68.819096],[85.065081,52.573111,0],[95.105652,26.286556,-16.245985],[95.105652,26.286556,16.245985],[58.778525,68.819096,-42.53254],[42.53254,58.778525,-68.819096],[68.819096,42.53254,-58.778525],[16.245985,95.105652,-26.286556],[-16.245985,95.105652,-26.286556],[0,85.065081,-52.573111],[-42.53254,58.778525,-68.819096],[-58.778525,68.819096,-42.53254],[-68.819096,42.53254,-58.778525],[-95.105652,26.286556,-16.245985],[-85.065081,52.573111,0],[-95.105652,26.286556,16.245985],[-58.778525,68.819096,42.53254],[-42.53254,58.778525,68.819096],[-68.819096,42.53254,58.778525],[16.245985,-95.105652,26.286556],[-16.245985,-95.105652,26.286556],[0,-85.065081,52.573111],[68.819096,-42.53254,58.778525],[58.778525,-68.819096,42.53254],[42.53254,-58.778525,68.819096],[95.105652,-26.286556,16.245985],[95.105652,-26.286556,-16.245985],[85.065081,-52.573111,0],[68.819096,-42.53254,-58.778525],[42.53254,-58.778525,-68.819096],[58.778525,-68.819096,-42.53254],[0,-85.065081,-52.573111],[-16.245985,-95.105652,-26.286556],[16.245985,-95.105652,-26.286556],[-42.53254,-58.778525,-68.819096],[-68.819096,-42.53254,-58.778525],[-58.778525,-68.819096,-42.53254],[-95.105652,-26.286556,-16.245985],[-95.105652,-26.286556,16.245985],[-85.065081,-52.573111,0],[-68.819096,-42.53254,58.778525],[-42.53254,-58.778525,68.819096],[-58.778525,-68.819096,42.53254],[-26.286556,-16.245985,95.105652],[-52.573111,0,85.065081],[-26.286556,16.245985,95.105652],[52.573111,0,85.065081],[26.286556,-16.245985,95.105652],[26.286556,16.245985,95.105652],[26.286556,16.245985,-95.105652],[26.286556,-16.245985,-95.105652],[52.573111,0,-85.065081],[-26.286556,16.245985,-95.105652],[-52.573111,0,-85.065081],[-26.286556,-16.245985,-95.105652]];
var random = function(min, max) { return min + Math.random() * (max - min);	}

function ViewDots(size) {
	this.color = [1, 1, 1];
	this.opacity = 1;
	this.size = size;
	bongiovi.View.call(this, glslify("../shaders/sphereDot.vert"), glslify("../shaders/dots.frag"));
}

var p = ViewDots.prototype = new bongiovi.View();
p.constructor = ViewDots;


p._init = function() {
	gl = GL.gl;
	var positions = [];
	var coords = [];
	var indices = []; 
	var extra = []; 
	var count = 0;
	var numDots = 5;
	var gap = 10;

	for(var i=0; i<vertices.length; i++) {
		numDots = Math.floor(random(5, 10));
		gap = random(5, 15);

		for(var j=0; j<numDots; j++ ) {
			positions.push(vertices[i]);
			coords.push([Math.random(), Math.random()]);
			indices.push(count);
			extra.push([gap*j+15, Math.random(), Math.random()]);

			count ++;	
		}
		
	}

	this.mesh = new bongiovi.Mesh(positions.length, indices.length, GL.gl.POINTS);
	this.mesh.bufferVertex(positions);
	this.mesh.bufferTexCoords(coords);
	this.mesh.bufferIndices(indices);
	this.mesh.bufferData(extra, "aExtra", 3);
};

p.render = function(texture) {
	if(!this.shader.isReady() ) return;

	this.shader.bind();
	if(texture) {
		this.shader.uniform("texture", "uniform1i", 0);
		texture.bind(0);	
	}
	this.shader.uniform("color", "uniform3fv", this.color);
	this.shader.uniform("opacity", "uniform1f", this.opacity);
	this.shader.uniform("size", "uniform1f", this.size);
	GL.draw(this.mesh);
};

module.exports = ViewDots;