uniform sampler2D t_oPos;
uniform sampler2D t_pos;

uniform float dT;
uniform float noiseSize;
uniform vec2  resolution;

varying vec2 vUv;

$simplex
$curl


float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}


void main(){

  vec2 uv = gl_FragCoord.xy / resolution;
  vec4 oPos = texture2D( t_oPos , uv );
  vec4 pos  = texture2D( t_pos , uv );

  vec3 vel = pos.xyz - oPos.xyz;

  vec3 curl = curlNoise( pos.xyz * noiseSize );

  vel += curl * .0001;
  vel *= .97; // dampening

  vec3 p = pos.xyz + vel;


  gl_FragColor = vec4( p , 1. );


}
