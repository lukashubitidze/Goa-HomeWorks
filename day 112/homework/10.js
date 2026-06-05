console.log("Game Started");

// 2 წამის შემდეგ
setTimeout(() => {
    console.log("Player Joined");
}, 2000);

// კიდევ 2 წამის შემდეგ (ანუ თავიდან 4 წამში)
setTimeout(() => {
    console.log("Game Over");
}, 4000);