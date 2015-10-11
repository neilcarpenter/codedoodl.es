uniform vec3 leader;

varying vec3 vNorm;
varying vec3 vMPos;
varying vec3 cameraPos;

varying float vStag;

void main(){

  if( vStag > .5 ) discard;

  vec3 lightDir = normalize( leader - vMPos );
  vec3 cameraDir = normalize( cameraPos - vMPos );


  float lamb = max( 0. , dot( vNorm , lightDir ) );


  vec3  refl = reflect( lightDir , vNorm );
  float spec = max( 0. , dot( refl , -cameraDir) );


  float ambi = .1;

  vec3 col = vec3( 0. );
  col += lamb * vec3( 1. , 0. , 0. );
  col += pow( spec , 4. ) * vec3( 1. , .6 , 0. );
  col += ambi * vec3( .2 , 0., 1. );
  

  vec3 nCol = vec3( vNorm * .5 + .5 );
  gl_FragColor = vec4( col * nCol  + .3 * nCol, 1. ); 


}
