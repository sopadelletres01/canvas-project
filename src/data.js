const arrayDeEscenas = [
  {
    id: "hall",
    background: document.getElementById("hall"),
    objectArray: [
      {
        x: 840,
        y: 350,
        height: 250,
        width: 200,
        box: document.getElementById("door"),
        goTo: "statue"
      }
    ]
  },
  {
    id: "statue",
    background: document.getElementById("statue"),
    objectArray: [
      {
        x: 400,
        y: 600,
        height: 100,
        width: 100,
        box: document.getElementById("door2"),
        goTo: "statue2"
      },
      {
        x: 1300,
        y: 320,
        height: 40,
        width: 90,
        box: document.getElementById("key"),
        item: "goldenkey"
      }
    ]
  },
  {
    id: "statue2",
    background: document.getElementById("statue2"),
    objectArray: [
      {
        x: 200,
        y: 200,
        height: 100,
        width: 100,
        box: document.getElementById("door3"),
        goTo: "stairs1"
      },
      {
        x: 800,
        y: 200,
        height: 100,
        width: 100,
        box: document.getElementById("door6"),
        goTo: "stairs1l"
      }
    ]
  },
  {
    id: "stairs1",
    returnTo: "statue2",
    background: document.getElementById("stairs1"),
    objectArray: [
      {
        x: 600,
        y: 200,
        height: 100,
        width: 100,
        box: document.getElementById("door4"),
        goTo: "stairs2"
      }
    ]
  },
  {
    id: "stairs1l",
    returnTo: "statue2",
    background: document.getElementById("stairs1l"),
    objectArray: [
      {
        x: 600,
        y: 200,
        height: 100,
        width: 100,
        box: document.getElementById("door7"),
        goTo: "stairs2l"
      }
    ]
  },
  {
    id: "stairs2",
    returnTo: "stairs1",
    background: document.getElementById("stairs2"),
    objectArray: [
      {
        x: 500,
        y: 900,
        height: 100,
        width: 100,
        box: document.getElementById("door5"),
        goTo: "stairs3"
      }
    ]
  },
  {
    id: "stairs2l",
    returnTo: "stairs1l",
    background: document.getElementById("stairs2l"),
    objectArray: [
      {
        x: 200,
        y: 500,
        height: 100,
        width: 100,
        box: document.getElementById("door5"),
        goTo: "stairs3"
      }
    ]
  },
  {
    id: "stairs3",
    returnTo: "stairs1l",
    background: document.getElementById("stairs3"),
    objectArray: [
      {
        x: 200,
        y: 500,
        height: 100,
        width: 100,
        box: document.getElementById("door8"),
        goTo: "leftdoor"
      },
      {
        x: 800,
        y: 200,
        height: 100,
        width: 100,
        box: document.getElementById("door9"),
        goTo: "frontdoor"
      }
    ]
  },
  {
    id: "leftdoor",
    returnTo: "stairs3",
    background: document.getElementById("leftdoor"),
    objectArray: [
      {
        x: 200,
        y: 500,
        height: 100,
        width: 100,
        box: document.getElementById("door10"),
        goTo: "leftdoor"
      }
    ]
  },
  {
    id: "frontdoor",
    returnTo: "stairs3",
    background: document.getElementById("frontdoor"),
    objectArray: [
      {
        x: 200,
        y: 500,
        height: 100,
        width: 100,
        box: document.getElementById("door11"),
        goTo: "mainroom"
      }
    ]
  },
  {
    id: "mainroom",
    returnTo: "frontdoor",
    condition : "goldenkey",
    background: document.getElementById("mainroom"),
    objectArray: [
      {
        x: 200,
        y: 500,
        height: 100,
        width: 100,
        box: document.getElementById("door12"),
        goTo: "mainroom"
      }
    ]
  }
]

export { arrayDeEscenas };