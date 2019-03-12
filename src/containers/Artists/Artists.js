import React, { Component } from 'react';
import PageHeaderContainer from '../../components/PagesHeader/PageHeaderContainer/PageHeaderContainer';
import PageHeader from '../../components/PagesHeader/PageHeader/PageHeader';
import Image from '../../components/Image/Image';
import styles from './Artists.module.css';
import img1 from '../../assets/Images/Artists/artist1.jpg';
import img2 from '../../assets/Images/Artists/artist3.jpg';
import img3 from '../../assets/Images/Artists/artist4.jpg';
import img4 from '../../assets/Images/Artists/artist5.jpg';
import img5 from '../../assets/Images/Artists/artist6.jpg';

class Artists extends Component {
    render() {
        const data = [
            {
                id: 1,
                style: styles.artistContainer1,
                image: img1,
                name: 'Clare Melton',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet luctus venenatis lectus magna fringilla urna. Donec et odio pellentesque diam volutpat. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Amet porttitor eget dolor morbi non arcu risus quis varius. Sed egestas egestas fringilla phasellus faucibus. Eget mi proin sed libero enim. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sit amet porttitor eget dolor morbi non arcu. Porttitor lacus luctus accumsan tortor posuere ac ut. Sapien et ligula ullamcorper malesuada proin libero nunc. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Diam vel quam elementum pulvinar etiam non quam. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Viverra nam libero justo laoreet sit amet. Suspendisse interdum consectetur libero id.`
            },
            {
                id: 2,
                image: img2,
                style: styles.artistContainer2,
                name: 'Guto Rodriguez',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet sed euismod nisi porta lorem. Sagittis id consectetur purus ut faucibus pulvinar elementum. Suspendisse interdum consectetur libero id. Tortor condimentum lacinia quis vel eros donec ac odio. Sit amet consectetur adipiscing elit ut aliquam purus sit. Amet cursus sit amet dictum sit amet justo. Enim praesent elementum facilisis leo vel fringilla est. Varius duis at consectetur lorem donec massa sapien. Sit amet massa vitae tortor condimentum lacinia quis vel. Et leo duis ut diam quam. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Ut placerat orci nulla pellentesque dignissim enim.`
            },
            {
                id: 3,
                image: img3,
                style: styles.artistContainer3,
                name: 'Aoife Arellano',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Suspendisse sed nisi lacus sed viverra tellus. Pellentesque id nibh tortor id aliquet lectus. Consectetur lorem donec massa sapien faucibus et molestie. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Auctor elit sed vulputate mi sit amet mauris commodo quis. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Vestibulum sed arcu non odio euismod lacinia at quis risus. Rutrum quisque non tellus orci. Odio aenean sed adipiscing diam donec adipiscing tristique risus.`
            },
            {
                id: 4,
                image: img4,
                style: styles.artistContainer4,
                name: 'Toni Bernal',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque viverra justo nec ultrices dui sapien eget mi. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Elit eget gravida cum sociis natoque. Amet cursus sit amet dictum sit amet justo. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Dictum fusce ut placerat orci nulla pellentesque dignissim. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Pharetra diam sit amet nisl suscipit. Leo duis ut diam quam nulla porttitor massa id neque.`
            },
            {
                id: 5,
                image: img5,
                style: styles.artistContainer5,
                name: 'Sanaa Duke',
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus cras adipiscing enim eu turpis. Sit amet luctus venenatis lectus magna fringilla urna. Volutpat diam ut venenatis tellus. Eu scelerisque felis imperdiet proin fermentum. Mollis aliquam ut porttitor leo a. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Ut consequat semper viverra nam libero justo laoreet sit. Libero enim sed faucibus turpis in eu mi bibendum. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Sed id semper risus in hendrerit gravida rutrum quisque non. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Sed lectus vestibulum mattis ullamcorper. Eget nunc lobortis mattis aliquam faucibus purus in massa. Risus sed vulputate odio ut enim blandit volutpat. Magna etiam tempor orci eu lobortis elementum nibh. Volutpat commodo sed egestas egestas fringilla phasellus.`
            }
        ];

        const artists = data.map(artist => {
            return (
                <div
                    key={artist.id}
                    className={[styles.artistContainer, artist.style].join(
                        ' '
                    )}>
                    <div className={styles.header}>{artist.name}</div>
                    <Image className={styles.image} src={artist.image} />
                    <div className={styles.description}>{artist.description}</div>
                </div>
            );
        });

        return (
            <>
                <PageHeaderContainer>
                    <PageHeader>Our Artists</PageHeader>
                </PageHeaderContainer>
                <div className={styles.containerMain}>
                    <div className={styles.containerGrid}>{artists}</div>
                </div>
            </>
        );
    }
}
export default Artists;
