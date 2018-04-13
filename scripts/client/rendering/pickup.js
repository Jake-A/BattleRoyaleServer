MyGame.renderer.Pickup = (function(graphics) {
    'use strict';
    let that = {};

    // ------------------------------------------------------------------
    //
    // Renders a Player model.
    //
    // ------------------------------------------------------------------
    that.render = function(model, texture) {
        graphics.saveContext();
        var size = 
        graphics.drawImage(texture, model.position, {
            width : model.radius*2,
            height : model.radius*2,
            radius : model.radius
        });
        graphics.restoreContext();
    };

    return that;

}(MyGame.graphics)); 