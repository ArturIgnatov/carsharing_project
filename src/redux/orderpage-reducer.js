import elantra from '../assets/images/car/elantra.png';
import i30 from '../assets/images/car/i30n.png';
import creta from '../assets/images/car/creta.png';
import sonata from '../assets/images/car/sonata.png';
import moment from 'moment'

// Type for location
let CHANGE_CITY_TEXT = 'CHANGE_CITY_TEXT'
let CHANGE_POINT_TEXT = 'CHANGE_POINT_TEXT'
let SELECT_CITY = 'SELECT_CITY'
let SELECT_POINT ='SELECT_POINT'
let CLEAR_INPUT = 'CLEAR_INPUT'
let CLEAR_INPUT_POINT = 'CLEAR_INPUT_POINT'
let TOGGLE_CITY_BOX = 'TOGGLE_CITY_BOX'
let TOGGLE_POINT_BOX = 'TOGGLE_POINT_BOX'

// Type for car
let SELECT_CARS = 'SELECT_CARS'
let FILTER_CAR = 'FILTER_CAR'

// Type for more
let SELECT_COLOR = 'SELECT_COLOR'
let CHANGE_DATE_WITH = 'CHANGE_DATE_WITH'
let CHANHE_DATE_BY = 'CHANHE_DATE_BY'
let SELECT_RATE = 'SELECT_RATE'
let SELECT_SERVICE = 'SELECT_SERVICE'

let UPDATE_TIME = 'UPDATE_TIME'

let CHANGE_STEP = 'CHANGE_STEP'
let CURREN_STEP = 'CURREN_STEP'

 let newDate = 	moment().format().slice(0, 16)



let initialState = {
	menu:[
		{ id: 1, title: 'Местоположение', path:'/docs/orderpage', isActive: true},
		{ id: 2, title: 'Модель', path: '/docs/orderpage/model', isActive: false},
		{ id: 3, title: 'Дополнительно', path: '/docs/orderpage/more', isActive: false },
		{ id: 4, title: 'Итого', path: '/docs/orderpage/total', isActive: false },
	],
	step: 1,
	location:{
		city:[
			{ id: 1, cityName: 'Ульяновск'},
			{ id: 2, cityName: 'Пенза'},
			{ id: 3, cityName: 'Саранск' },
			{ id: 4, cityName: 'Самара' },
			{ id: 5, cityName: 'Уфа' },
			{ id: 6, cityName: 'Тольятти' }
		],
		points:[
			{ id: 1, cityName: 'Ульяновск', adress: 'ул.Макарова 37' }, 
			{ id: 2, cityName: 'Ульяновск', adress: 'ул.Ленина 4а' },
			{ id: 3, cityName: 'Пенза', adress: 'ул.Энгельса 134' },
			{ id: 4, cityName: 'Пенза', adress: 'ул.Гоголя 3в' },
			{ id: 3, cityName: 'Саранск', adress: 'ул. Титова 137 ' },
			{ id: 4, cityName: 'Саранск', adress: 'ул.Гагарина 98' }
		],
		cityText: '',
		pointText: '',
		cityBoxVisible: false,
		pointBoxVisible: false
	},
	cars:[
		{ id: 1, number: 'K 387 MH 73', mark: 'Hyndai', model: 'ELANTRA', price: 12000, subtitle: '12 000- 25 000', img: elantra, selected: false},
		{ id: 2, number: 'Н 432 СА 73', mark: 'Hyndai', model: 'i30 N', price: 7000, subtitle: '10 000- 22 000', img: i30, selected: false},
		{ id: 3, number: 'Л 924 МР 73', mark: 'Hyndai', model: 'CRETA', price: 12000, subtitle: '12 000- 25 000', img: creta, selected: false},
		{ id: 4, number: 'K 282 КС 73', mark: 'Hyndai', model: 'SONATA', price: 7000, subtitle: '10 000- 22 000', img: sonata, selected: false}
	],
	filterCar:[
		{ id: 1, title: 'Все модели', checked: true },
		{ id: 2, title: 'Эконом', checked: false },
		{ id: 3, title: 'Премиум', checked: false }
	],
	colors:[
		{ id: 1, title: 'Любой', checked: false},
		{ id: 2, title: 'Красный', checked: false},
		{ id: 3, title: 'Голубой', checked: false}
	],
	date:{
		min: newDate,
		with: newDate,
		by: ''
	},
	rate:[
		{ id: 1, title: 'Поминутно', price: 7, unit:'₽/мин', checked: false },
		{ id: 2, title: 'На сутки', price: 1999, unit:'₽/сутки', checked: false },
	],
	services:[
		{ id: 1, title: 'Полный бак', price: 500, checked: false },
		{ id: 2, title: 'Детское кресло', price: 200, checked: false },
		{ id: 3, title: 'Правый руль', price: 1600, checked: false }
	],
	preorder:{ 
		sity: '',
		point:'',
		car:'',
		colorCar:'',
		dataThis: moment().format().slice(0, 16),
		dataBy: '',
		rate: '',
		services:'',
		test: new Date().toLocaleTimeString()
	},
	order:[],
	currentId: 0,
	totalPrice: 0,
}
const OrderPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_CITY_TEXT:
			return {
				...state,
				location: { ...state.location, cityText: action.text, cityBoxVisible: true, pointBoxVisible: false, pointText: ''},
				preorder: { ...state.preorder, sity: action.text },
			}
		case SELECT_CITY:
			return {
				...state,
				location: { ...state.location, cityText: action.text, pointText: ''},
				preorder: { ...state.preorder, sity: action.text }
			}
		case SELECT_POINT:
			return{
				...state,
				location: { ...state.location, pointText: action.text },
				preorder: { ...state.preorder, point: action.text }
			}
		case CLEAR_INPUT:
			return {
				...state,
				location: { ...state.location, cityText: '',  pointText: ''},
				preorder: { ...state.preorder, sity: action.text }
			}
		case CLEAR_INPUT_POINT:
			return{
				...state,
				location: { ...state.location, pointText: '', },
				preorder: { ...state.preorder, point: action.text }
			}
		case CHANGE_POINT_TEXT:
			return {
				...state,
				location: { ...state.location, pointText: action.text, pointBoxVisible: true},
				preorder: { ...state.preorder, point: action.text },
			}
		case TOGGLE_CITY_BOX:
			return {
				...state,
				location: { ...state.location, cityBoxVisible: state.location.cityBoxVisible === true ? false : true, pointBoxVisible: false},
			}
		case TOGGLE_POINT_BOX:
			return {
				...state,
				location: { ...state.location, pointBoxVisible: state.location.pointBoxVisible === true ? false : true },
			}
		case SELECT_CARS:
			return {
				...state,
				cars: state.cars.map(car => {
					if (car.id === action.id) {
						return { ...car, selected: state.cars[action.id - 1].selected === true ? false : true}
					}
					return {...car, selected: false}
				}),
				preorder: { ...state.preorder, car: state.cars[action.id - 1].selected === true ? '' : { ...state.cars[action.id - 1], selected: true }}
			}
		case FILTER_CAR:
			return {
				...state,
				filterCar: state.filterCar.map( el => {
					if (el.id === action.id) {
						return { ...el, checked: true}
					}
					return { ...el, checked: false }
				})
			}
		case SELECT_COLOR:
			return{
				...state,
				colors: state.colors.map(el =>{
					if (el.id === action.id) {
						return {...el, checked: true}
					}
					return { ...el, checked: false}
				}),
				preorder: {...state.preorder, colorCar:  action.city}
			}
		case CHANGE_DATE_WITH:
			return {
				...state,
				date: { ...state.date, with: action.date},
				preorder: { ...state.preorder, dataThis: action.date }
			}
		case CHANHE_DATE_BY:
			return {
				...state,
				date: { ...state.date, by: action.date },
				preorder: { ...state.preorder, dataBy: action.date }
			}
		case SELECT_RATE:
			return{
				...state,
				rate: state.rate.map(el => {
					if (el.id === action.id) {
						return {...el, checked: true}
					}
					return {...el, checked: false}
				}),
				preorder: {...state.preorder, rate: state.rate[action.id - 1].title}
			}
		case SELECT_SERVICE:
			return{
				...state,
				services: state.services.map (el => {
					if (el.id === action.id) {
						return { ...el, checked: state.services[action.id - 1].checked === true ? false : true}
					}
					return {...el}
				}),
				preorder: { ...state.preorder, services: state.services[action.id - 1].checked === true ? '' : [...state.preorder.services , { ...state.services[action.id - 1], checked: true }] }
			}
		case UPDATE_TIME:
			return{
				...state,
				date: { ...state.date, with: moment().format().slice(0, 16)}
			}
		case CHANGE_STEP:
			return{
				...state,
				step: state.step === 5 - 1 ? state.step = 0 : state.step + 1, 
				menu: state.menu.map(el => {
					if (el.id === state.step + 1) {
						return{...el, isActive: true}
					}
					return{...el}
				})
			}
		case CURREN_STEP:
			return{
				...state,
				step: action.number + 1,
				menu: state.menu.map(el => {
					if (el.id === state.step + 4) {
						return { ...el, isActive: true }
					}
					return { ...el, isActive: false }
				})
			}
		default:
			return state
	}
};

