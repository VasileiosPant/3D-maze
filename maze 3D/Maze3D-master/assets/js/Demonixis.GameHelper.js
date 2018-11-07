var Demonixis = window.Demonixis || {};
Demonixis.GameHelper = Demonixis.GameHelper || {};

Demonixis.GameHelper.LevelHelper = function(start, end) {
    this.current = start || 1;

};

Demonixis.GameHelper.CameraHelper = function(camera) {
    this.translation = 5;
    this.rotation = 0.035;
    this.origin = {
        position: {
            x: 0,
            y: 0,
            z: 0,
            mapX: 0,
            mapY: 0,
            mapZ: 0
        },
        x: 10,
        y: 0,
        z: 0
    };
    
    this.camera = camera;
};