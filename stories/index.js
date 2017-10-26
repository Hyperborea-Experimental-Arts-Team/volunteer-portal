import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import UserInfo from '../src/client/components/UserInfo';

storiesOf('UserInfo', module).add('with Pinchy', () => (
    <UserInfo userName="Pinchy McPinchface"
              avatarUrl="/pinchy.jpg"
              menuLabel="Crustacean" />
));