cc.Class({
    extends: cc.Component,

    properties: {
        _velocityMovementBulleyPlayer : null,
    },

    onLoad: function () {
        this._velocityMovementBulleyPlayer = 1000;
    },

    update: function (dt) {
        this._changeDirextion(dt);
    },

    onCollisionEnter : function(collided, me) {
        collided.node.destroy();
        me.node.destroy();
    },

    _changeDirextion : function(dt) {
        this.node.y += this._velocityMovementBulleyPlayer * dt;
    }

});
