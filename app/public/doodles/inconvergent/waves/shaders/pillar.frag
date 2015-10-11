#extension GL_OES_standard_derivatives: enable

uniform float itt;
uniform float mode;
uniform vec2 window;
uniform float pixelRatio;
uniform vec2 mouse;

varying vec3 vColor;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vLight;
varying float dv;

void main(){

  float opacity = 0.1;
  float vdist = length(vView);
  vec3 I = vec3(1.0);

  if (vPosition.z<0.0){
    I *= 0.1;
  }

  gl_FragColor = vec4(
    I,
    opacity
  );
}
