import { Select } from 'antd'
import { useContext } from 'react'
import { CarsContext } from '../../context/CarsContext'
import './LanguageSelect.css'

function LanguageSelect() {
    const {language, changeLanguage} = useContext(CarsContext)
    const languages = [
        { label: 'English', value: 'en' },
        { label: 'Українська', value: 'ua' }
    ];
    const changeLanguageSelect = (value) => {
        changeLanguage(value);
    }
    return (
        <div className='language-select'>
            <h3>{language === 'en' ? 'Language:' : 'Мова:'}</h3>
            <Select
              style={{ minWidth: '120px' }}
              id="language"
              value={language}
              placeholder={language === 'en' ? 'Select a language' : 'Оберіть мову'}
              onChange={changeLanguageSelect}
              options={languages}/>
        </div>
    )
}

export default LanguageSelect