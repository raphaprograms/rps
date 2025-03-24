
function getComputerChoice() {
    spin = 10 * Math.random()
    if (spin >= 0 && spin < 3.3) {
        return "rock"
    }
    else if (spin >= 3.3 && spin < 6.6) {
        return "paper"
    }
    else if (spin >= 6.6 && spin < 10) {
        return "scissors"
    }
}
console.log(getComputerChoice());