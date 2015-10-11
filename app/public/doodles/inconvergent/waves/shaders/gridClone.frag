uniform sampler2D tex;
uniform float n;

void main(){
  vec2 here = gl_FragCoord.xy/n;
  vec4 h = texture2D(tex, here);
  gl_FragColor = h;
}
