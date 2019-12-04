const _ = require('lodash');
const readline = require('readline');
const fs = require('fs');

const HAPPINESS_QS = [0, 13, 17];
const COPING_QS = [1, 7, 12];
const ALERTNESS_QS = [2, 6, 15];
const APPEARANCE_QS = [3, 9, 14];
const ENERGY_QS = [4, 8, 11];
const CALMNESS_QS = [5, 10, 16];

const ELMENT_MAX_SCORE = 5;
const ELEMENT_R_POSITION = 2;
const OVERALL = () => {
    const overallArray = [];
    for (let index = 0; index < QUESTIONS.length; index++) {
        overallArray.push(index);   
    }
    return overallArray;
}

class stintIndex {

    constructor(responses) {
        this.resp = responses;
    }

    overallScore() {
        return this.categoryScore(OVERALL());
    }

    getTotalScore(categoryQS) {
        let totalScore = 0;
        categoryQS.forEach(index => {
        // 1- get the R value from the questions array f it exists
        const isReverted = QUESTIONS[index].length === 3 && QUESTIONS[index][ELEMENT_R_POSITION] === "R";

        const elementScore = isReverted ? this.reverseScore(this.resp[index]) : this.resp[index];

        totalScore += elementScore
        });

        return totalScore;
    }

    categoryScore(categoryQS) {
        // 1- get a total score of category question
        const totalScore = this.getTotalScore(categoryQS);

        // 2- get max total score for the sub category
        const maxScore = categoryQS.length * ELMENT_MAX_SCORE;

        // 3- get the percentage based on the total score
        return Math.floor((totalScore / maxScore) * 100);
    };

    reverseScore(index) {
        // 1- create scale that will be reverted
        const scale = [0, 1, 2, 3, 4, 5];

        // 2- get the new score for the recerted scale
        return scale.reverse()[index];
    };

}

const QUESTIONS = [
    ["Happiness","happy when chatting with customers"],
    ["Coping","wanted to have fewer things to do","R"],
    ["Alertness","was quick to respond"],
    ["Appearance","didn't present well","R"],
    ["Energy","satisfied with their levels of energy"],
    ["Calmness","restless, anxious or fidgety","R"],
    ["Alertness","satisfied with their reponse times"],
    ["Coping","they don’t get enough time to do all the things I would like them to do","R"],
    ["Energy","very full of energy"],
    ["Appearance","they were untidy","R"],
    ["Calmness","a little tense for no particular reason at all","R"],
    ["Energy","they seemed to have the energy they needed for the tasks"],
    ["Coping","they didn't have the bandwidth to deal with all the things that I wanted them to do","R"],
    ["Happiness","happy go lucky"],
    ["Appearance","didn't have the right uniform","R"],
    ["Alertness","good quality feedback"],
    ["Calmness","slightly nervous over things that I have assue they would be comfortable with","R"],
    ["Happiness","mostly enthusiastic and gets on with things"]
];


exports.stintIndex = stintIndex;

exports.HAPPINESS_QS = HAPPINESS_QS;
exports.COPING_QS = COPING_QS;
exports.ALERTNESS_QS = ALERTNESS_QS;
exports.APPEARANCE_QS = APPEARANCE_QS;
exports.ENERGY_QS = ENERGY_QS;
exports.CALMNESS_QS = CALMNESS_QS;
