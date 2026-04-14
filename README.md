# Laboration 2 - TypeScript
Här är min lösning på laboration 2 i kursen Programmering med TypeScript. Applikationens funktionalitet är en ToDo-applikation där användare kan lägga till uppgifter, markera dem som klara och därmed skicka den punkten till en lista med avslutade uppgifter, samt ta bort dem från applikationen.

För att ta fram funktionaliteten för denna webbplats har jag använt TypeScript och objektorienterad programmering. I todolist.ts skapades ett interface som döptes till ToDo och en class som döptes till ToDoList. Med dessa skapade jag olika metoder som genomförde sin funktionalitet när en punkt blev markerad som färdig eller borttagen från listan. Jag skapade även en metod för att listan ska sparas i användarens local storage och därmed inte försvinner när sidan laddas om.

I main.ts hämtade jag olika element från DOM och manipulerade dem på ett sätt som skapade webbplatsens funktionalitet. Jag använde forEach för att loopa igenom alla punkter och därefter skapa en <li>, en klar-knapp och en ta bort-knapp för varje punkt som läggs till av användaren i listan. Sedan används eventlyssnare för att användaren vid klick på knapparna, förflyttar de punkter som markeras som klara till en annan lista, samt tar bort de punkter som tas bort.

I övrigt har jag använt mig av en automatiserad arbetsprocess med hjälp av vite och använt HTML och SCSS som verkyg för att utveckla denna webbplats. 

## Länk till webbapplikation
https://laboration-2-typescript.netlify.app/
