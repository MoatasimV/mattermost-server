// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {t} from 'utils/i18n';
import {LicenseSkus} from 'utils/constants';

import FeatureDiscovery from '../index';

import GuestAccessSVG from './images/guest_access_svg';

const GuestAccessFeatureDiscovery: React.FC = () => {
    return (
        <FeatureDiscovery
            featureName='guest_access'
            minimumSKURequiredForFeature={LicenseSkus.Professional}
            titleID='admin.guest_access_feature_discovery.title'
            titleDefault='Enable guest accounts with TAKWEN DOProfessional'
            copyID='admin.guest_access_feature_discovery.copy'
            copyDefault={'Collaborate with users outside of your organization while tightly controlling their access channels and team members.'}
            learnMoreURL='https://docs.takwen.co/do/deployment/guest-accounts.html'
            featureDiscoveryImage={<GuestAccessSVG/>}
        />
    );
};

t('admin.guest_access_feature_discovery.title');
t('admin.guest_access_feature_discovery.copy');

export default GuestAccessFeatureDiscovery;
