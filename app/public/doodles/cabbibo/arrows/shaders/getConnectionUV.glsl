vec2 getConnectionUV( in vec2 uv ){

  float size = 1. / 32.;
  float hSize = .5 / 32.;

  float mIx = floor( (uv.x) / size );
  float mIy = floor( (uv.y) / size );

  // Main Index
  vec2 mI = vec2( mIx , mIy );

  // If we are in the first column ( spine )
  if( mI.x < 1.){


    // If we are the upper most spine
    // We are connected to the leader
    if( mI.y < 1.){
    
      // return a negative number to know that its no a uv
      return vec2( -1. , -1. );

    }else{

      // Every other vertabrae in the spine
      // Gets attracted to the one above it
      return vec2( uv.x , uv.y - size );
   
   
    }


  // The 'sub' objects
  }else{

    // first level
    if( mI.x < 5. ){

      return vec2( hSize , uv.y ); 
      
    // The 'Sub Sub' objects
    }else if( mI.x < 21. ){


      // Which chunk

      int index = int( ( uv.x - (5.* size) ) / size );

      float chunk = floor( float( index / 4) );

      float lookup = (chunk * size) + size;

      return vec2( lookup , uv.y );

     
    // Bundle around spine
    }else{

       return vec2( hSize , uv.y );

    }

  }


}

