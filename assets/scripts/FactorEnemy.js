cc.Class({
    extends: cc.Component,

    properties: {
        _intervalBuild: 1,
        enemyPrefab: cc.Prefab
    },

    onLoad: function () {
        this.schedule(this._build, this._intervalBuild);
    },

    _build : function() {
        const enemy = cc.instantiate(this.enemyPrefab);
        enemy.parent = this.node.parent;
    }

});
