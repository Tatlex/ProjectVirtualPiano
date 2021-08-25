

keys = document.addEventListener("keydown", function(event) {
    if(event.code === "KeyA"){
        console.log("The 'A' key pressed.");
        let audio_A = new Audio("music/A.mp3");
        audio_A.play();
    }
    else if (event.code === "KeyS"){
        console.log("The 'S' key  pressed.");
        let audio_S = new Audio("music/S.mp3");
        audio_S.play();
    }
    else if (event.code === "KeyD"){
        console.log("The 'D' key  pressed.");
        let audio_D = new Audio("music/D.mp3");
        audio_D.play();
    }
    else if (event.code === "KeyF"){
        console.log("The 'F' key  pressed.");
        let audio_F = new Audio("music/F.mp3");
        audio_F.play();
    }
    else if (event.code === "KeyG"){
        console.log("The 'G' key  pressed.");
        let audio_G = new Audio("music/G.mp3");
        audio_G.play();
    }
    else if (event.code === "KeyH"){
        console.log("The 'H' key  pressed.");
        let audio_H = new Audio("music/H.mp3");
        audio_H.play();
    }
    else if (event.code === "KeyJ"){
        console.log("The 'J' key  pressed.");
        let audio_J = new Audio("music/J.mp3");
        audio_J.play();
    }
    else{
        console.log("Error");
    }
});




