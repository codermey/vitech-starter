/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html', // Vue 文件使用 postcss-html 解析
    },
  ],
  rules: {
    // 颜色6位长度 #333 #fff
    'color-hex-length': 'long',
    // 兼容自定义标签名
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['view'],
      },
    ],
    // 不允许未知的伪类选择器。
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    // 为类选择器指定一个模式 regex。
    'selector-class-pattern': null,
    // 忽略伪类选择器 ::v-deep
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
    // 不验证@未知的名字，为了兼容scss的函数
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 禁止空资源，没有代码的文件
    'no-empty-source': true,
    // 禁止简写属性的冗余值
    'shorthand-property-no-redundant-values': true,
    // 禁止值的浏览器引擎前缀
    'value-no-vendor-prefix': true,
    // 禁止属性的浏览器引擎前缀
    'property-no-vendor-prefix': true,
    // 不允许无效的命名网格区域 - 关闭
    'named-grid-areas-no-invalid': null,
    // 不允许低特异性的选择器在覆盖高特异性的选择器之后出现。- 关闭，有的时候需要
    'no-descending-specificity': null,
    // scss文件可以不使用文件后缀
    'scss/at-import-partial-extension': null,
    // 未知的单位
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    // 禁止声明块内出现重复的属性
    'declaration-block-no-duplicate-properties': true,
    // 属性的排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition',
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}
