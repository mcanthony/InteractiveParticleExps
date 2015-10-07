// globe.vert

precision highp float;
attribute vec3 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
varying vec2 vTextureCoord;
varying vec3 vNormal;
varying vec3 vVertex;

void main(void) {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vNormal = normalize(aVertexPosition);
    vVertex = aVertexPosition;
    vTextureCoord = aTextureCoord;
}