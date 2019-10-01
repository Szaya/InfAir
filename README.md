## Funkcionális követelmények
* Felhasználóként szeretném látni a repülőgép járatokat, és információkat velük kapcsolatban. --> Járatok kilistázása.
* Felhasználóként szeretnék keresni a kilistázott járatok között. --> Járatok szűrése. (honnan, hova, indulási idő, tervezett megérkezési idő, ár) 
* Felhasználóként szeretnék lefoglalni egy helyet álltalam kiválasztott járatra. --> Repülőjegy lefoglalás.
* Felhasználóként szeretnék extra szolgáltatásokat is hozzá adni a repülőjegyemhez. --> Extra szolgáltatások hozzárendelése a repülőjegyhez.

* Felhasználóként szeretném kilistázni foglalásaimat. --> Foglalások kilistázása.
* Felhasználóként szeretném lemondani a foglalásomat. --> Foglalás tőrlése.
* Felhasználóként szeretném módosítani az extra szolgáltatásaimat. --> Foglaláshoz rendelt extrák módosítása.

* Ügyintézőként szeretnék repülögép járatokat felvenni. --> Új járat hozzáadása
* Ügyintézőként szeretnék repülögép járatok adatait módosítani. --> Járat adatainak módosítása.
* Ügyintézőként szeretnék akcíókat kiírni. --> Új akció felvétele.
* Ügyintézőként szeretnék akcíókat módisítani. --> Akció adatainak módósítása.
* Ügyintézőként szeretnék akcíókat törőlni. --> Akció törlése.

* Operátorként szeretnék járatokat törőlni. --> Járat tőrlése.
* Operátorként szeretnék mások foglalásait kilistázni. --> Foglalások kilistázása.
* Operátorként szeretnék mások foglalásait módosítani. --> Foglalások módosítása/törlése/új felvétele.

# Nem funkcionális követelmények
* Felhasználóbarát, ergonomikus elrendezés és kinézet.
* Gyors működés.
* Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.
  
# Szerepkörök
felhasználó: 
* az adatbázisban tud keresni foglalni
* saját foglalásait módosítani

ügyintéző: 
* felhasználó feladatkörein túl, 
* tud járatokat felvenni, módosítani
* tud akciókat kiírni, törőlni, módosítani

operátor:
* ügyintéző feladatkörein túl, 
* járatokat törőlni
* más felhasználók foglalásait tudja módosítani
