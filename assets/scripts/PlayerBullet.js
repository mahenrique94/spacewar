cc.Class({
    extends: cc.Component,

    properties: {
        _velocity : 15000,
    },

    update: function (dt) {
        this._changeDirextion(dt);
    },

    onCollisionEnter : function(collided, me) {
        collided.node.destroy();
        me.node.destroy();
    },

    _changeDirextion : function(dt) {
        this.node.y += this._velocity * dt;
    }

});
