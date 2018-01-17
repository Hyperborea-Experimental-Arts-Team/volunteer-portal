import React from 'react';
import FormField from './FormField';
import { FormattedMessage } from 'react-intl';
import { concat } from '../util';

import theme from '../theme.css';
import searchSvg from '../images/search.svg';

export default class extends React.Component {

  constructor() {
    super();
    this.state = { search: '' };
  }

  setSearch(value) {
    this.setState(Object.assign({}, this.state, {
      search: value
    }));
  }

  render() {
    const { className = '' } = this.props;
    return (
        <form className={concat(className, theme.txt_lightest)}>
          <FormField name="search"
                     icon={searchSvg}
                     value={this.state.search}
                     onChange={v => this.setSearch(v)}
                     title={<FormattedMessage
                               id="search"
                               defaultMessage="Search" />} />
        </form>
    );
  }
}