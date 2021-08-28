const getAvatarURL = (avatar_id) => {
  return `/images/avatar/${avatar_id}`;
};

const getImageURL = (image_id) => {
  if (image_id) {
    return `/images/${image_id}`;
  } else {
    return null;
  }
};

module.exports = {
  getAvatarURL,
  getImageURL,
};
