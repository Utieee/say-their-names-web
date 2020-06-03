import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Color from '../../../constants/Color';

const StyledProfilePreviewContainer = styled.div`
  width: 30%;
  margin: 1rem;
  @media (max-width: 900px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 65%;
  }

  @media (max-width: 500px) {
    width: 75%;
  }

  @media (max-width: 400px) {
    width: 85%;
  }
`;

const StyledProfilePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);

  align-items: center;
  width: 100%;
  color: ${Color.PRIMARY};
  .image-container {
    display: flex;
    width: 100%;
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-bottom: 1px solid #efefef;
  }

  .profile-preview-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    width: 100%;

    i {
      padding: 0 1rem;
    }
  }

  .profile-preview {
    display: flex;
    flex-direction: column;

    h3 {
      padding: 0 1rem;
      margin: 0;
      text-transform: uppercase;
    }
    p {
      padding: 0 1rem;
      margin: 0;
    }
  }
`;

const ProfilePreview = ({
  id, fullName, dateOfIncident, image
}) => (
  <StyledProfilePreviewContainer>
    <Link to={`/profile/${id}`}>
      <StyledProfilePreview>
        <div className="image-container">
          <img src={image.image_url} alt={fullName} />
        </div>

        <div className="profile-preview-container">
          <div className="profile-preview">
            <h3>{fullName}</h3>
            <p>{dateOfIncident}</p>
          </div>

          <i className="far fa-bookmark" />
        </div>
      </StyledProfilePreview>
    </Link>
  </StyledProfilePreviewContainer>
);

export default ProfilePreview;

ProfilePreview.propTypes = {
  id: PropTypes.number.isRequired,
  fullName: PropTypes.string.isRequired,
  image: PropTypes.shape({
    image_url: PropTypes.string.isRequired
  }).isRequired,
  dateOfIncident: PropTypes.string.isRequired
};
