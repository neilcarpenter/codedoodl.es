#extension GL_OES_standard_derivatives: enable

uniform float itt;
uniform float mode;
uniform sampler2D texa;
uniform sampler2D texb;
uniform float n;
uniform vec2 mousePos;
uniform float mouseScale;


/* ASHIMA
functions below are from:
  https://github.com/ashima/webgl-noise/blob/master/src/noise2D.glsl
They are under a separate licence from the rest of this file.
*/
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
/*ASHIMA END*/

float mixWaveAndMouse(sampler2D t, vec2 h){
  float s = 10.0;
  float r = texture2D(t, h).x;

  float dd = length(h*n-mousePos);
  if (dd<s){
    dd = clamp(dd/s,0.0,1.0);
    float n = abs(snoise(h*35.0))*(1.0-dd)*0.2;
    r = mix(r,n,mouseScale);
  }
  return r;
}

float wave(){
  vec2 here = gl_FragCoord.xy/n;
  float a = 0.9;
  float b = 0.99; // this is not very nice, but it does the job
  float k = 0.1;

  //float gamma = -0.008;
  //float gamma = 0.0;
  //float b = 1.0/(1.0-gamma);

  float s = 1.0/(n-1.0);
  vec3 stp = vec3(s,-s,0.0);

  float mida = mixWaveAndMouse(texa, here);
  float midb = mixWaveAndMouse(texb, here);
  float left = mixWaveAndMouse(texa, here+stp.yz);
  float right = mixWaveAndMouse(texa, here+stp.xz);
  float up = mixWaveAndMouse(texa, here+stp.zx);
  float down = mixWaveAndMouse(texa, here+stp.zy);

  if (here.x>=1.0-s){
    right = left*a;
  }
  if (here.x<=s){
    left = right*a;
  }
  if (here.y>=1.0-s){
    up = down*a;
  }
  if (here.y<=s){
    down = up*a;
  }
  float res = 2.0*mida - midb  +
    k*(left + right + up + down - 4.0*mida);

  // dampening with gamma.
  //float res = 2.0*mida - (1.0+gamma)*midb  +
    //k*(left + right + up + down - 4.0*mida);
  return res*b;
}

float initial(){
  vec2 here = gl_FragCoord.xy/n;

  float v = 0.0;
  if (here.x>0.4 && here.x<0.6 && here.y>0.4 && here.y<0.6 ){
    float dd = length(0.5-here)/0.2;
    if (dd>0.2){
      v = 0.0;
    }else{
      v = snoise(gl_FragCoord.xy/10.0)*(1.0-dd);
    }
  }
  return v;
}

void main(){

  float v;
  float dv = 1.0;

  if (mode < 0.0){
    v = initial();
  }

  else if (mode < 1.0){
    v = wave();
    dv = fwidth(v);
  }

  gl_FragColor = vec4(v,dv,0.0,1.0);
}
