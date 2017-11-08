import React from 'react';
import { concat } from '../util';

import style from './FormField.less';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    this.setState({ value: value });
  }

  render() {
    const { icon, title, name, password } = this.props;
    const { value = '' } = this.state;

    return (
      <div className={style.wrap}>
        <input className={concat(style.input, value ? style.filled : '')}
               value={value}
               name={name}
               onChange={this.onChange}
               type={password ? 'password' : 'text'} />
        <div className={concat(style.placeholder, icon ? style.withIcon : '')}
             style={ icon ? { backgroundImage: `url(${icon})` } : null }>
          {title}
        </div>
      </div>
    );
  }
}

export default FormField;