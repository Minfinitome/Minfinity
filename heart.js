function heart() {
    this.p0 = creatVector(x, y);
    this.p1 = creatVector(x, y);
    this.tmin = -PI;
    this.tmax = PI; 
    this.tdif = 0.01;

    this.show = function() {
        t = tmin;
        translate(width/2, height/2);
        stroke(255);
        strokeWeight(1);
        this.calcPos(p0, t, 6);
        while (t < tmax) {calcPos(p1, t, 6); line(p0.x, p0.y, p1.x, p1.y); p0.set(p1); t += tdif;}
    }

    this.calcPos = function(v, t, size) {
        v.x = 16 * pow(sin(t), 3);
        v.y = -(13*cos(t) - 5 * cos(2*t) -2*cos(3*t) - cos(4*t));
        v.mult(size);
    }

}