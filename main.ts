//% color=#157432
namespace imageio {
    //% block="5×5"
    //% subcategory="normal"
    //% shim=images::createImage
    //% imageLiteral=1 imageLiteralRows=1 imageLiteralColumns=1
    export function createImage5x5(leds: string): Image {
        return <Image><any>leds
    }
}
