ExplodeShader = {
    uniforms: {
        iMouse:      { type: 'v2', value: new THREE.Vector2(0, 0) },
        iResolution: { type: 'v2', value: new THREE.Vector2(100, 100) },
        shrinkFactor:{ type: 'f', value: 0.98 },
        tDiffuse:    { type: 't', value: null }
    },

    vertexShader: [
        "varying vec2 vTextureCoord;",
        "void main() {",
            "vTextureCoord = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join("\n"),

    fragmentShader: [
        "uniform vec2 iMouse;",
        "uniform vec2 iResolution;",
        "uniform float shrinkFactor;",
        "uniform sampler2D tDiffuse;",
        "varying vec2 vTextureCoord;",

        "vec4 explodedTexture2D(vec2 center, float shrink) {",
        "    vec2 offset = vTextureCoord.xy - center;",
        "    vec2 samplePosition = center + normalize(offset) * length(offset) * shrink;",
        "    vec4 textureCol = texture2D(tDiffuse, samplePosition);",
        "    if (samplePosition.x < 0.0 || samplePosition.x >= 1.0 ||",
        "        samplePosition.y < 0.0 || samplePosition.y >= 1.0) {",
        "       return vec4(0.0);",
        "    } else {",
        "      return textureCol;",
        "    }",
        "}",

        "mat2 m2 = mat2(1.6,-1.2,1.2,1.6);",

        "void main(void)",
        "{",
        "    vec2 center = iMouse;",
        "    vec4 original = texture2D(tDiffuse, vTextureCoord);",
        "    vec4 col = vec4(0.0);",
        "    float shrink = 1.0;",
        "    for( float i = 0.0; i < 5.0; i += 1.0) {",
        "        col.r += explodedTexture2D(center, shrink).r / (i + 1.0);",
        "        shrink *= shrinkFactor;",
        "        col.g += explodedTexture2D(center, shrink).g / (i + 1.0);",
        "        shrink *= shrinkFactor;",
        "        col.b += explodedTexture2D(center, shrink).b / (i + 1.0);",
        "        shrink *= shrinkFactor;",
        "        center -= m2*(center - vec2(0.5))*0.5928;",
        "    }",
        "    gl_FragColor = col + original;",
        "}"
    ].join("\n")
}

