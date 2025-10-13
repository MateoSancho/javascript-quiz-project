class Question {
    constructor(text, choices, answer, difficulty) {
        this.text = text;
        this.choices = ["Creat a subclass","Define a propertie","Set a value","None"];
        this.answer = choices[1];
        this.difficulty = 2;
    }

    shuffleChoices() {
        for (let i = this.choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
        }
    }
}