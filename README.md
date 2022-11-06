<h1 align="center">
    Prolog Car Race
</h1>

<h4 align="center">
  Implementation of a car race, where the main car can be managed by an artificial intelligence
</h4>

<p align="center">
  <a href="https://img.shields.io/github/repo-size/Danilo-Js/prolog-car-race/commits/master">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/Danilo-Js/prolog-car-race">
  </a>

  <a href="https://img.shields.io/github/issues/Danilo-Js/prolog-car-race/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Danilo-Js/prolog-car-race">
  </a>
  
  <img alt="Repository forks" src="https://img.shields.io/github/forks/Danilo-Js/prolog-car-race">
  
  <img alt="Repository stars" src="https://img.shields.io/github/stars/Danilo-Js/prolog-car-race">
  
  <img alt="Repository license" src="https://img.shields.io/github/license/Danilo-Js/prolog-car-race">
  
</p>

<p align="center" direction="row">
  <a href="#rocket-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-contribuite">How to contribuite</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

</br>


<p align="center">
  <img alt="DemonstrationGit" src="https://github.com/Danilo-Js/prolog-car-race/blob/main/demonstrationGif.gif">
</p>


</br>

## :rocket: About the project
This project is an academic work developed for the Artificial Intelligence discipline, taught by Professor [Jacson Rodrigues Correia da Silva](http://lattes.cnpq.br/0637308986252382) at the Federal University of Espírito Santo.

The cart is already capable of:
- Identify a critical (very close) obstacle on the right/left and swerve to the opposite side
- Divert to the freest path (right or left) to avoid an obstacle ahead
- Ignore right/left non-critical obstacles as long as your path ahead is clear
- Correct your angle immediately if it is too unfavorable. Preventing it from walking backwards, or horizontally

Results:
- Ranks 1 in about 1/3 of races
- Comes 2nd or 3rd in most races he doesn't win
- Completed all races already tested

## :information_source: How to contribuite
Clone the project
```
$ git cone https://github.com/Danilo-Js/prolog-car-race.git
```
Edit .js files to change web structure: 
[car.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/car.js),
[controls.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/controls.js),
[main.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/main.js),
[road.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/road.js),
[sensor.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/sensor.js),
[jquery.min.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/jquery.min.js),
[utils.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/utils.js).

Edit [servidor.pl](https://github.com/Danilo-Js/prolog-car-race/blob/main/servidor.pl) to change the IA structure.

Run the project by consulting the [servidor.pl](https://github.com/Danilo-Js/prolog-car-race/blob/main/servidor.pl) into Swipl
```
$ swipl -s servidor.pl
```
And the you open the project in your browser, by default the URL it will be
```
http://localhost:8080
```
You can also run the project without the AI, using the arrow keys on your keyboard to control the car manually.
For this, line 10 of the [main.js](https://github.com/Danilo-Js/prolog-car-race/blob/main/main.js) file cannot be commented out, and line 8 must. Then you open [index.html](https://github.com/Danilo-Js/prolog-car-race/blob/main/index.html) and play it like a game!

In order for the car to be controlled by the AI again, line 8 must not be commented out, but line 10 must.

Line 8 (for IA)
```
const car=new Car(road.getLaneCenter(1),initial_pos,30,50,canvas.width,"PROLOG",speed+0.5);
```

Line 10 (for arrow keys)
```
const car=new Car(road.getLaneCenter(1),initial_pos,30,50,canvas.width,"KEYS",speed+0.5);
```


## :memo: License
This project under [MIT license](https://github.com/Danilo-Js/prolog-car-race/blob/master/LICENSE) and it is an adaptation of the [Radu Mariescu-Istodor](https://www.youtube.com/c/RaduMariescuIstodor) project [Self-driving car - No libraries - JavaScript Course](https://www.youtube.com/watch?v=NkI9ia2cLhc)

---

#### Made by: Arthur Santos Almeida, Danilo José Lima de Oliveira.
