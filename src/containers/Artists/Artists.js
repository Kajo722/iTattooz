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
        return (
            <>
                <PageHeaderContainer>
                    <PageHeader>Our Artists</PageHeader>
                </PageHeaderContainer>
                <div className={styles.containerMain}>
                    <div className={styles.containerGrid}>
                        <div className={[styles.artistContainer, styles.artistContainer1].join(' ')}>
                            <div className={styles.header}>Clare Melton</div>
                            <Image
                                className={styles.image}
                                src={img1}
                            />
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Elementum curabitur vitae nunc sed velit.
                                Maecenas sed enim ut sem viverra aliquet. Nisl
                                tincidunt eget nullam non nisi. Nisi porta lorem
                                mollis aliquam ut. Amet facilisis magna etiam
                                tempor orci eu lobortis elementum nibh. Eu
                                ultrices vitae auctor eu augue. Venenatis urna
                                cursus eget nunc scelerisque. Eget magna
                                fermentum iaculis eu non diam phasellus
                                vestibulum. Arcu cursus euismod quis viverra
                                nibh cras pulvinar mattis nunc. Libero id
                                faucibus nisl tincidunt eget nullam non. Ac ut
                                consequat semper viverra nam libero. Egestas sed
                                sed risus pretium quam. Mauris in aliquam sem
                                fringilla ut morbi. Est lorem ipsum dolor sit
                                amet consectetur.
                            </div>
                        </div>
                        <div className={[styles.artistContainer, styles.artistContainer2].join(' ')}>
                            <div className={styles.header}>Guto Rodriguez</div>
                            <Image
                                className={styles.image}
                                src={img2}
                            />
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Cursus risus at ultrices mi tempus imperdiet
                                nulla. Porttitor leo a diam sollicitudin tempor.
                                Risus feugiat in ante metus dictum at tempor
                                commodo. Eget nunc lobortis mattis aliquam
                                faucibus purus. Libero enim sed faucibus turpis
                                in eu mi bibendum neque. Morbi quis commodo odio
                                aenean sed. Diam sit amet nisl suscipit
                                adipiscing bibendum est ultricies. Pellentesque
                                eu tincidunt tortor aliquam nulla facilisi cras
                                fermentum odio. Pellentesque nec nam aliquam sem
                                et. Nulla facilisi cras fermentum odio eu
                                feugiat pretium nibh. Adipiscing tristique risus
                                nec feugiat in fermentum. Tempus egestas sed sed
                                risus pretium quam vulputate dignissim
                                suspendisse. Egestas congue quisque egestas diam
                                in. Ultrices gravida dictum fusce ut placerat.
                                Tellus at urna condimentum mattis pellentesque
                                id nibh. Aliquet lectus proin nibh nisl
                                condimentum id venenatis a.
                            </div>
                        </div>
                        <div className={[styles.artistContainer, styles.artistContainer3].join(' ')}>
                            <div className={styles.header}>Aoife Arellano</div>
                            <Image
                                className={styles.image}
                                src={img3}
                            />
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Luctus accumsan tortor posuere ac ut consequat
                                semper viverra nam. Nulla pharetra diam sit amet
                                nisl suscipit adipiscing bibendum. Augue lacus
                                viverra vitae congue eu consequat ac. Aliquam
                                sem et tortor consequat id porta. Congue nisi
                                vitae suscipit tellus mauris a. Malesuada
                                pellentesque elit eget gravida. Commodo sed
                                egestas egestas fringilla phasellus faucibus
                                scelerisque eleifend donec. At risus viverra
                                adipiscing at in tellus integer. Sit amet
                                aliquam id diam maecenas ultricies mi. Urna nec
                                tincidunt praesent semper feugiat nibh sed
                                pulvinar. Et netus et malesuada fames ac turpis.
                                Faucibus purus in massa tempor nec. Sed lectus
                                vestibulum mattis ullamcorper velit sed
                                ullamcorper morbi tincidunt.
                            </div>
                        </div>
                        <div className={[styles.artistContainer, styles.artistContainer4].join(' ')}>
                            <div className={styles.header}>Toni Bernal</div>
                            <Image
                                className={styles.image}
                                src={img4}
                            />
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Adipiscing elit duis tristique sollicitudin nibh
                                sit amet. Adipiscing bibendum est ultricies
                                integer. Pulvinar etiam non quam lacus
                                suspendisse faucibus interdum posuere lorem.
                                Fermentum et sollicitudin ac orci phasellus
                                egestas tellus. Mi sit amet mauris commodo quis
                                imperdiet massa. Lectus proin nibh nisl
                                condimentum id venenatis a condimentum vitae.
                                Vestibulum rhoncus est pellentesque elit
                                ullamcorper dignissim cras tincidunt lobortis.
                                Massa tincidunt nunc pulvinar sapien et ligula
                                ullamcorper malesuada proin. Semper risus in
                                hendrerit gravida. Praesent elementum facilisis
                                leo vel fringilla est ullamcorper eget. Et
                                ultrices neque ornare aenean. Vel fringilla est
                                ullamcorper eget nulla
                            </div>
                        </div>
                        <div className={[styles.artistContainer, styles.artistContainer5].join(' ')}>
                            <div className={styles.header}>Sanaa Duke</div>
                            <Image
                                className={styles.image}
                                src={img5}
                            />
                            <div>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Id
                                venenatis a condimentum vitae sapien
                                pellentesque habitant. Eget nullam non nisi est
                                sit amet facilisis. Nunc id cursus metus aliquam
                                eleifend mi in nulla. Commodo viverra maecenas
                                accumsan lacus vel. Imperdiet nulla malesuada
                                pellentesque elit eget. Integer vitae justo eget
                                magna. Aenean et tortor at risus viverra. Est
                                velit egestas dui id. Nibh mauris cursus mattis
                                molestie. In iaculis nunc sed augue lacus.
                                Vulputate dignissim suspendisse in est.
                                Vestibulum morbi blandit cursus risus at
                                ultrices mi tempus. Pharetra et ultrices neque
                                ornare aenean euismod elementum nisi quis.
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Artists;
