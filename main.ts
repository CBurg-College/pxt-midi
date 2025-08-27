    // 0: stop playing
    // 1: start playing
    // 2: pause playing

    // 100-500: transposing = value - 300

    // 1000-1199: instrument partiture 1
    // 1200-1399: instrument partiture 2
    // 1400-1599: instrument partiture 3
    // 1600-1799: instrument partiture 4
    // 1800-1999: instrument partiture 5

    // 2000-2199: volume partiture 1
    // 2200-2399: volume partiture 2
    // 2400-2599: volume partiture 3
    // 2600-2799: volume partiture 4
    // 2800-2999: volume partiture 5

    // > 3000: duration = value - 3000

let MEASURE = 0

enum Move {
    Move1,
    Move2,
    Move3,
    Move4,
    Move5,
    Move6,
    Move7,
    Move8,
    Move9,
    Move10,
    Move11,
    Move12,
    Move13,
    Move14,
    Move15,
    Move16,
    Move17,
    Move18,
    Move19,
    Move20,
}

let doMove1: handler
let doMove2: handler
let doMove3: handler
let doMove4: handler
let doMove5: handler
let doMove6: handler
let doMove7: handler
let doMove8: handler
let doMove9: handler
let doMove10: handler
let doMove11: handler
let doMove12: handler
let doMove13: handler
let doMove14: handler
let doMove15: handler
let doMove16: handler
let doMove17: handler
let doMove18: handler
let doMove19: handler
let doMove20: handler

let moves: number[][] = []

radio.onReceivedNumber(function (cmd: number) {
    if (cmd >= 0) return;
    MEASURE = -cmd
    for (let i = 0; i < moves.length; i++) {
        if (moves[i][0] == MEASURE) {
            switch(moves[i][1]) {
                case Move.Move1: doMove1(); break;
                case Move.Move2: doMove2(); break;
                case Move.Move3: doMove3(); break;
                case Move.Move4: doMove4(); break;
                case Move.Move5: doMove5(); break;
                case Move.Move6: doMove6(); break;
                case Move.Move7: doMove7(); break;
                case Move.Move8: doMove8(); break;
                case Move.Move9: doMove9(); break;
                case Move.Move10: doMove10(); break;
                case Move.Move11: doMove11(); break;
                case Move.Move12: doMove12(); break;
                case Move.Move13: doMove13(); break;
                case Move.Move14: doMove14(); break;
                case Move.Move15: doMove15(); break;
                case Move.Move16: doMove16(); break;
                case Move.Move17: doMove17(); break;
                case Move.Move18: doMove18(); break;
                case Move.Move19: doMove19(); break;
                case Move.Move20: doMove20(); break;
            }
        }
    }
})

//% color="#00CC00" icon="\uf1f9"
//% block="Midi"
//% block.loc.nl="Midi"
namespace CMidi {

    //% block="measure number"
    //% block.loc.nl="maatnummer"
    export function measure() : number {
        return MEASURE
    }

    //% block="do for move %move"
    //% block.loc.nl="doe voor move %move"
    export function onMove(move: number, programmableCode: () => void): void {
        switch (move) {
            case 1: doMove1 = programmableCode; break;
            case 2: doMove2 = programmableCode; break;
            case 3: doMove3 = programmableCode; break;
            case 4: doMove4 = programmableCode; break;
            case 5: doMove5 = programmableCode; break;
            case 6: doMove6 = programmableCode; break;
            case 7: doMove7 = programmableCode; break;
            case 8: doMove8 = programmableCode; break;
            case 9: doMove9 = programmableCode; break;
            case 10: doMove10 = programmableCode; break;
            case 11: doMove11 = programmableCode; break;
            case 12: doMove12 = programmableCode; break;
            case 13: doMove13 = programmableCode; break;
            case 14: doMove14 = programmableCode; break;
            case 15: doMove15 = programmableCode; break;
            case 16: doMove16 = programmableCode; break;
            case 17: doMove17 = programmableCode; break;
            case 18: doMove18 = programmableCode; break;
            case 19: doMove19 = programmableCode; break;
            case 20: doMove20 = programmableCode; break;
        }
    }

    //% block="perform at measure %measure %move"
    //% block.loc.nl="voer op maat %measure %move uit"
    export function measureMove(measure: number, move: Move) {
        moves.push([measure,move])
    }
}