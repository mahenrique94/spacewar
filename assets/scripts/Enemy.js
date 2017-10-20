cc.Class({
    extends: cc.Component,

    properties: {
        bulletPrefabEnemy : cc.Prefab,
        _velocityMovementEnemy : null,
        _intervalAttackEnemy : null
    },

    onLoad: function () {
        this._intervalAttackEnemy = 0.5;
        this._velocityMovementEnemy = 250;

        this.schedule(this._shoot, this._intervalAttackEnemy);                        
    },
    
    update: function (dt) {
        this._changeDirection(dt);
    },

    _changeDirection : function(dt) {
        this.node.y -= this._velocityMovementEnemy * dt;
    },

    _shoot : function() {
        const bullet = cc.instantiate(this.bulletPrefabEnemy);
        bullet.parent = this.node.parent;
        bullet.position = this.node.position;
    }

});
