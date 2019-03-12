import React from 'react';
import Media from 'react-media';
import Image from '../../Image/Image';
import HeaderMain from '../../Typography/HeaderMain/HeaderMain';
import Paragraph from '../../Typography/Paragraph/Paragraph';

const feature = props => {
    return (
        <Media query='(max-width: 1100px)'>
            {matches =>
                matches ? (
                    <>
                        <HeaderMain>{props.headerText}</HeaderMain>
                        <Image
                            alt={props.alt}
                            src={props.imgSrc}
                            className={props.imageClassName}
                        />
                        <Paragraph style={{ width: '70%' }}>
                            {props.paragraphText}
                        </Paragraph>
                        {props.children}
                    </>
                ) : (
                    <>
                        <div className={props.containerClassName}>
                            <HeaderMain>{props.headerText}</HeaderMain>
                            <Paragraph style={{ width: '70%' }}>
                                {props.paragraphText}
                            </Paragraph>
                            <div>{props.children}</div>
                        </div>
                        <Image
                            src={props.imgSrc}
                            className={props.imageClassName}
                        />
                    </>
                )
            }
        </Media>
    );
};

export default feature;
