class Ground{
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        var option={
            isStatic: true
        };
        this.suelo = Bodies.rectangle(x, y, w, h, option);
        World.add(world, this.suelo);
    }
    display(){
        var groundPos = this.suelo.position;
        push();
        translate(groundPos.x, groundPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill(255, 255, 0);
        rect(0, 0, this.w, this.h);
        pop();
    }
}