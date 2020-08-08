import React from 'react';
import { useTranslation } from 'react-i18next';
function About(){
    const { t, i18n } = useTranslation();
    return(
        <div style={{display:"block", position:"absolute", top:"50px"}}>
            {t('aboutPage.title')}
        </div>
    );
}
export default About;