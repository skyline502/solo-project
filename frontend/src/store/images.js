import { csrfFetch } from "./csrf";

const GET_IMAGES = '/api/images/GET_IMAGES';
const ADD_IMAGE = '/api/images/ADD_IMAGES';

//actions
const getImages = (images) => {
  return {
    type: GET_IMAGES,
    images
  }
};

const addImage = (image) => {
  return {
    type: ADD_IMAGE,
    image
  }
};




//thunks

//getAllImages
export const getAllImages = () => async dispatch => {
  const response = await csrfFetch('/api/images/');
  if (response.ok) {
    const images = await response.json();
    dispatch(getImages(images));
    return images;
  }
  return response;
}

//addImage
export const addOneImage = (image) => async dispatch => {
  const response = await csrfFetch(`/api/images/`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(image)
  });

  if (response.ok) {
    const image = await response.json();
    console.log('does this run....', image)
    dispatch(addImage(image));
    return image;
  }
  return response;
}

const sortList = (images) => {
  return images.sort((imageA, imageB) => {
    return imageA.businessId - imageB.businessId;
  }).map((image) => image);
};

const initialState = { images: [] }

const imageReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case GET_IMAGES: {
      const allImages = {};
      console.log('images....get', action.images)
      action.images.forEach(image => {
        allImages[image.id] = image;
      });
      return {
        ...allImages,
        ...state,
        images: sortList(action.images)
      };
    }
    case ADD_IMAGE: {
      console.log('adding new image...', action.image)
      newState = {...state};
      newState[action.image.id] = action.image;
      return newState;
    }
    default:
      return state;
  }
};

export default imageReducer;
