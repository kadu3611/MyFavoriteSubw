import React from 'react';
import IconGithub from '../Styles/imagens/github-circle.svg';
import IconLinkedin from '../Styles/imagens/linkedin-round-icon.svg';
import { DivMarketing, ImagemMarketing, AncoraMarketing } from '../Styles/home.styles'


function Marketing() {


    return (
        <DivMarketing>
            <AncoraMarketing 
            href="https://github.com/kadu3611"
                target="_blank"
                rel="noreferrer">
                <ImagemMarketing
                    alt="icon-github"
                    src={IconGithub}
                >
                </ImagemMarketing>
            </AncoraMarketing>
            <AncoraMarketing href="https://www.linkedin.com/in/carlos-eduardo-fernandes-martins/"
                target="_blank"
                rel="noreferrer">
                <ImagemMarketing
                    alt="Icon-Linkedin"
                    src={IconLinkedin}
                >
                </ImagemMarketing>
            </AncoraMarketing>
        </DivMarketing>

    );
}

export default Marketing;
