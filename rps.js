function rps_game(user_choice) {

    let choices = ["rock", "paper", "scissors"];

    let human_choice = user_choice.id;

    let computer_choice = choices[Math.floor(Math.random() * 3)];

    let results = decide_winner(human_choice, computer_choice);

    let message;

    if (results[0] > results[1]) {
        console.log(computer_choice);
        message = "You Won";
    } else if (results[0] < results[1]) {
        console.log(computer_choice);
        message = "You Lose";
    } else {
        console.log(computer_choice);
        message = "It's A Tie!";
    }

    display_result(human_choice, computer_choice, message);

}

function decide_winner(human_choice, computer_choice) {
    let rps_database = {
        "rock": {"scissors": 1, "rock": 0.5, "paper": 0},
        "paper": { "rock": 1, "paper": 0.5, "scissors": 0},
        "scissors": {"paper": 1, "scissors": 0.5, "rock": 0}
    };

    let n_user_choice = rps_database[human_choice][computer_choice];
    let n_computer_choice = rps_database[computer_choice][human_choice];

    return [n_user_choice, n_computer_choice];
}

function display_result(human_choice, computer_choice, message) {
    let image_database = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    document.getElementById("rps_frame").innerHTML = "<img height=\"75px\" width=\"75px\" src=" + image_database[human_choice] + ">" + "<h2>" + message + "</h2>" + "<img height=\"75px\" width=\"75px\" src=" + image_database[computer_choice] + ">" + "</div>" + "</br>" + "<button><a href=\"javascript:history.go(0)\">Play Again<\a></button>";

    document.getElementById("rps_frame").appendChild = ""

}