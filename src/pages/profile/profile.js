import React from 'react';
import { AiFillTwitterCircle, AiFillGooglePlusCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import profile from '../../assets/img/profile.png';
import cursor from '../../assets/img/send.png';
import Button from '../../components/button/button';
import { Logos, Photo, ButtonPosition } from './styles';

function Profile() {
  return (
    <div className="row container-profile">
      <Photo>
        <img src={profile} className="img-profile" alt="profile" />
      </Photo>
      <div className="column">
        <span className="section-title">James Lee</span>
        <span className="default-text">Web App Developer</span>
        <Logos>
          <AiFillTwitterCircle color="grey" size="30px" />
          <FaFacebook color="grey" size="29px" />
          <FaGithub color="grey" size="29px" />
          <AiFillGooglePlusCircle color="grey" size="29px" />
        </Logos>
      </div>
      <div className="double-column">
        <ButtonPosition>
          <Button img={cursor} label="CONTACT ME" />
        </ButtonPosition>
      </div>
    </div>
  );
}

export default Profile;
