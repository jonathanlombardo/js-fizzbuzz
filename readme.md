# FIZZ BUZZ

## Traccia

#### Consegna:

```
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz

Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
```

#### Tips

```
- Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

- Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
- Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
```

#### Bonus 1

```
Crea un container nel DOM , aggiungendo attraverso le funzioni document.createElement() e html append() un elemento html con il numero o la stringa corretta da mostrare.
```

#### Bonus 2

```
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
```

<hr>

## Svolgimento

- Creo un ciclo incrementale con counter da 1 a 100
  - SE il counter è multiplo di 3 e 5
    - Loggo FizzBuzz in console
  - Altrimenti SE il counter è multiplo di 3
    - Loggo Fizz in console
  - Altrimenti SE il counter è multiplo di 5
    - Loggo Buzz in console
  - Altrimenti
    - Loggo il counter in console

#### Bonus 1

<hr>

- Creo un ciclo incrementale con counter da 1 a 100

  - Creo un elemento .box
  - SE il counter è multiplo di 3 e 5
    - Setto il testo del box in FizzBuzz
  - Altrimenti SE il counter è multiplo di 3
    - Setto il testo del box in Fizz
  - Altrimenti SE il counter è multiplo di 5
    - Setto il testo del box in Buzz
  - Altrimenti

    - Setto il testo del box con il counter

  - Appendo l'elemento creato al container

#### Bonus 2

<hr>

- Creo un ciclo incrementale con counter da 1 a 100

  - Creo un elemento div.box
  - Assegno ad una variabile boxText il testo con il counter
  - Dichiaro una variabile boxType

  - SE il counter è multiplo di 3 e 5
    - Setto boxText su FizzBuzz
    - Setto boxType su red
  - Altrimenti SE il counter è multiplo di 3
    - Setto boxText su Fizz
    - Setto boxType su green
  - Altrimenti SE il counter è multiplo di 5

    - Setto boxText su Buzz
    - Setto boxType su yellow

  - Setto l'innerText del box su boxText
  - Appendo al box una classe boxType

  - Appendo l'elemento creato al container
