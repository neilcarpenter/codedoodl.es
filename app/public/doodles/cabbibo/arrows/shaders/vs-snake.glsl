
attribute vec2 lookup;

uniform sampler2D t_pos;
uniform sampler2D t_oPos;
uniform sampler2D t_ooPos;

uniform vec3 leader;

varying vec3 vNorm;
varying vec3 cameraPos;
varying vec3 vMPos;

// stagnent;
varying float vStag;

$getConnectionUV

void main(){


  
  // instance position
  vec3 iPos   = texture2D( t_pos   , lookup ).xyz;
  vec3 ioPos  = texture2D( t_oPos  , lookup ).xyz;
  vec3 iooPos = texture2D( t_ooPos , lookup ).xyz;

  //Getting position of the connection above us
  vec2 upUV = getConnectionUV( lookup );

  // getting upper position
  vec3 upPos = vec3( 0. );

  // top object
  if( upUV.x < 0. ){
    upPos = leader;
  }else{
    upPos = texture2D( t_pos , upUV ).xyz;
  }


  // getting the difference between pos and oldPos
  vec3 d2 = iPos  - ioPos;
  //vec3 d2 = ioPos - iooPos;
  vec3 d1 = upPos - iPos;

  mat3 rot = mat3(
    1. , 0. , 0.,
    0. , 1. , 0.,
    0. , 0. , 1. 
  );

  if( length( d1 ) > 0. && length( d2 ) > 0. ){
    
    vec3 y = normalize( d1 );
    vec3 x = normalize( cross( normalize( d1 ) , normalize( d2 ) ) );
    vec3 z = cross( y , x );
    
    rot = mat3(
      x.x , x.y , x.z ,
      y.x , y.y , y.z ,
      z.x , z.y , z.z
    );

    vStag = 0.;

  }else{
    vStag = 1.;
  }
  

  vNorm = rot * normal ;
 
  vec3 pos = iPos + (lookup.y + .5) * rot * position;
  cameraPos = cameraPosition;

  vMPos = (modelMatrix * vec4( pos , 1. )).xyz;

  gl_Position = projectionMatrix * modelViewMatrix * vec4( pos , 1. );

}
