export default class ImgWithWaterMark {
    constructor(options) {
        options = options || {}
        this.canvas = null
        this.fillStyle = options.fillStyle || '#fff'
        this.text = options.text || ''
        this.quality = options.quality || 0.5
    }
    createDom() {
        this.canvas = document.createElement('canvas')
    }
    getImgInfo(img) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader()
            reader.onload = function (result) {
                let image = new Image()
                image.src = result.target.result
                image.onload = function () {
                    resolve({ width: this.width, height: this.height, image: this })
                }
            }
            reader.readAsDataURL(img)
        })
    }
    setWaterMark({ img, text }) {
        return new Promise(async (resolve) => {
            if (text) {
                this.text = text
            }
            if (!this.context) {
                this.createDom()
            }
            let context = this.canvas.getContext('2d')
            const { width, height, image } = await this.getImgInfo(img)
            context.reset()
            context.restore();
            this.canvas.width = width
            this.canvas.height = height
            context.font = `bold ${width / 20}px serif`;
            context.fillStyle = this.fillStyle
            context.drawImage(image, 0, 0, width, height)
            const textMetrics = context.measureText(this.text)
            const textWidth = textMetrics.actualBoundingBoxLeft + textMetrics.actualBoundingBoxRight
            const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent
            context.fillText(text, width - textWidth, height - textHeight)
            let res = this.canvas.toDataURL("image/jpeg", this.quality)
            resolve(res)
        })

    }
    destoryCanvas() {
        this.canvas = null
    }
}
