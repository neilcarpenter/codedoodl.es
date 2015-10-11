  // TODO Make it so you can pass in renderer w / h
function ObjectControls( eye , params ){

  this.intersected;
  this.selected;

  this.eye                = eye;

  this.mouse            = new THREE.Vector3();
  this.unprojectedMouse = new THREE.Vector3();
  
  this.objects          = [];
  this.singleObjects    = [];

  var params = params || {};
  var p = params;

  this.domElement         = p.domElement         || document;

  // Recursively check descendants of objects in this.objects for intersections.
  this.recursive          = p.recursive          || false;
  
  this.raycaster          = new THREE.Raycaster();

  this.raycaster.near     = this.eye.near;
  this.raycaster.far      = this.eye.far;


  var addListener = this.domElement.addEventListener;

  var cb1 = this.mouseDown.bind(  this );
  var cb2 = this.mouseUp.bind(    this );
  var cb3 = this.mouseMove.bind(  this );

  this.domElement.addEventListener( 'mousedown', cb1 , false )
  this.domElement.addEventListener( 'mouseup'  , cb2 , false )
  this.domElement.addEventListener( 'mousemove', cb3 , false )

  this.domElement.addEventListener( 'touchdown', cb1 , false )
  this.domElement.addEventListener( 'touchup'  , cb2 , false )
  this.domElement.addEventListener( 'touchmove', cb3 , false )
 
  this.unprojectMouse();

}




/*
 
   EVENTS

*/


// You can think of _up and _down as mouseup and mouse down
ObjectControls.prototype._down = function(){

  this.down();

  if( this.intersected ){
   
    this._select( this.intersected  );

  }

}

ObjectControls.prototype.down = function(){}



ObjectControls.prototype._up = function(){

  this.up();

  if( this.selected ){

    this._deselect( this.selected );

  }

}

ObjectControls.prototype.up = function(){}



ObjectControls.prototype._hoverOut =  function( object ){

  this.hoverOut();
  
  this.objectHovered = false;
  
  if( object.hoverOut ){
    object.hoverOut( this );
  }

};

ObjectControls.prototype.hoverOut = function(){};



ObjectControls.prototype._hoverOver = function( object ){
 
  this.hoverOver();
  
  this.objectHovered = true;
  
  if( object.hoverOver ){
    object.hoverOver( this );
  }

};

ObjectControls.prototype.hoverOver = function(){}



ObjectControls.prototype._select = function( object ){
 
  this.select();
              
  var intersectionPoint = this.getIntersectionPoint( this.intersected );

  this.selected       = object;
  this.intersectionPoint = intersectionPoint;
 
  if( object.select ){
    object.select( this );
  }

};

ObjectControls.prototype.select = function(){}



ObjectControls.prototype._deselect = function( object ){
  
  //console.log('DESELECT');

  this.selected = undefined;
  this.intersectionPoint = undefined;

  if( object.deselect ){
    object.deselect( this );
  }

  this.deselect();

};

ObjectControls.prototype.deselect = function(){}




/*

  Changing what objects we are controlling

*/

ObjectControls.prototype.add = function( object ){

  this.objects.push( object );

};

ObjectControls.prototype.remove = function( object ){

  for( var i = 0; i < this.objects.length; i++ ){

    if( this.objects[i] == object ){
  
      this.objects.splice( i , 1 );

    }

  }

};

ObjectControls.prototype.addSingle = function( object ){

  this.singleObjects.push( object );

};

ObjectControls.prototype.removeSingle = function( object ){

  for( var i = 0; i < this.singleObjects.length; i++ ){

    if( this.singleObjects[i] == object ){
  
      this.singleObjects.splice( i , 1 );

    }

  }

};





/*
 
   Update Loop

*/

ObjectControls.prototype.update = function(){

  this.setRaycaster( this.unprojectedMouse );
  if( !this.selected ){

    this.checkForIntersections( this.unprojectedMouse );

  }else{

    this._updateSelected( this.unprojectedMouse );

  }

  for( var i =0; i < this.singleObjects.length; i++ ){

    this._updateSingle( this.singleObjects[i] );

  }



};

ObjectControls.prototype._updateSelected = function(){

  if( this.selected.update ){

    this.selected.update( this );

  }

}

ObjectControls.prototype.updateSelected = function(){};




ObjectControls.prototype.setRaycaster = function( position ){

  var origin    = position;
  var direction = origin.clone()

  direction.sub( this.eye.position );
  direction.normalize();

  this.raycaster.set( this.eye.position , direction );

}



/*
 
  Checks

*/

