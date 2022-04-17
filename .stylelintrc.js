module.exports = {
  'plugins': [
    'stylelint-prettier',
  ],
  'extends': [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
  ],
  'defaultSeverity': process.env.NODE_ENV === 'development' ? 'warning' : 'error',
  'rules': {
    'prettier/prettier': true,
    'block-opening-brace-space-before': 'always',
    'selector-list-comma-newline-after': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-newline-after': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-no-duplicate-properties': true,
    'selector-pseudo-element-colon-notation': 'double',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'comment-whitespace-inside': null,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': [
      'never',
      {
        'ignore': [
          'after-comment',
          'after-declaration',
        ],
      },
    ],
    'max-nesting-depth': [
      3,
      {
        'ignore': [
          'blockless-at-rules',
          'pseudo-classes',
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        'ignorePseudoClasses': [
          'global',
        ],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  },
};
