keys = document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        console.log("The 'A' key pressed.");
        let audio_A = new Audio("music/A.mp3");
        audio_A.play();

        let A_key = document.getElementById("A_key")
        A_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyA") {
                A_key.style.background = "white";
            }
        });
    } else if (event.code === "KeyS") {
        console.log("The 'S' key  pressed.");
        let audio_S = new Audio("music/S.mp3");
        audio_S.play();

        let S_key = document.getElementById("S_key")
        S_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyS") {
                S_key.style.background = "white";
            }
        });
    } else if (event.code === "KeyD") {
        console.log("The 'D' key  pressed.");
        let audio_D = new Audio("music/D.mp3");
        audio_D.play();

        let D_key = document.getElementById("D_key")
        D_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyD") {
                D_key.style.background = "white";
            }
        });
    } else if (event.code === "KeyF") {
        console.log("The 'F' key  pressed.");
        let audio_F = new Audio("music/F.mp3");
        audio_F.play();

        let F_key = document.getElementById("F_key")
        F_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyF") {
                F_key.style.background = "white";
            }
        });
    } else if (event.code === "KeyG") {
        console.log("The 'G' key  pressed.");
        let audio_G = new Audio("music/G.mp3");
        audio_G.play();

        let G_key = document.getElementById("G_key")
        G_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyG") {
                G_key.style.background = "white";
            }
        });
    } else if (event.code === "KeyH") {
        console.log("The 'H' key  pressed.");
        let audio_H = new Audio("music/H.mp3");
        audio_H.play();

        let H_key = document.getElementById("H_key")
        H_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyH") {
                H_key.style.background = "white";
            }
        });
    } else if (event.code === "KeyJ") {
        console.log("The 'J' key  pressed.");
        let audio_J = new Audio("music/J.mp3");
        audio_J.play();

        let J_key = document.getElementById("J_key")
        J_key.style.background = "gray";
        document.addEventListener("keyup", function (event) {
            if (event.code === "KeyJ") {
                J_key.style.background = "white";
            }
        });
    }

    // BLACK KEYS BELOW

    else if (event.code === "KeyW") {
        console.log("The 'W' key  pressed.");
        let audio_W = new Audio("music/W.mp3");
        audio_W.play();


    } else if (event.code === "KeyE") {
        console.log("The 'E' key  pressed.");
        let audio_E = new Audio("music/E.mp3");
        audio_E.play();


    } else if (event.code === "KeyT") {
        console.log("The 'T' key  pressed.");
        let audio_T = new Audio("music/T.mp3");
        audio_T.play();

    } else if (event.code === "KeyY") {
        console.log("The 'Y' key  pressed.");
        let audio_Y = new Audio("music/Y.mp3");
        audio_Y.play();

    } else if (event.code === "KeyU") {
        console.log("The 'U' key  pressed.");
        let audio_U = new Audio("music/U.mp3");
        audio_U.play();

    } else {
        console.log("Error, choose another key");
    }
});