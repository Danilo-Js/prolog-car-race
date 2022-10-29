const canvas=document.getElementById("myCanvas");
canvas.width=200;
const car_width=30, car_height=50, speed=20, initial_pos=120, finish_line=300;
const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2,canvas.width*0.9, laneCount=4, finishLine=finish_line, initialPos=initial_pos);

// Para movimentar o carro usando PROLOG:
const car=new Car(road.getLaneCenter(1),initial_pos,30,50,canvas.width,"PROLOG",speed+0.5);
// Para movimentar o carro usando as setas do teclado
//const car=new Car(road.getLaneCenter(1),initial_pos,30,50,canvas.width,"KEYS",speed+0.5);

const traffic=[
    car,
    new Car(road.getLaneCenter(0),-170,car_width,car_height,canvas.width,"DUMMY",speed,"red"),
    new Car(road.getLaneCenter(1),-210,car_width,car_height,canvas.width,"DUMMY",speed,"orange"),
    new Car(road.getLaneCenter(2),-260,car_width,car_height,canvas.width,"DUMMY",speed,"red"),
    new Car(road.getLaneCenter(1),-310,car_width,car_height,canvas.width,"DUMMY",speed,"green"),
    new Car(road.getLaneCenter(2),-370,car_width,car_height,canvas.width,"DUMMY",speed,"pink"),
    new Car(road.getLaneCenter(3),-420,car_width,car_height,canvas.width,"DUMMY",speed,"white")
];

animate();
var last_pos = 0, race_position, race_car_position=10, first_time=0, last_time=0;

function animate(){
    var run_finished = car.y <= (finish_line*-10+initial_pos);
    if (first_time == 0) first_time = (new Date()).getTime();
    
    for(let i=0;i<traffic.length && !run_finished;i++){
        let new_traffic = new Array();
        for(let j=0;j<traffic.length;j++){
            if (i!=j) new_traffic.push(traffic[j]);
        }
        traffic[i].update(road.borders,new_traffic);
    }

    canvas.height=window.innerHeight;

    ctx.save();
    ctx.translate(0,-car.y+canvas.height*0.7); //posiciona a visão da pista
    
    road.draw(ctx);
    for(let i=1;i<traffic.length;i++){
        traffic[i].draw(ctx);
    }
    car.draw(ctx, true /*mostrar os sensores*/);

    ctx.restore();

    requestAnimationFrame(animate);
    if (last_pos != car.y && !run_finished){
        last_pos = -Math.round((Math.round(car.y) - initial_pos)/10);
        race_position = traffic.length;
        for(let i=1;i<traffic.length;i++)
            if (car.y < traffic[i].y)
                race_position--;
        $('#km').html('KM: '+last_pos+' ['+race_position+'º]');
        s = (new Date((new Date()).getTime()-first_time)).getMilliseconds();
        $('#tempo').text('Tempo: '+s+'s')
    }
    if (run_finished){
        if (last_time == 0){
            last_time = (new Date()).getTime();
            var seconds = (new Date(last_time-first_time)).getMilliseconds();
            $('#km').text('Posição: '+race_position+'º');
            $('#tempo').text('Tempo: '+seconds+'s');
        }
    }
}