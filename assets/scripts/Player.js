cc.Class({
    extends: cc.Component,

    properties: {
        _movingToDown : null,
        _movingToLeft : null,
        _movingToRight : null,
        _movingToUp : null,
        _velocityMovementPlayer : null,
        bulletPrefabPlayer : cc.Prefab
    },

    onLoad: function () {
        this._movingToDown = false;
        this._movingToLeft = false;
        this._movingToRight = false;
        this._movingToUp = false;
        this._velocityMovementPlayer = 1000;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._keyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._keyUp, this);

        cc.director.getCollisionManager().enabled = true;
    },

    update: function (dt) {
        if (this._movingToDown)
            this.node.y -= this._velocityMovementPlayer * dt;

        if (this._movingToLeft)
            this.node.x -= this._velocityMovementPlayer * dt;

        if (this._movingToRight)
            this.node.x += this._velocityMovementPlayer * dt;
        
        if (this._movingToUp)
            this.node.y += this._velocityMovementPlayer * dt;
    },

    _keyDown : function(event) {
        if (event.keyCode == cc.KEY.down) 
            this._movingToDown = true;

        if (event.keyCode == cc.KEY.left)
            this._movingToLeft = true;

        if (event.keyCode == cc.KEY.right) 
            this._movingToRight = true;
        
        if (event.keyCode == cc.KEY.up) 
            this._movingToUp = true;

        if (event.keyCode == cc.KEY.space)
            this._shoot();
    },
    
    _keyUp : function(event) {
        if (event.keyCode == cc.KEY.down) 
            this._movingToDown = false;

        if (event.keyCode == cc.KEY.left)
            this._movingToLeft = false;
        
        if (event.keyCode == cc.KEY.right)
            this._movingToRight = false;

        if (event.keyCode == cc.KEY.up) 
            this._movingToUp = false;
    },

    _shoot : function() {
        const bullet = cc.instantiate(this.bulletPrefabPlayer);
        bullet.parent = this.node.parent;
        bullet.position = this.node.position;
    }

});
