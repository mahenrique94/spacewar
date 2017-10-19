cc.Class({
    extends: cc.Component,

    properties: {
        _target : cc.Node,
        _velocity : 1000,
        _intervalAttack : 2
    },

    onLoad: function () {
        this._target = cc.find("player");
    },
    
    update: function (dt) {
        this._changeDirection(dt);
    },

    _changeDirection : function(dt) {
        this.node.y -= this._velocity * dt;
    }

});
