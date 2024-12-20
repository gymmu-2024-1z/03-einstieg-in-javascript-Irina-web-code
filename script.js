import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]

    if (currentElement === "e" || currentElement === "E") {
      // do nothing
    } else {
      // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
      result.push(currentElement)
    }
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentLetter = input[i]
    // unser konstanter aktueller Buchstabe/Element ist auf der Liste auf Position i

    const currentUpperCaseLetter = currentLetter.toUpperCase() // Hier wird das aktuelle Element bzw. der aktuelle Buchstabe in einen Grossbuchstaben umgewandelt

    result.push(currentUpperCaseLetter) // Im Resultat muss ein Grossbuchstabe ausgegeben werden
  }
  return result.join("") // Das Resultat wird zurückgegeben und daraus wird noch ein Text gemacht, weil sonst alles von Kommas getrennt wird
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = [] //Unser Resultat ist nun noch eine leere Liste
  let count = 0 // Weil wir in dieser Aufgabe etwas zählen müssen, muss der Count auf Null gesetzt werden, da wir hier noch nichts gezählt haben

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // Hier wird gefragt, ob das aktuelle Element ein e ist
      count = count + 1 // Wenn ja, dann wird der Count um 1 erhöht
    } else if (currentElement === "E") {
      // Wenn das aktuelle Element ein E (Grossbuchstabe) ist, dann wird der Count ebenfalls um 1 erhöht
      count++
    }
  }
  return count // Wenn die ganze Liste durchgegangen wurde, wird der Count zurückgegeben
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    // Der charCode gibt immer den ascii wert von einem Zeichen zurück

    if (ascii >= 65 && ascii <= 90) {
      // Das sind die Ascii Werte von Grossbuchstaben und hier prüft man, ob die Eingabe einer von denen ist
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Hier wird das gleiche gemacht einfach mit Kleinbuchstaben
      result.push(currentElement)
    } else if (ascii === 32) {
      // Hier wird das gleiche gemacht mit einem Leerzeichen
      result.push(currentElement)
    }
  }
  // Für den Fall, dass es noch mehrere Leerzeichen nebeneinander gibt, werden diese gefiltert

  const result2 = []

  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]

    if (currentElement === " " && nextElement === " ") {
      // Hier prüft es, ob zwei Leerzeichen nebeneinander stehen
    } else {
      result2.push(currentElement)
    }
  }
  // Hier werden nun die Leerzeichen gezählt

  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // Da es ein Wort mehr ist, muss der Count um eins erhöht werden
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe05(args) {
  const input = args
  const result = []
  let count = 0
  // Zähle alle Grossbuchstaben im Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn es ein sonderzeichen ist, dann mache nichts
    if (currentElement === " ") {
      // ignorieren
      // ignoriere auch punkte
    } else if (currentElement === ".") {
      // ignorieren
    } else if (currentElement === currentElement.toUpperCase()) {
      count = count + 1 // Alle Grossbuchstaben werdem im Text gezählt
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let count = 0
  // Zähle alle Sonderzeichen im Text
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Zähle alle Sonderzeichen im Text
    if (currentElement === " ") {
      // Zähle das current Element
      count = count + 1
    } else if (currentElement === ".") {
      // Zähle das current Element
      count = count + 1
    }
    // Hier sehen wir in der Aufgabe, dass alle Leerzeichen und Punkte gezählt werden. Wenn wir noch andere Zeichen zählen wollen würden, müssten wir dafür noch einen Befehl geben.
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    // Finde heraus, ob sich im Text das Wort und befindet an der Stelle i
    if (input[i] === "u" && input[i + 1] === "n" && input[i + 2] === "d") {
      // Hier machen wir einen Befehl für ein Wort, das heisst, dass wir nur hochzählen, wenn diese drei Buchstaben hintereinander im Text stehen bzw wenn nach dem u zuerste ein n und dann ein d steht
      count = count + 1
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    let currentElement = input[i]
    if (currentElement === "e") {
      // Hier wird getestet, ob das aktuelle Element ein e ist
      currentElement = 3 // Hier wird das aktuelle Element e auf 3 umgewandelt
    }
    result.push(currentElement) // Das umgewandelte Element (nun 3) wird ins Resultat gestossen
  }

  return result.join("") // Das Resultat wird zurückgegeben und zum Text gemacht
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Teste, ob eine Eingabe genau sechs Zeichen lang ist
    if (input.length === 6) {
      // Wenn die Länge der Eingabe genau sechs Zeichen, nicht mehr und nicht weniger hat, dann wird das Resultat true also richtig zurückgegeben
      return true
    } else {
      // Wenn es mehr oder weniger als sechs Zeichen hat, dann wird das Resultat false also falsch zurueckgegeben
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []
  if (input.length !== 7) {
    // Hier prüfen wir zuerst, ob die Eingabe sieben Zeichen lang ist, weil ein Hexcode ein hashtag und sechs andere Zeichen hat
    return false
  }
  if (input[0] !== "#") {
    // Hier wird geprüft, ob das erste Zeichen und nur das erste zeichen kein Hashtag ist und wenn es keines ist, dann wird das Resultat falsch zurückgegeben
    // das Ausrufezeichen steht hier für ungleich
    return false
  }

  for (
    let i = 1; // Hier müssen wir erst ab der Position eins beginnen zu zählen, weil das erste Zeichen, das ein Hashtag sein muss, anders behandelt wird und nicht von diesem Befehl geprüft wird
    i < input.length;
    i++
  ) {
    // Teste, ob die Eingabe ein korrekter RGB Hexcode ist
    const currentElement = input[i]
    const asciiCode = currentElement.charCodeAt(0) // Hier machen wir den Befehl, dass die Aufgabe den Ascii code verwenden soll, der den Zeichen bestimmte Nummern gibt
    if (
      (asciiCode >= 48 && asciiCode <= 57) ||
      (asciiCode >= 65 && asciiCode <= 70)
    ) {
      // Hier soll getestet werden, ob das Zeichen in der Eingabe eine Zahl zwischen 0 und 9 oder ein Buchstaben von A bis F ist, hier ist es mit den Ascii Nummern beschrieben, die in der Tabelle diese Zeichen definieren
    } else {
      return false
    }
  }
  return true
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe12(args) {
  const input = args
  const result = []

  // erstelle eine Variable um die Position des es zu speichern
  let position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e findest
    if (currentElement === "e") {
      // speichere die Position des e's
      position = i
      // breche ab
      break
    }
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  const result = []

  let position = -1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    // Wenn du ein e findest
    if (currentElement === "e") {
      // speichere die Position des e's
      position = i
    } // Hier wird die ganze Liste lang getestet, ob das aktuelle Element ein e ist und immer wenn ein neues e dazugekommen ist, wurde dessen Position gespeichert. Wenn die ganze Eingabe also durchgelesen wurde, haben wir immer noch die Position des letzten e's gespeichert und die wird dann zurückgegeben.
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []

  let pos = -1 // Hier steht ein minus eins, damit, wenn wir kein e finden, dass das Ergebnis dann -1 ist und dadurch wissen wir dann, dass ein e gefunden wurde // Beeinflusst aber nicht das Ergebnis bzw dessen Position
  let eCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn du ein e siehst dann zähle eins hoch
    if (currentElement === "e" || currentElement === "E") {
      // Um die Position des dritten e's zu finden, müssen wir jedes Mal eins hochzählen, wenn ein e gefunden wird
      eCount = eCount + 1
    }

    // Wenn eCount genau gleich 3 ist, dann speichere die Position
    if (eCount === 3) {
      pos = i
    }
  }
  return pos
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []

  let position = -1

  for (let i = 0; i < input.length; i++) {
    // Wenn du ein Leerzeichen findest
    if (input[i] === " ") {
      // speichere die Position, damit wir wissen, wie lange die Eingabe bis zu der Stelle des Leerzeichens ist
      result.push(i)
      position = i
      // breche ab
      break
    }
  }
  return position
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []

  // erstelle eine Variable um zwei Teile einer Liste zu speichen
  // Wir haben hier zwei leere Listen erstellt bzw zwei leere Teile einer Liste
  let firstPart = []
  let secondPart = []
  let dollarfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn kein Dollarzeichen gefunden wurde, dann hänge an den ersten Teil an
    if (dollarfound === false) {
      //
      firstPart.push(currentElement)
    } else {
      // Wenn aber ein Dollarzeichen gefunden wurde, dann hänge alles was danach kommt an den zweiten Teil der Liste
      secondPart.push(currentElement)
    }

    // Wenn du ein Dollarzeichen findest
    if (currentElement === "$") {
      // setze dollarfound auf true
      dollarfound = true
      // Hier müssen wir noch einstellen, dass wenn man ein Dollarzeichen gefunden hat, dass dollarfound dann richtig ist, damit der obere Teil der Aufgabe funktioniert, weil alles was auf dollarfounnd = true steht, dann im zweiten Teil der Liste stehen wird
    }
  }
  // Gib das Resultat zurück und mache aus beiden Teilen der Liste einen Text
  return [firstPart.join(""), secondPart.join("")]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentlist = [] // Hier werden die Zeichen aus der Eingabe geseichert, die bearbeitet werden sollen.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wenn jetzt ein Leerzeichen kommt, dann wird alles was bereits vorhanden ist in die totalList geschrieben.

    if (currentElement === " ") {
      totalList.push(currentlist.join(""))
      currentlist.length = 0
    } else {
      currentlist.push(currentElement)
    }
  }
  //Alles was noch bis zum Ende gelesen wurde, wird in die Liste geschrieben
  totalList.push(currentlist.join(""))
  return totalList
}

