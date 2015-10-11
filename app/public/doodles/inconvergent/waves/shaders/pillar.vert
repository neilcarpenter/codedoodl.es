attribute vec3 color;

uniform float itt;
uniform vec4 light;
uniform float height;
uniform sampler2D tex;

varying vec3 vPosition;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vLight;


void main(){

  vec3 pos = position;
  float scale = 100.0;

  vec4 h = texture2D(tex, color.xy);

  if (position.z>0.0){
    pos.z = h.x*height;
  }
  else if (position.z<=0.0){
    pos.z = 0.0;
  }

  vPosition = vec3(modelMatrix * vec4(pos,1.));
  vNormal = vec3(modelMatrix * vec4(normal,1.));
  vView = vPosition - cameraPosition;
  vLight = vPosition - light.xyz;
  vColor = color;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
}
