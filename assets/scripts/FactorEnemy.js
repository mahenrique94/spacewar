cc.Class({
    extends: cc.Component,

    properties: {
        _intervalBuild: null,
        enemyPrefabFactory: cc.Prefab
    },

    onLoad: function () {
        this._intervalBuild = 1;

        this.schedule(this._build, this._intervalBuild);
    },

    _build : function() {
        const enemy = cc.instantiate(this.enemyPrefabFactory);
        enemy.parent = this.node.parent;        
    }

});
