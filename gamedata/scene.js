// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
var app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM.
document.body.appendChild(app.view);

// load the texture we need
PIXI.loader.add('grass', 'grass_PNG4933.png').load(function(loader, resources) {

    // This creates a texture from a 'bunny.png' image.
    var grass = new PIXI.Sprite(resources.grass.texture);

    // Setup the position of the bunny
    grass.x = app.renderer.width / 2;
    grass.y = app.renderer.height / 2;

    // Rotate around the center
    grass.anchor.x = 0.5;
    grass.anchor.y = 0.5;

    // Add the bunny to the scene we are building.
    app.stage.addChild(grass);

    // Listen for frame updates
    app.ticker.add(function() {
         // each frame we spin the bunny around a bit
        grass.rotation += 0.01;
    });
});
