# Урок 1 Что такое вёрстка - создание сайтов?

Верстка - это процесс создания веб-страницы, который включает в себя размещение элементов дизайна и контента на странице с использованием языков разметки, таких как HTML, CSS и JavaScript. Верстка сайта - это один из этапов создания сайта, который включает в себя создание макета, разбиение его на блоки и написание кода, который определяет, как эти блоки будут отображаться на странице.

#### Вёрстка сайта делится на несколько этапов, а именно:

1. Разработка чернового макета
2. Разработка основного цветного макета
3. Написание HTML
4. Написание CSS
5. Написание JavaScript

## 1. Разработка чернового макета

Это создание в различных редакторах (например Figma) самого начального наброска сайта. (Пример рис. 1)

![макет черновик](./assets/images/learn/lesson-1.1/макет-черновик.png) { .w-75 .align-self-center }

рис. 1 {.text-center}

Этот этап предназначен для удобства размещения контента на макете, избавляя вас от необходимости думать о том, как картинка будет выглядеть в разных местах. Кроме того, это первый материал, который можно показать заказчику для согласования структуры сайта и расположения контента. Это важный, но простой шаг в создании будущего сайта.

## 2. Разработка основного цветного макета

Это уже создание основного макета, по которому мы в дальнейшем будем делать сайт. На этом макете уже добавляются все материалы, которые будут на сайте: цвета, картинки, шрифты, отступы, дизайн, блоки и т.д. (Пример рис. 2)

![alt text](./assets/images/learn/lesson-1.1/макет-основа.png) { .w-75 .align-self-center }

рис. 2 {.text-center}

На данном этапе у нас уже есть полностью готовый макет. Который является полным отражением того, как будет выглядеть сайт. Макет является подробной инструкцией для разработчика, как сделать сайт, то есть полным набором всей нужной информации.

## 3. Написание HTML

Следующим пунктом является перенос структуры макета в код. То есть, это разбитие элементов макета на составляющие и перенос их в HTML структуру

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>HTML</title>
  </head>
  <body>
    <p>Бифуркация русла</p>
  </body>
</html>
```

HTML — это основа сайта, которая отвечает за его структуру. Можно сравнить ее с костями в человеческом теле. CSS отвечает за внешний вид сайта, так же как кожа и цвет человека. А JavaScript добавляет интерактивность на сайте, как движение тела человека. Все очень просто и интуитивно понятно.

## 4. Написание CSS

Третий пункт — это написание CSS или же каскадных таблиц стилей. Мы стилизуем наш HTML документ (чтобы он стал выглядеть точь-в-точь как макет сделанный на шаге 2)

```css
.ff-roboto {
  font-family: "Roboto", sans-serif;
}

.ff-bona {
  font-family: "Bona Nova", serif;
}

.fs-64 {
  font-size: 64px;
}

.min-vh-80 {
  min-height: 80%;
}
```

Пример CSS кода {.text-center}

## 5. Написание JavaScript

JavaScript - это язык программирования, который используется для создания интерактивных элементов на веб-страницах. Он позволяет добавлять анимацию, проверку форм, слайдеры, выпадающие меню и многое другое. JavaScript работает в браузере и может быть использован для изменения содержимого страницы без необходимости перезагрузки ее.

```js
// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt("Enter a positive integer: "));

let sum = 0;

// looping from i = 1 to number
// in each iteration, i is increased by 1
for (let i = 1; i <= number; i++) {
  sum += i;
}

console.log("The sum of natural numbers:", sum);
```

Пример JavaScript кода {.text-center}