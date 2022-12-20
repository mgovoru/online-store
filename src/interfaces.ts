/*  ТОВАР */
// Структура продукта:
export interface IProduct {
    name: string,
    price: number,
    category: string,
    image: string,
    id: string,
}

// Структура карточки проекта:
interface IProductCard {
    render: () => void,             // Рендер карточки продукта
    getElem: () => Node,            // Получение карточки продукта
    onAddClick: () => void,         // Обработка добавления товара в корзину
}

/* ФИЛЬТР ТОВАРОВ и СЕТКА товаров*/
// Структура объекта с фильтрацией:
interface IFilters {
    category?: string,
}

// Структура списка товаров:
interface IProductGrids {
    render: () => void,
    getElem: () => HTMLElement,
    updateFilter: (filters: IFilters) => void,
}

/* КОРЗИНА */
// Структура элемента корзины:
interface ICartItem {
    product: {
        name: string,
        price: number,
        category: string,
        image: string,
        id: string,
    },
    count: number,
}

// Структура модуля корзины:
export interface ICart {
    renderProduct: (product: ICartItem["product"], count: number) => HTMLElement,   // Рендер продукта в корзине
    renderOrderForm: () => HTMLElement,                                             // Рендер формы в корзине
    addEventListeners: () => void,                                                  // Обработка клика по иконке
    onProductUpdate: (cartItem: ICartItem) => void,                                 // Обновление информации в корзине
    addProduct: (product: ICartItem["product"]) => void,                            // Обработка добавления товара
    updateProductCount: (productId: string, amount: number) => void,                // Обновление количества товаров
    isEmpty: () => boolean,                                                         // Проверка на пустоту корзины
    getTotalCount: () => number,                                                    // Получение общего количества товаров
    getTotalPrice: () => number,                                                    // Получение общей цены товаров
    renderModal: () => void,                                                        // Открытие корзины
    onSubmit: (event: Event) => void,                                               // Отправка заказа
}

/* КОРЗИНА в шапке сайта */
// Структура модуля иконки корзины:
export interface ICartIcon {
    render: () => void,
    getElem: () => HTMLElement,
    update: (cart: ICart) => void,
}


// Структура модального окна:
export interface IModal {
    render: () => void,                         // Рендер модального окна
    getElem: () => HTMLElement,                 // Получение модального окна
    open: () => void,                           // Открытие модального окна
    setTitle: (title: string) => void           // Установка заголовка модального окна
    setBody: (node: HTMLElement) => void,       // Установка тела модального окна
    close: () => void,                          // Закрытие модального окна
    onTapKey: (event: KeyboardEvent) => void,   // Закрытие модального окна с помощью клавиш
}

/* КАТЕГОРИИ */
// Структура категории:
export interface ICategories {
    id: string,
    name: string
}