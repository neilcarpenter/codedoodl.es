/*


      params = {

        geometry: 
        instanceNumber
        renderer:
        vertexShader:
        fragmentShader:
        simulationShader:
        bodyUniforms:
        soulUniforms:

      }


*/


function Curl( params ){


  // to know if we are added to scene or not.
  this.active = false;

  // Do error checking for params
  this.checkParams( params );


  var bodyUniforms = {

    t_pos   : { type: "t" , value: null },
    t_oPos  : { type: "t" , value: null },
    t_ooPos : { type: "t" , value: null }

  }

  if( params.bodyUniforms ){

    this.addUniforms( bodyUniforms , params.bodyUniforms );

  }

  var lookupSize = Math.ceil( Math.sqrt( params.instanceNumber ) );

  this.soul = new PhysicsRenderer( 
    lookupSize, 
    params.simulationShader , 
    params.renderer 
  );

  this.soul.addBoundTexture( bodyUniforms.t_pos   , 'output'    );
  this.soul.addBoundTexture( bodyUniforms.t_oPos  , 'oOutput'   );
  this.soul.addBoundTexture( bodyUniforms.t_ooPos , 'ooOutput'  );

  this.soul.resetRand( .2 );

  if( params.soulUniforms ){ this.soul.setUniforms( params.soulUniforms ); }
 

  var attributes = this.createAttributes( params.instanceNumber ); 

  this.body = new InstanceMesh(

    params.geometry,
    attributes,
    bodyUniforms,
    params.vertexShader,
    params.fragmentShader,
    {
      side: THREE.DoubleSide
    }

  );

  this.body.frustumCulled = false;

  this.soul.debugScene.scale.multiplyScalar( .016 );
  this.soul.debugScene.position.z = -2.5;

}

Curl.prototype.debug = function(){

  this.body.add( this.soul.debugScene );

}
Curl.prototype.update = function(){

  if( this.active == true ){
    this.soul.update();
  }

}

Curl.prototype.activate = function( scene ){

  scene.add( this.body );
  this.active = true;

}

Curl.prototype.deactivate = function( scene ){

  scene.remove( this.body );
  this.active = false;

}

Curl.prototype.addUniforms = function( uniforms , uniformsToAdd ){

  for( var propt in uniformsToAdd ){

    if( !uniforms[ propt ] ){

      uniforms[ propt ] = uniformsToAdd[ propt ];

    }else{

      console.log( 'You are trying to override a uniform that is needed' );
      console.log( 'Uniform Name: ' + propt );

    }

  }

}

Curl.prototype.checkParams = function( params ){

  if( !params.geometry          ){ console.log( 'no geometry provided'        ); } 
  if( !params.renderer          ){ console.log( 'no renderer provided'        ); } 
  if( !params.vertexShader      ){ console.log( 'no vert shader provided'     ); } 
  if( !params.fragmentShader    ){ console.log( 'no frag shader provided'     ); } 
  if( !params.simulationShader  ){ console.log( 'no sim shader provided'      ); } 
  if( !params.bodyUniforms      ){ console.log( 'no bodyUniforms provided'    ); } 
  if( !params.soulUniforms      ){ console.log( 'no soulUniforms provided'    ); } 
  if( !params.instanceNumber    ){ console.log( 'no InstanceNum  provided'    ); } 

}

Curl.prototype.createAttributes = function( numOf ){


  var lookups   = new Float32Array( numOf * 2 );
  var lookupSize = Math.ceil( Math.sqrt( numOf ) );
        
  for( var i = 0; i < numOf; i++ ){

      var y = (Math.floor( i / lookupSize ))/ lookupSize;
      var x = (i - ( (Math.floor( i / lookupSize )) * lookupSize )) / lookupSize;
    
      var a = .5 / lookupSize;

      lookups[ i * 2 + 0 ] = x + a;
      lookups[ i * 2 + 1 ] = y + a;
      
  }


  var attributes = {

    lookup: { type:"v2" , data: lookups }

  }

  return attributes;

}
