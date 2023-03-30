// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {mount} from 'enzyme';

import EmojiMap from 'utils/emoji_map';

import DialogIntroductionText from './dialog_introduction_text';

describe('components/DialogIntroductionText', () => {
    const emojiMap = new EmojiMap(new Map());

    test('should render message with supported values', () => {
        const descriptor = {
            id: 'testsupported',
            value: '**bold** *italic* [link](https://takwen.co/do/) <br/> [link target blank](!https://takwen.co/do/)',
            emojiMap,
        };
        const wrapper = mount(<DialogIntroductionText {...descriptor}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should not fail on empty value', () => {
        const descriptor = {
            id: 'testblankvalue',
            value: '',
            emojiMap,
        };
        const wrapper = mount(<DialogIntroductionText {...descriptor}/>);
        expect(wrapper).toMatchSnapshot();
    });
});
