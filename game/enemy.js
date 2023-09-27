var Enemy = function(name, color, position, direction) {
    this.name = name;
    this.position = position;
    this.life = 1;
    this.direction = direction;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
    });

    var enemyMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(enemyMesh, this.material);
    this.graphic.position.z = 6;

    this.graphic.rotateOnAxis(new THREE.Vector3(0, 0, 1), this.direction + (3 * Math.PI / 2));
};

Enemy.prototype.move = function() {
    this.graphic.position.x += 0.3 * Math.cos(this.direction);
}