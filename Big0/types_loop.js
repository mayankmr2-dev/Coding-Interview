const fishes = ["Moto", "Genie", "Nemo", "Pascal", "Ferrari", "Fifo"]

for (let i = 0; i < fishes.length; i++) {
    console.log(i, "--->", fishes[i]);
    if (fishes[i] === "Nemo") {
        console.log("Found NEMO !");
    }
}


function findingNemo(array) {
    array.forEach((element, index) => {
        console.log(index, " function element ", element);
    });
}

findingNemo(fishes)


function findingNemo2(array) {
    for (let fish of array) {
        console.log("Direct machli ----> ", fish);
    }
}

findingNemo2(fishes)