export const currentStep = (number) => ({ type: CURREN_STEP, number }) 

// Диспачи для location
export const changeTextValue = (newText) => ({ type: CHANGE_CITY_TEXT, text: newText })
export const selectSity = (cityName) => ({ type: SELECT_CITY, text: cityName })
export const clearInput = () => ({ type: CLEAR_INPUT })
export const toggleCityBox = () => ({ type: TOGGLE_CITY_BOX })
export const updateTextPoint = (newText) => ({ type: CHANGE_POINT_TEXT, text: newText })
export const togglePointBox = () => ({ type: TOGGLE_POINT_BOX })
export const clearInputPoint = () => ({ type: CLEAR_INPUT_POINT })
export const selectPoint = (adress) => ({ type: SELECT_POINT, text: adress })


// Диспатчи для models
export const selectCars = (carId, carModel) => ({ type: SELECT_CARS, id: carId, model: carModel })
export const handlerFilterCarRadio = (idRadio) => ({ type: FILTER_CAR, id: idRadio})

// Дипатчи для дополнительно
export const selectColorCarRadio = (idRadio, title) => ({ type: SELECT_COLOR, id: idRadio, city: title })
export const changeDateWithValue = (newDate) => ({ type: CHANGE_DATE_WITH, date: newDate})
export const changeDateByValue = (newDate) => ({ type: CHANHE_DATE_BY, date: newDate})
export const selectRateRadio = (idRadio, title) => ({ type: SELECT_RATE, id: idRadio, city: title })
export const selectServicesCheckbox = (idCheckbox, title) => ({ type: SELECT_SERVICE, id: idCheckbox, city: title })


export const updateTime = (newTime) => ({type: UPDATE_TIME})


export const changeStep = (idBtn) => ({ type: CHANGE_STEP, id: idBtn})
export default OrderPageReducer;