ObjectControls.prototype.checkForIntersections = function( position ){

  var intersected =  this.raycaster.intersectObjects( this.objects, this.recursive );


  if( intersected.length > 0 ){

    for (var n = 0; n < intersected.length; n++ ) {

      if ( this.recursive ) {

        var topLevelObj = this._findTopLevelAncestor( intersected[n].object );
        if ( topLevelObj ) {

          // Reset intersected.object, leave intersected.point etc. unchanged.
          // This works since in the two most common use cases the ancestor:
          // (1) contains the child object (and the intersection point)
          // (2) is not a THREE.Mesh and thus doesn't appear in the scene, 
          //     e.g. an Object3D used for grouping other related objects.
          intersected[n].object = topLevelObj;

        }

      }

    }

    this._objectIntersected( intersected );

  }else{

    this._noObjectIntersected();

  }

};

ObjectControls.prototype.checkForUpDown = function( hand , oHand ){

  if( this.upDownEvent( this.selectionStrength , hand , oHand ) === true ){
  
    this._down();
  
  }else if( this.upDownEvent( this.selectionStrength , hand , oHand ) === false ){
  
    this._up();
  
  }

};




ObjectControls.prototype.getIntersectionPoint = function( i ){

  var intersected =  this.raycaster.intersectObjects( this.objects, this.recursive );
 
  return intersected[0].point.sub( i.position );

}

ObjectControls.prototype._findTopLevelAncestor = function( object ){

  // Traverse back up until we find the first ancestor that is a top-level
  // object then return it (or null), since only top-level objects (which
  // were passed to objectControls.add) handle events, even if their child
  // objects are the ones intersected.

  while ( this.objects.indexOf(object) === -1) {

    if ( !object.parent ) {

      return null;

    }

    object = object.parent;

  }

  return object;

} 



/*
 
   Raycast Events

*/

ObjectControls.prototype._objectIntersected = function( intersected ){

  // Assigning out first intersected object
  // so we don't get changes everytime we hit 
  // a new face
  var firstIntersection = intersected[0].object;

  if( !this.intersected ){

    this.intersected = firstIntersection;

    this._hoverOver( this.intersected );


  }else{

    if( this.intersected != firstIntersection ){

      this._hoverOut( this.intersected );

      this.intersected = firstIntersection;

      this._hoverOver( this.intersected );

    }

  }

  this.objectIntersected();

};

ObjectControls.prototype.objectIntersected = function(){}

ObjectControls.prototype._noObjectIntersected = function(){

  if( this.intersected  ){

    this._hoverOut( this.intersected );
    this.intersected = undefined;

  }

  this.noObjectIntersected();

};

ObjectControls.prototype.noObjectIntersected = function(){}

ObjectControls.prototype._updateSingle = function( object ){

  var intersections = this.raycaster.intersectObject( object );
 // console.log( obj );

  if( intersections[0] ){
    
    var m = intersections
    if( !object.hovered ){
      
      if( object.hoverOver ){
        object.hoverOver( intersections[0] , this );
      }

      object.hovered = true;
    }


  }else{

    if( object.hovered ){
      
      if( object.hoverOut ){
        object.hoverOut( intersections[0] , this );
      }

      object.hovered = false;

    }

  }

  if( object.hovered ){
    if( object.hoveredUpdate ){ 
      object.hoveredUpdate( intersections[0] , this );
    }
  }

  if( object.selected ){
    if( object.selectedUpdate ){ 
      object.selectedUpdate( intersections[0] , this );
    }
  }


}




ObjectControls.prototype.mouseMove = function(event){

  this.mouseMoved = true;

  this.mouse.x =  ( event.clientX / window.innerWidth )  * 2 - 1;
  this.mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1;
  this.mouse.z = 1;

  this.unprojectMouse();

}

ObjectControls.prototype.unprojectMouse = function(){

  this.unprojectedMouse.copy( this.mouse );
  this.unprojectedMouse.unproject( this.eye );

}

ObjectControls.prototype.mouseDown = function( event ){
  this.mouseMove( event );
  this._down();
}

ObjectControls.prototype.mouseUp = function(){
  this.mouseMove( event );
  this._up();
}


ObjectControls.prototype.touchStart = function(event){
  this.touchMove( event );
  this._down();
}

ObjectControls.prototype.touchEnd = function(event){
  this.touchMove( event );
  this._up();
}

ObjectControls.prototype.touchMove= function(event){
     
  this.mouseMoved = true;

  this.mouse.x =  (  event.touches[ 0 ].pageX / window.innerWidth )  * 2 - 1;
  this.mouse.y = -(  event.touches[ 0 ].pageY / window.innerHeight ) * 2 + 1;
  this.mouse.z = 1;

  this.unprojectMouse();
  
}
