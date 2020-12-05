
const pxtorem = require('postcss-pxtorem')

const designSize = process.env.VUE_APP_DESIGN_SIZE || 750


module.exports = {
  plugins: [
    pxtorem({
      rootValue: designSize / 10 / 2,
      minPixelValue: 12,
      unitPrecision: 5,
      propList: [
        'top',
        'bottom',
        'left',
        'right',
        'padding*',
        'margin*',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'line-height',
        'font-size',
        'border',
        'flex',
        '!border-radius'
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false
    })

  ]
}
