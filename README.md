

### Szükséges parancsok és lépések
**Ha IDE-ben nyitod meg**

*Telepítés:*
1. Telepíteni kell a postgreSQL-t ha nincs [PSQL Link](https://www.postgresql.org/download/windows/)
2. Telepíteni kell a Javát ha nincs [Java Link](https://www.oracle.com/java/technologies/downloads/)
3. Telepíteni kell a Maven-t ha nincs [Maven Link](https://maven.apache.org/)


*Előkészületek:*
1. Létre kell hozni egy postgresql felhasználót és egy database-t(Én ezt pgAdmin segítségével tettem meg) [pgAdmin Link](https://www.pgadmin.org/download/pgadmin-4-windows/)
2. A projekten belül a `backend/src/main/resources/`-ben található application.properties file-ban módosísd az adatokat a te általad megadottakra
3. A spring.datasource.url legvégénél a DB nevét kell megadni
4. Futtasd le a PopulateDB.sql-t, ez feltölti a DB-t adatokkal

*Szükséges parancsok:*
1. Nyiss egy terminált és navigálj a `/frontend`- mappába
2. Futtasd az
```sh
   npm install
   ```
parancsot
3.  Navigálj a `/backend`- mappába
4. Futtasd az
```sh
   mvn clean install
   ```
parancsot


*Indító parancsok:*

1. A frontend-et a `/frontend` mappában a 
```sh
   npm run dev
   ```
-vel lehet futtatni
2. A backend-et a `/backend` mappában a
```sh
   mvn spring-boot:run
   ```
-al lehet futtatni

### Egyéb infó

Egy felhasználó lesz a DB-ben  és a felhasználónév és a jelszó is ugyan az : test

Az oldalon a rendezés a termékek nevére való kattintással valósítható meg.

Köszönöm a türelmeteket és ha bármi adódna szóljatok!:)
