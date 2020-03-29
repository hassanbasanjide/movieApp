module.exports = {
    'extends': ['airbnb', 'prettier'],
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-indent': 'off',
        'prettier/prettier': 'error'
    },
    'globals': {
        "fetch": false
    },
    'plugins': [
        "prettier",
    ]
}