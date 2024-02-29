//% color=#157432 icon="\uf03e"
namespace imageio {
    //% block="5×5"
    //% subcategory="normal"
    //% shim=images::createImage
    //% imageLiteral=1 imageLiteralRows=5 imageLiteralColumns=5
    export function createImage5x5(leds: string): Image {
        return <Image><any>leds
    }
}
