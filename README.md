# algorithms

## Основные алгоритмы и структуры данных реализованы на JavaScript

В качестве основы использовался курс Kevin Wayne, Robert Sedgewick
[Algorithms, Part I](https://www.coursera.org/learn/algorithms-part1)
и
[Algorithms, Part II](https://www.coursera.org/learn/algorithms-part2)

Для дестирования использован Jest
компиляция с помощью Babel
для сборки использован Webpack

## Содержание

1. Абстрактные типы данных
    * Контейнер
    * Индексная очередь с приоритетами
    * Очередь с приоритетами MaxPQ и MinPQ
    * Очередь, реализованная с помощью массива
    * Очередь, реализованная с помощью связного списка
    * Стек, реализованный с помощью массива
    * Стек, реализованный с помощью связного списка


2. Математика
    * Функция сравнения чисел
    * Функция сравнения ребер
    * Функция для перемешивания массива

3. Графы
    * Ориентированные графы
        * упорядочивание вершин в орграфе с помощью поиска в глубину
        * Нахождение ориентированного цикла
        * Достижимость в ориентированных графах
        * Достижимость в орграфе из нескольких вершин
        * Ориентированный граф
        * Алгоритм Косараю для вычисления сильных компонентов
        * Топологическая сортировка
  
     * Минимальные остовные деревья
        * Граф со взвешенными ребрами
        * Алгоритм Крускала для нахождения минимальных остовных деревьев
        * Ленивый вариант алгоритма Прима
        * Энергичный вариант алгоритма Прима для нахождениея МОД
  
     * Кратчайшие пути
        * Кратчайшие пути в ориентированном ациклическом орграфе со взвешенными   ребрами
        * Алгоритм Беллмана-Форда для нахождения кратчайшего пути
        * Алгоритм Дейкстры для нахождения кратчайшего пути
        * Нахождение ориентированного цикла во взвешенном графе
        * Ориентированный граф со взвешенными ребрами

    * Неориентированные графы
        * Двудольный граф
        * Нахождение путей в ширину
        * Связные компоненты
        * Нахождение путей в глубину
        * Поиск в глубину
        * Обнаружение циклов
        * Символьный граф
        * Неориентированный граф

4. Хеш-таблицы
    * Хеш-функция
    * Хеширование с линейным опробованием
    * Хеширование с раздельными цепочками


5. Другие алгоритмы
    * Алгоритм Евклида(поиск наибольшего общего делителя двух чисел)
    * Сумма трех чисел
    * Быстрый поиск
    * Быстрое объединение
    * Взвешенное быстрое объединение

6. Поиск
    * Бинарный поиск
    * Бинарный поиск в упорядоченном массиве
    * Дерево бинарного поиска
    * Красно-черное дерево бинарного поиска
    * Последовательный поиск в неупорядоченном связном списке

7. Сортировка
    * Пирамидальная сортировка
    * Сортировка вставками
    * Сортировка слиянием восходящая
    * Сортировка слиянием нисходящая
    * Быстрая сортировка
    * Быстрая сортировка с трехчастным разбиением
    * Сортировка выбором
    * Сортировка Шелла
    * Подсчет различных ключей в массиве

8. Строки
    * Алфавит

  Сжатие данных
    * Сжатие Хаффмана
    * Кодирование по длинам серий

  Регулярные выражения
    * Недетерменированные конечные автоматы

  Сортировка строк
    * Распределяющий подсчет
    * Трехчастная быстрая сортировка строк
    * Сортировка по младшим разрядам LSD
    * Сортировка по старшим разрядам MSD

  Поиск подстроки
    * Альтернативная реализация примитивного поиска подстроки
    * Поиск подстроки методом Бойера-Мура
    * Примитивный поиск подстроки
    * Поиск подстроки методом Кнута-Морриса-Пратта
    * Поиск подстроки методом Рабина-Карпа

  Trie-деревья
    * Таблица имен на основе trie-деревьев тренарного поиска
    * Таблица имен на основе trie-дерева