linkupExerciseHandler('[data-click="aufgabe17"]', aufgabe17)

export function aufgabe18(args) {
  const input = args

  // Aufgabe 17 wird hier verwendet um eine Liste zu bekommen.
  const nameAge = aufgabe17(input)

  // Es wird hier unsere Aufgabenliste generiert.
  const result = []

  // Hier werden ganze Worte in die Liste geschrieben, das ist auch möglich
  result.push("Sie heissen")

  // Die Liste wird so zusammengesetzt, dass der Name und das Alter an der richtigen Stelle eingefügt werden.
  result.push(nameAge[0])
  result.push("und sind")
  result.push(nameAge[1])
  result.push("Jahre alt")

  //Das Resultat wird wie immer als Text zurückgegeben
  return result.join(" ")
}
linkupExerciseHandler('[data-click="aufgabe18"]', aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []

  // erstelle eine Variable, um current Element als alles was in input steht zu definieren
  let currentElement = input

  for (let i = 0; i < input.length; i++) {
    // Lies jedes Zeichen ein
    const currentElement = input[i]
    // Wenn du ein Zeichen findest
    result.push(currentElement)
    result.push(currentElement)
    // Hier wird das gefundene Zeichen einfach doppelt zurückgegeben
  }
  // gib die Ausgabe zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Lies die eingabe ein
    currentElement = input[i]
    // Wenn du einen Punkt findest
    if (currentElement === ".") {
      // Prüfe, ob das nächste Zeichen nach dem Punkt ein Leerzeichen ist
      if (input[i + 1] === " ") {
        // Wenn ja, gib es als richtig zurück
        return true
      }
      // Wenn nein, gib es als falsch zurück
      else {
        return false
      }
    }
  }
  return true
}

linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe22(args) {
  const input = args
  const result = []

  kfound = false

  for (let i = 0; i < input.length; i++) {
    // Lies die Eingabe ein
    const currentElement = input[i]

    if (currentElement === "k" || currentElement === "K") {
      // setze kfound auf true
      kfound = true

      // Ersetze jedes Zeichen mit einem Underscore
      if (kfound === false) {
        result.push("_")
      }
      // Tu das, bis du ein k findest
      if (currentElement === "k" || currentElement === "K") {
        // setze kfound auf true
        kfound = true
      }

      // Jetzt muss man noch sagen, was passiert, wenn kfound auf true ist
      if (kfound === true) {
        // Das Zeichen so zurückgeben, wie es vorher schon stand
        result.push(currentElement)
      }
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = []

  // erstelle eine Variable für das erste Zeichen
  const firstLetter = input[0]

  result.push(firstLetter)

  for (let i = 0; i < input.length; i++) {
    // Lies die eingabe ein
    currentElement = input[i]
  }
  // setze das erste Zeichen ein
  result.push(firstLetter)
  return result
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe27(args) {
  const input = args
  const result = [1, 3, "w"]

  const firstLetter = input[0]
  const secondLetter = input[1]

  const lastLetter = input[input.length - 1]
  const secondLastLetter = input[input.length - 2]

  result.push(firstLetter)

  for (let i = 0; i < input.length; i++) {
    // Lies die Eingabe ein
    const currentElement = input[i]
    // Prüfe, ob die Eingabe eine Zahl ist
    if (currentElement >= 0 && currentElement <= 9) {
      // Gib die Eingabe als richtig zurück
      return true
    }
    // Wenn die eingabe keine Zahl ist, dann gib es als falsch zurück
    else {
      return false
    }
  }

  result.push(secondLetter)

  return result
}

linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function Sortierverfahren1(args) {
  const text = args
  const list = text.split("") // Hier wird der Text zu einer Liste gemacht, sodass wir dann diese Liste sortieren können
  for (
    let i = 0;
    i < list.length - 1;
    i++ // Hier sieht man, dass der Input i auf der Position liegt und jeder weitere Input i+1 ist, so lange, wie die Liste
  ) {
    const currentElement = list[i] // Das konstante Element ist die Liste auf der Position i
    const nextElement = list[i + 1] // Das nächste Element in der Liste muss immer einse Position mehr haben, als das vorherige deshalb ist es + eine Position mehr als i
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // Hier muss er nocheinmal von vorne überprüfen, ob die Liste jetzt richtig sortiert ist
    }
  }
  const result = list.join("")
  console.log(result)
  return result
}

linkupExerciseHandler("[data-click=Sortierverfahren1]", Sortierverfahren1)

export function Sortierverfahren2(args) {
  const input = args.split("")
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Hier schauen wir, welches das kleinste Element in der Eingabe ist
    let min = input[i]
    let minIndex = i

    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < min) {
        min = input[j]
        minIndex = j
      }
    }
    const tmp = input[i]
    input[i] = min
    input[minIndex] = tmp
    // Das kleinste Element wird mit dem ersten Element vertauscht
    for (let k = i + 1; k < input.length; k++) {
      if (input[k] < min) {
        min = input[k]
        minIndex = k
      }
    }
    result.push(input[i])
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=Sortierverfahren2]", Sortierverfahren2)
export function Eisen(args) {
  const input = args
  const result = []
  let count = 0 // Hier setzen wir den Zähler auf null, damit das Ergebnis nicht verfälscht wird

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "f" && input[i + 1] === "e") {
      // Hier schauen, ob die eingabe ein f und danach ein e ist, wenn das stimmt wird beim Zähler um eins erhöht
      count = count + 1
    }
  }

  return count
}

linkupExerciseHandler("[data-click=Eisen]", Eisen)

export function Wasser(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "h" && input[i + 1] === "h") {
      result.push("o")
      i = i + 1
    } else {
      result.push(input[i])
    }
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=Wasser]", Wasser)

export function Ammoniak(args) {
  const input = args
  const result = []
  const lettern = "n"

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "h") {
      result.push(lettern)
      result.push(input[i])
      result.push(input[i])
      result.push(input[i])
    } else {
      result.push(input[i])
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=Ammoniak]", Ammoniak)
