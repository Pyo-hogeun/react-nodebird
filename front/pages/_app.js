import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes =  {
    Component: PropTypes.elementType,
};

export default withRedux()(NodeBird);