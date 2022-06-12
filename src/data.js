const arrayDeEscenas = [
    {
      id: "hall",
      background : document.getElementById("hall"),
      objectArray : [
        {
          x : 840,
          y : 350,
          height : 250,
          width : 200,
          box : document.getElementById("door"),
          goTo : "statue"
        }
      ]
    },
    {
      id:"statue",
      background : document.getElementById("statue"),
      objectArray : [
        {
          x : 400,
          y : 600,
          height : 100,
          width : 100,
          box : document.getElementById("door2"),
          goTo : "statue2"
        },
        {
          x : 1300,
          y : 320,
          height : 40,
          width : 90,
          box : document.getElementById("key"),
          item : "goldenkey"
        }
      ]
    },
    {
      id:"statue2",
      background : document.getElementById("statue2"),
      objectArray : [
        {
          x : 200,
          y : 200,
          height : 100,
          width : 100,
          box : document.getElementById("door3"),
          goTo : "stairs1"
        },
        {
          x : 800,
          y : 200,
          height : 100,
          width : 100,
          box : document.getElementById("door6"),
          goTo : "stairs1l"
        }
      ]
    },
    {
      id:"stairs1",
      returnTo : "statue2",
      background : document.getElementById("stairs1"),
      objectArray : [
        {
          x : 600,
          y : 200,
          height : 100,
          width : 100,
          box : document.getElementById("door4"),
          goTo : "stairs2"
        }
      ]
    },
    {
      id:"stairs1l",
      returnTo : "statue2",
      background : document.getElementById("stairs1l"),
      objectArray : [
        {
          x : 600,
          y : 200,
          height : 100,
          width : 100,
          box : document.getElementById("door7"),
          goTo : "stairs2l"
        }
      ]
    },
    {
      id:"stairs2",
      background : document.getElementById("stairs2"),
      objectArray : [
        {
          x : 500,
          y : 900,
          height : 100,
          width : 100,
          box : document.getElementById("door5"),
          item : "key"
        }
      ]
    },
    {
        id:"stairs2l",
        background : document.getElementById("stairs2"),
        objectArray : [
          {
            x : 200,
            y : 500,
            height : 100,
            width : 100,
            box : document.getElementById("door5"),
            item : "key"
          }
        ]
      }
  ]

export {arrayDeEscenas};