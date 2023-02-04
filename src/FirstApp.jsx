import PropTypes from 'prop-types'

export const FirstApp = ({title, subTitle, name}) => {
 
  // if ( !title) {
  //   throw new Error('El titulo no existe');
  //  }
 
  return (
    <>
    <h1>{title}</h1>
    <p>{subTitle}</p>
    <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
   title: PropTypes.string.isRequired,
   subTitle: PropTypes.string,
}
FirstApp.defaultProps = {
title: 'No hay titulo',
subTitle: 'no hay subtitulo',
name: 'no hay nombre'
}