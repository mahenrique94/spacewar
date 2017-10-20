cc.Class({
    extends: cc.Component,

    properties: {
        _velocityMovementBulletEnemy : null
    },

    onLoad: function () {
        this._velocityMovementBulletEnemy = 1250;
    },

    update: function (dt) {
        this._changeDirection(dt);
    },

    _changeDirection : function(dt) {
        this.node.y -= this._velocityMovementBulletEnemy * dt;
    }

});
