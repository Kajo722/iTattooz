import React, { Component } from 'react';
import PageHeaderContainer from '../../components/PagesHeader/PageHeaderContainer/PageHeaderContainer';
import PageHeader from '../../components/PagesHeader/PageHeader/PageHeader';
import styles from './Artists.module.css'

class Artists extends Component {
    render(){
        return(
            <PageHeaderContainer>
                <PageHeader>Our Artists</PageHeader>
            </PageHeaderContainer>
        )
    }
}
export default Artists;