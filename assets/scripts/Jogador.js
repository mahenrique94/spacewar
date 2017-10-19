cc.Class({
    extends: cc.Component,

    properties: {
        _movingToLeft : false,
        _movingToRight : false,
        _velocity : 1000
    },

    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyUp, this);
    },

    update: function (dt) {
        if (this._movingToLeft)
            this.node.x -= this._velocity * dt;

        if (this._movingToRight)
            this.node.x += this._velocity * dt;
    },

    keyDown: function(event) {
        if (event.keyCode == cc.KEY.left)
            this._movingToLeft = true;

        if (event.keyCode == cc.KEY.right) 
            this._movingToRight = true;
    },
    
    keyUp: function(event) {
        if (event.keyCode == cc.KEY.left)
            this._movingToLeft = false;
        
        if (event.keyCode == cc.KEY.right)
            this._movingToRight = false;
    }

});
