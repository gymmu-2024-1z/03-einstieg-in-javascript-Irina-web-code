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

    const currentUpperCaseLetter = currentLetter.toUpperCase()

    result.push(currentUpperCaseLetter)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02)

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count++
    }
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      count = count + 1
    }
  }
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
      count = count + 1
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
  }
  return count
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    // Finde heraus, ob sich im Text das Wort und befindet sich an der Stelle i
    if (input[i] === "u" && input[i + 1] === "n" && input[i + 2] === "d") {
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
      currentElement = 3
    }
    result.push(currentElement)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe09(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Teste, ob eine Eingabe genau sech Zeichen lang ist
    if (input.length === 6) {
      return true
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Teste, ob die Eingabe ein korrekter RGB Hexcode ist
    if (input[i] === "#") {
      return true
    } else {
      return false
    }
  }
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {}
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

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
    }
  }

  return position
}
linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  const result = []

  let pos = -1
  let eCount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn du ein e siehst dann zähle eins hoch
    if (currentElement === "e" || currentElement === "E") {
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
      // speichere die Position
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
  let firstPart = []
  let secondPart = []
  let dollarfound = false

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn kein Dollarzeichen gefunden wurde, dann hänge an den ersten Teil an
    if (dollarfound === false) {
      firstPart.push(currentElement)
    } else {
      secondPart.push(currentElement)
    }

    // Wenn du ein Dollarzeichen findest
    if (currentElement === "$") {
      // setze dollarfound auf true
      dollarfound = true
    }
  }
  // Gib das Resultat zurück
  return [firstPart.join(""), secondPart.join("")]
}
linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const result = []

  // erstelle eine Variable für eine Liste
  let list = []

  for (let i = 0; i < input.length; i++) {
    // Lies die eingabe als Liste ein
    list = input.split(",")
    // Trenne die Einträge in der Liste mit einem Komma
    list = list.join(",").split(",")
  }
  // Gib die Liste zuruck
  return list[list.join(",")]
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

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
  }
  // gib die Ausgabe zurück
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  // Erstelle eine Variable um current element als Leerschlag zu definieren
  let currentElement = " "

  for (let i = 0; i < input.length; i++) {
    // Lies die eingabe ein
    currentElement = input[i]
    // Wenn du ein Leerzeichen findest
    if (currentElement === ".") {
      // Prüfe, ob das nächste Zeichen ein Punkt ist
      if (input[i + 1] === " ") {
        // Wenn ja, gib es als richtig zurück
        //return true
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

export function aufgabe21(args) {
  const input = args
  const result = []

  // Definiere die Eingabe als ein Element
  let currentElement = ""

  for (let i = 0; i < input.length; i++) {
    // Lies die Eingabe von hinten ein
    currentElement = input[input.length - i - 1]
    // Gib die Eingabe so zurück, wie du sie eingelesen hast
    result.push(currentElement)
  }

  return result
}

linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    // Lies die Eingabe ein
    const currentElement = input[i]
    // Ersetze jedes Zeichen mit einem Underscore
    result.push("_")

    // Tu das, bis du ein k findest
    if (currentElement === "k" || currentElement === "K") {
      break
    }
  }

  return result
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
  const text = "Bitte sortiere mich!"
  const list = text.split("") // Hier wird der Text zu einer Liste gemacht, sodass wir dann diese Liste sortieren können
  for (
    let i = 0;
    i < list.length;
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
