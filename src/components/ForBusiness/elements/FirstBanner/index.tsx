import { useState, useEffect  } from 'react'
import styles from './styles.module.scss'
import { GeneralButton, Toast } from '@components'
import { scrolling, createMarkup, scrollTo } from '@utils'
import { useDispatch } from 'react-redux'
import { subscribeUser } from '../../../../store/actions';

const FirstBanner = ({ data, content, scrollMethod }) => {

  let timeout;
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [show, setShow] = useState(0)
  const [isValid, setIsValid] = useState(0)

  const inputHandler = (event: any) => {
    const value = event.target.value
    setInput(value)
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const result = regex.test(input)
    result ? setIsValid(1) : setIsValid(2)
    if(!value.length) setIsValid(0)
  }

  const fetch = () => {
    if(isValid === 1) {
      dispatch(subscribeUser(input))
      setInput('');
      setShow(1);

      timeout = setTimeout(() => {
        setShow(2)
      }, 2000);
    }
  }

  useEffect(() => {
    return () => { clearTimeout(timeout) }
  }, [])

  return (
    <>
      <div className={styles.main}>
        <div className='_bannerContainer'>
          <div className={styles._content}>
            <div className={styles._textParent}>
              <h1 className={styles._mainTitle}>{data?.title}</h1>
              <p className={styles._subtitle}>{data?.subtitle}</p>
              <div className={styles._basicForm}>
                <div className={styles._buttonContainer}>
                  <GeneralButton height={3} backgroundColor='#2CACB3' textColor='#262833' text={data?.button?.title} method={fetch}/>
                </div>
                <input
                  type='string'
                  className={isValid === 0 || isValid === 1 ? styles._input : styles._inputError}
                  onChange={inputHandler}
                  value={input}
                />
              </div>
            </div>
            <div className={styles._services}>
              <div className={styles._servicesText} dangerouslySetInnerHTML={createMarkup(data?.lowTitle)} ></div>
              <img src='images/icons/complete-arrow-down.svg' className={styles._downarrow} onClick={scrollMethod}></img>
            </div>
          </div>
        </div>
        <div className={styles._secondContainer}>
          <div className={styles._customerContainer}>
            <h2 className={styles._customerTitle}>{content?.title}</h2>
            <p className={styles._customerSubtitles}>{content?.subtitle}</p>
          </div>
          <div className={styles._commercesContainer}>
            <div className={styles._firstRow}>
              <img className={styles._commercesLogo} src={content?.commerces[0]?.image?.mediaItemUrl}></img>
              <img className={styles._commercesLogo} src={content?.commerces[1]?.image?.mediaItemUrl}></img>
              <img className={styles._commercesLogo} src={content?.commerces[2]?.image?.mediaItemUrl}></img>
            </div>

            <div className={styles._secondRow}>
              <img className={styles._commercesLogo} src={content?.commerces[3]?.image?.mediaItemUrl}></img>
              <img className={styles._commercesLogo} src={content?.commerces[4]?.image?.mediaItemUrl}></img>
            </div>
          </div>
        </div>

        <Toast status={show}></Toast>
      </div>

      <style jsx>{`
        ._bannerContainer {
          background-image: url(${data?.background?.mediaItemUrl});
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width:100%;
          height: 70vh;
        }

        @media(max-width: 576px) {
          ._bannerContainer {
            height: 80vh;
            background-size: cover;
            background-image: url(${data?.backgroundResponsive?.mediaItemUrl});
            background-position: center
          }
        }
      `}</style>
    </>
  )
}

export default FirstBanner
