const arrayDeEscenas = [
  {
    id: "hall",
    hint : "La puerta estaba abierta, todas las luces están encendidas pero no veo a nadie. Sin embargo, noto una presencia... Será mejor que me de prisa",
    background: document.getElementById("hall"),
    objectArray: [
      {
        x: 150,
        y: 450,
        height: 350,
        width: 250,
        box: document.getElementById("door23"),
        goTo: "frontdoor2l"
      },
      {
        x: 850,
        y: 380,
        height: 250,
        width: 200,
        box: document.getElementById("door"),
        goTo: "statue2"
      },
      {
        x: 1550,
        y: 450,
        height: 350,
        width: 250,
        box: document.getElementById("door15"),
        goTo: "frontdoor2"
      }
    ]
  },
  {
    id: "frontdoor2",
    background: document.getElementById("frontdoor2"),
    objectArray: [
      {
        x: 1340,
        y: 450,
        height: 250,
        width: 200,
        box: document.getElementById("door16"),
        goTo: "rightwall"
      },
      {
        x: 340,
        y: 450,
        height: 250,
        width: 200,
        box: document.getElementById("door19"),
        goTo: "frontdoor2zoom"
      },
    ]
  },
  {
    id: "frontdoor2l",
    hint : "Esto tiene muy mala pinta... Mejor no sigo por ahí",
    background: document.getElementById("frontdoor2l"),
    returnTo:"hall",
    audio: document.getElementById("corridor"),
    objectArray: [
      {
        x: 900,
        y: 250,
        height: 450,
        width: 300,
        box: document.getElementById("door22"),
        goTo: "jumpscare2"
      },
    ]
  },
  {
    id: "jumpscare2",
    background: document.getElementById("jumpscare2"),
    returnTo:"hall",
    audio: document.getElementById("jumpscare2audio"),
    objectArray: [
      {
        x: 900,
        y: 250,
        height: 450,
        width: 300,
        box: document.getElementById("door22"),
      },
    ]
  },
  {
    id: "frontdoor2zoom",
    background: document.getElementById("frontdoor2zoom"),
    objectArray: [
      {
        x: 1340,
        y: 450,
        height: 250,
        width: 200,
        box: document.getElementById("door18"),
        goTo: "rightwall"
      },
    ]
  },
  {
    id: "rightwall",
    background: document.getElementById("rightwall"),
    returnTo : "frontdoor2",
    objectArray: [
      {
        x: 825,
        y: 475,
        height: 100,
        width: 70,
        box: document.getElementById("candle"),
        item: "candle"
      },
    ]
  },
  {
    id: "statue2",
    background: document.getElementById("statue2"),
    returnTo : "hall",
    objectArray: [
      {
        x: 200,
        y: 500,
        height: 400,
        width: 300,
        box: document.getElementById("door6"),
        goTo: "stairs1l"
      },
      {
        x: 900,
        y: 400,
        height: 300,
        width: 300,
        box: document.getElementById("door13"),
        goTo: "statue"
      },
      {
        x: 1600,
        y: 500,
        height: 400,
        width: 300,
        box: document.getElementById("door3"),
        goTo: "stairs1"
      },
    ]
  },
  {
    id: "statue",
    background: document.getElementById("statue"),
    objectArray: [
      {
        x: 750,
        y: 600,
        height: 150,
        width: 300,
        box: document.getElementById("door2"),
        goTo: "statuezoom"
      },
    ]
  },
  {
    id: "statuezoom",
    background: document.getElementById("statuezoom"),
    objectArray: [
      {
        x: 800,
        y: 500,
        height: 100,
        width: 100,
        box: document.getElementById("door14"),
        requiredItem: "candle"
      },
    ]
  },
  {
    id: "stairs1",
    returnTo: "statue2",
    background: document.getElementById("stairs1"),
    objectArray: [
      {
        x: 500,
        y: 400,
        height: 400,
        width: 400,
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
        x: 1000,
        y: 400,
        height: 400,
        width: 400,
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
        x: 100,
        y: 50,
        height: 400,
        width: 400,
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
        x: 1400,
        y: 50,
        height: 400,
        width: 400,
        box: document.getElementById("door21"),
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
        x: 100,
        y: 300,
        height: 300,
        width: 500,
        box: document.getElementById("door8"),
        goTo: "leftdoor"
      },
      {
        x: 700,
        y: 300,
        height: 300,
        width: 300,
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
        x: 700,
        y: 100,
        height: 800,
        width: 600,
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