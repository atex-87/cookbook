/* eslint-disable */

let data;
export default data = JSON.stringify({
    tabsName: {
        en: [
            'description',
            'ingredients',
            'options',
            'glasses',
        ],
        ru: [
            'Описание',
            'Ингредиенты',
            'Параметры',
            'Бокалы',
        ],
    },
    description: {
        cocktailname: {
            placeholder: 'Название коктейля',
            type: 'input text'
        },
        alternativename: {
            placeholder: 'Альтернативное название через запятую',
            type: 'input text'
        },
        cocktaildescription: {
            placeholder: 'Краткое описание',
            type: 'input text'
        },
        instructions:{
            placeholder:  'Инструкция для приготовления',
            type: 'textarea'
        },
    },
});
