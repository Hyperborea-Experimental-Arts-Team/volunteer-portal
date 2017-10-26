import React from 'react';
import { concat } from '../util';
import style from './UserMenu.css'
import theme from '../theme.css';

export default ({ label }) => (
  <div className={concat(style.UserMenu, theme.txt_2)}>
    {label}
    <svg className={style.chevron}
         viewBox="4 6 12 8"
         x="0px" y="0px"
         preserveAspectRatio="xMidYMid meet">
      <path d="M13.418,7.859c0.271-0.268,0.709-0.268,0.978,0c0.27,0.268,0.272,0.701,0,0.969l-3.908,3.83  c-0.27,0.268-0.707,0.268-0.979,0l-3.908-3.83c-0.27-0.267-0.27-0.701,0-0.969c0.271-0.268,0.709-0.268,0.978,0L10,11L13.418,7.859z  "/>
    </svg>
  </div>
);