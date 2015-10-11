varying vec3 vView;
varying vec3 vPosition;

vec3 fog(float vdist, vec3 I){

  float b = 0.0009;
  vec3 fogColor = vec3(1.0);
  float dens = 1.0-exp(-(vdist*b));
  return mix(I,fogColor,dens);
}

void main(){

  float size = 1500.0;
  float lw = 5.0;
  float opacity = 0.0;

  if (vPosition.x<-size*0.5+lw){
    opacity = 0.6;
  }
  else if (vPosition.x>size*0.5-lw){
    opacity = 0.6;
  }
  else if (vPosition.y<-size*0.5+lw){
    opacity = 0.6;
  }
  else if (vPosition.y>size*0.5-lw){
    opacity = 0.6;
  }
  else{
    discard;
  }

  float vdist = length(vView);
  vec3 I = vec3(0.0);
  I = fog(vdist,I);

  gl_FragColor = vec4(I,opacity);
}
