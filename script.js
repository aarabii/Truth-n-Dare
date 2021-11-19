const TRUTH = document.getElementById("T");

const truth = async () => {

    const Trandom = Math.floor(Math.random() * Truthss.length);

    const RandomTruth = Truthss[Trandom];

    TRUTH.innerHTML = RandomTruth;
};

const dares = async () => {

    const Drandom = Math.floor(Math.random() * Dare.length);

    const RandomDare = Dare[Drandom];

    TRUTH.innerHTML = RandomDare;
};
