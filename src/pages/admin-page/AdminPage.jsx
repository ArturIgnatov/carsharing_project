import React from 'react'
import './AdminPage.sass'
import Menu from './Menu'
import Header from './Header'
import Content from './Content/Content'
import Footer from './Footer'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadCity } from '../../redux/admin-page'
import { Redirect } from 'react-router-dom'

const AdminPage = (props) => {
	useEffect(()=>{
		props.loadCity()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	if (!props.isAuth) {
		return <Redirect to={'/login'} />
	}
	return (
		<div className='admin-page'>
			<Menu/>
			<div className='admin-page__container'>
				<Header/>
				<Content/>
				<Footer/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.adminPage.isAuth
})
export default connect(mapStateToProps, { loadCity })(AdminPage);