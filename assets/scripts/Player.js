cc.Class({
    extends: cc.Component,

    properties: {
        _movingToLeft : false,
        _movingToRight : false,
        _velocity : 1000,
        bulletPrefab : cc.Prefab
    },

    onLoad: function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this._keyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this._keyUp, this);

        cc.director.getCollisionManager().enabled = true;
    },

    update: function (dt) {
        if (this._movingToLeft)
            this.node.x -= this._velocity * dt;

        if (this._movingToRight)
            this.node.x += this._velocity * dt;
    },

    _keyDown : function(event) {
        if (event.keyCode == cc.KEY.left)
            this._movingToLeft = true;

        if (event.keyCode == cc.KEY.right) 
            this._movingToRight = true;

        if (event.keyCode == cc.KEY.space)
            this._shoot();
    },
    
    _keyUp : function(event) {
        if (event.keyCode == cc.KEY.left)
            this._movingToLeft = false;
        
        if (event.keyCode == cc.KEY.right)
            this._movingToRight = false;
    },

    _shoot : function() {
        const bullet = cc.instantiate(this.bulletPrefab);
        bullet.parent = this.node.parent;
        bullet.position = this.node.position;
    }

});
