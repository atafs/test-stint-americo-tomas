const _ = require('lodash');
const assert = require('assert');
const { 
    stintIndex, 
    HAPPINESS_QS, 
    COPING_QS,
    ALERTNESS_QS,
    APPEARANCE_QS,
    ENERGY_QS,
    CALMNESS_QS
 } = require("./stint-index");
const Chance = require("chance");

describe('stintIndex', () => {

    let chance;

    before(() => {
        chance = new Chance();
    });

    describe('overallScore()', () => {

        it('should return 50 when all responses are 0', () => {
            const data = _.times(18, () => 0);
            const ui = new stintIndex(data);
            assert.equal(50, ui.overallScore());
        });

    });

    describe("happinessScore()", () => {

        it('should return 100 when all happiness responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[0] = 5;
            data[13] = 5;
            data[17] = 5;
            const ui = new stintIndex(data);
            assert.equal(100, ui.categoryScore(HAPPINESS_QS));
        });

    });

    describe("copingScore()", () => {

        it('should return 100 when all coping responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[1] = 5;
            data[7] = 5;
            data[12] = 5;
            const ui = new stintIndex(data);
            assert.equal(0, ui.categoryScore(COPING_QS));
        });

    });

    
    describe("alertnessScore()", () => {

        it('should return 100 when all alertness responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[2] = 5;
            data[6] = 5;
            data[15] = 5;
            const ui = new stintIndex(data);
            assert.equal(100, ui.categoryScore(ALERTNESS_QS));
        });

    });

    describe("appearanceScore()", () => {

        it('should return 100 when all apperance responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[3] = 5;
            data[9] = 5;
            data[14] = 5;
            const ui = new stintIndex(data);
            assert.equal(0, ui.categoryScore(APPEARANCE_QS));
        });

    });

    describe("energyScore()", () => {

        it('should return 100 when all energy responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[4] = 5;
            data[8] = 5;
            data[11] = 5;
            const ui = new stintIndex(data);
            assert.equal(100, ui.categoryScore(ENERGY_QS));
        });

    });

    describe("calmnessScore()", () => {

        it('should return 100 when all calmness responses are 5', () => {
            const data = _.times(18, () => chance.natural({min: 0, max: 5}));
            data[5] = 5;
            data[10] = 5;
            data[16] = 5;
            const ui = new stintIndex(data);
            assert.equal(0, ui.categoryScore(CALMNESS_QS));
        });

    });

});
