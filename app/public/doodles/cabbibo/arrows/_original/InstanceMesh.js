function InstanceMesh( geometry , attributes , uniforms , vs , fs , params ){

  var params = params || {}
  var geometry = this.createGeometry( geometry , attributes );

  var attr = {}

  for( var propt in attributes ){

    attr[ propt ] = {
      type:   attributes[ propt ].type,
      value:  null
    }

  }

  var material = new THREE.ShaderMaterial({
  
    uniforms: uniforms,

    attributes: attr,

    vertexShader:   vs,
    fragmentShader: fs,

    side:         params.side         || THREE.BackSide,
    transparent:  params.transparent  || false,
    blending:     params.blending     || THREE.NormalBlending,
  
  });


  body = new THREE.Mesh( geometry , material );

  return body;

}


InstanceMesh.prototype.createGeometry = function( geometry  , attributes ){

  var positions; var normals;
  
  if( geometry instanceof THREE.BufferGeometry ){

    positions = geometry.attributes.position.array;
    normals = geometry.attributes.normal.array;

  }else{
    
    var faces = geometry.faces.length;

    // Get the totalVerts by looking up how many faces
    // we've got in the geometry

    positions = new Float32Array( faces * 3 * 3 );
    normals   = new Float32Array( faces * 3 * 3 );

    for( var j = 0; j < faces; j++ ){

      var index =  j * 3;

      var face = geometry.faces[j];

      var p1 = geometry.vertices[ face.a ];
      var p2 = geometry.vertices[ face.b ];
      var p3 = geometry.vertices[ face.c ];

      var n1 = face.vertexNormals[ 0 ]; 
      var n2 = face.vertexNormals[ 1 ]; 
      var n3 = face.vertexNormals[ 2 ]; 
   
      positions[ index * 3  + 0 ] = p1.x;
      positions[ index * 3  + 1 ] = p1.y;
      positions[ index * 3  + 2 ] = p1.z;

      positions[ index * 3  + 3 ] = p2.x;
      positions[ index * 3  + 4 ] = p2.y;
      positions[ index * 3  + 5 ] = p2.z;

      positions[ index * 3  + 6 ] = p3.x;
      positions[ index * 3  + 7 ] = p3.y;
      positions[ index * 3  + 8 ] = p3.z;

      normals[ index * 3  + 0 ] = n1.x;
      normals[ index * 3  + 1 ] = n1.y;
      normals[ index * 3  + 2 ] = n1.z;

      normals[ index * 3  + 3 ] = n2.x;
      normals[ index * 3  + 4 ] = n2.y;
      normals[ index * 3  + 5 ] = n2.z;

      normals[ index * 3  + 6 ] = n3.x;
      normals[ index * 3  + 7 ] = n3.y;
      normals[ index * 3  + 8 ] = n3.z;
   
    } 

  }


  var geo = new THREE.InstancedBufferGeometry();


  // Taking care of our instanced geometry  
  var a_position  = new THREE.BufferAttribute( positions , 3 );
  var a_normal    = new THREE.BufferAttribute( normals   , 3 );

  geo.addAttribute( 'position'  , a_position );
  geo.addAttribute( 'normal'    , a_normal   );

  for( var name in attributes ){

    var attribute = attributes[ name ];
    
    var data    = attribute.data;
    var type    = attribute.type;
     
    var length = 1;
    if( type == "v2" ){ length = 2; }
    if( type == "v3" ){ length = 3; }
    if( type == "v4" ){ length = 4; }

    var attr = new THREE.InstancedBufferAttribute( data , length , 1 , false );

    geo.addAttribute( name , attr ); 

  }
  
  return geo;

}
