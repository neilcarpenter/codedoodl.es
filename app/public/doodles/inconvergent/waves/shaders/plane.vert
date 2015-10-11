varying vec3 vPosition;
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vView;
varying vec3 vLight;
//uniform vec4 light;

void main(){

  vPosition = vec3(modelMatrix * vec4(position,1.));
  vNormal = vec3(modelMatrix * vec4(normal,1.));
  vView = vPosition - cameraPosition;
  //vLight = vPosition - light.xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
