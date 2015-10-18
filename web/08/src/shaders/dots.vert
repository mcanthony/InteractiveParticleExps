// dots.vert

#define SHADER_NAME BASIC_VERTEX

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform float size;
uniform float pointSize;

varying vec2 vTextureCoord;
varying vec3 vVertex;

void main(void) {
	vec3 pos      = aVertexPosition;
	pos           = normalize(pos) * size;
	gl_Position   = uPMatrix * uMVMatrix * vec4(pos, 1.0);
	vTextureCoord = aTextureCoord;
	vVertex       = pos;

	gl_PointSize = pointSize;
}