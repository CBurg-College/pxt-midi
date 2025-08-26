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

type measurehandler = (measure: number) => void
let measureHandler: measurehandler

radio.onReceivedNumber(function (cmd: number) {
    if ((cmd < 0) && measureHandler) measureHandler(-cmd)
})

//% color="#00CC00" icon="\uf1f9"
//% block="Midi"
//% block.loc.nl="Midi"
namespace CMidi {

    //% block="when measure %measure starts"
    //% block.loc.nl="wanneer maat %measure begint"
    export function onMeasure(programmableCode: (measure: number) => void): void {
        measureHandler = programmableCode;
    }

}