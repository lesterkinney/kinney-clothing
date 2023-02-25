import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  NavLink,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const route = `shop/${title.toLowerCase()}`;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Body>
        <NavLink to={route}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </NavLink>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
