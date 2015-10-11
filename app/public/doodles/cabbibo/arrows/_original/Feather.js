function Feather( size ){

  var geometry = new THREE.Geometry();

  var cyl = new THREE.PlaneGeometry( 1 , 1 , 1 , 1  );
  var geo = new THREE.Mesh( cyl )

  geo.scale.y = 3
  geo.scale.x = .2
  geo.scale.z = .2

  geo.scale.multiplyScalar( .2  * size )

  geo.updateMatrix();
  geometry.merge ( geo.geometry , geo.matrix )


  var height = .65 ;
  var numOf = 10;

  var cyl = new THREE.PlaneGeometry( 1 , 1 , 1 , 1 );
  var geo = new THREE.Mesh( cyl )
  for( var i = 0; i < numOf; i ++ ){

    for( var  j = 0; j < 2; j ++ ){
      
      geo.scale.y = 2.5
      geo.scale.x = .4
      geo.scale.z = .4

      geo.scale.multiplyScalar( .1 * size )

      geo.rotation.z = ((j-.5 )*2) * Math.PI / 3;
      geo.position.y = ( -.5  +  (i/numOf )) * height * size; //(-1. + (i/ (numOf * 2) ))* height
      geo.position.x = ((j-.5 )*2) * .1 * size;

      geo.updateMatrix();
      geometry.merge ( geo.geometry , geo.matrix )

    }

  }



  geometry.computeFaceNormals();
  return geometry;

}
