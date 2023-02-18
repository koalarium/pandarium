# PANDARIUM

## WSTĘP

Witam wszystkich! W tym miejscu znajduje się cała baza wiedzy, która jest 
Tobie potrzebna do skorzystania z naszego repozytorium.


## DEPENDENCIES

1. Tailwindcss
2. Docker
3. MongoDB
4. *Mongoose ?*


## COMMITY

### Jak wysyłać zmiany (commit'y)?

1. Zaznacz (stage) twoje wszystkie zmiany, które chcesz wysłać.
2. Wpisz **odpowiednią** nazwę twojego commit'a:
    - **[NEW]** Krótki opis co zostało dodane
    - **[UPDATE]** Krótki opis co zostało zmienione
    - **[BUGFIX]** Krótki opis co zostało naprawione (tylko jeśli błąd został naprawiony!)
    - **[INIT]** Co zostało zainicjowane (np. nowe bilioteki, lub podstawa brancha)
    - **[README]** Co zostało zmienione w README (ZMIANY DOTYCZĄCE TYLKO README!)
3. Zatwierdzamy zmiany (CTRL + ENTER w polu nazwy) lub za pomocą przycisku Commit.
4. Synchronizujemy zmiany za pomocą dwóch "goniących się" strzałeczek. (po prostu wysyłamy zmiany)

### FAQ

> Pojawił się błąd Marge Stages, co robić?

Jeśli pojawił się taki błąd to oznacza, że ktoś wcześniej wysłał zmiany, które modyfikowały plik, który ty też właśnie chcesz wysłać. W takim wypadku najlepiej jest się skontaktować z osobą, która wysłała poprzednią zmianę i razem zdecydować, które zmiany zostają a które można podmienić na twoje.

**UWAGA!** *taki błąd jest dość poważny i należy bardzo ostrożnie modyfikować takie pliki! W najgorszym scenariuszu cała struktura strony i pliki mogą się wysypać!*

> Czym jest incoming change / current change?

**Incoming change** są to zmiany, które "przychodzą" od kogoś innego do naszych plików. 
Analogicznie **Current change** są to te zmiany, które aktualnie masz w swoim kodzie (to na czym pracowałeś/aś).


## BAZA DANYCH

### Jak pracujemy z bazą danych?

Pracujemy obecnie na MongoDB, aby je poprawnie skonfigurować sprawdź kategorię niżej w celu instalacji.
Wymagany będzie do tego Docker oraz około 10 GB wolnego miejsca, aby maszyna miała "miejsce".

Obsługujemy bazę danych za pomocą wszystkich podstron _/api/*_.


### Jak zainstalować bazę danych?

1. Zainstaluj Dockera:
    - w tym miejscu może okazać się potrzebny podsystem (najlepiej Ubuntu)
    - w Internecie jest milion poradników, poradzisz sobie [How to install Docker on Windows 11/10 ?]
2. Włącz Dockera (wielorybek musi być zielony).
3. Otwórz klasycznie całe nasze repozytorium Pandarium.
4. Zakomentuj odpowiednie linie w pliku *next.config.js*.
5. Odkomentuj odpowiednie linie w pliku *next.config.js*.
6. W CMD wpisz odpowiednią komendę:
    - ```docker-compose up --build --force-recreate-```
7. Strona gotowa do pracy dostępna klasycznie pod adresem ```localhost:3000```.

