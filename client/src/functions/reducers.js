export function profileReducer(state, action) {
  switch (action.type) {
    case 'PROFILE_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'PROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        profile: action.payload,
        error: '',
      };
    case 'PROFILE_ERROR':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}

export function postsReducer(state, action) {
  switch (action.type) {
    case 'POSTS_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: '',
      };
    case 'POSTS_ERROR':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
export function newsReducer(state, action) {
  switch (action.type) {
    case 'NEWS_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'NEWS_SUCCESS':
      return {
        ...state,
        loading: false,
        news: action.payload,
        error: '',
      };
    case 'NEWS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
export function friendspage(state, action) {
  switch (action.type) {
    case 'FRIENDS_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FRIENDS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: '',
      };
    case 'FRIENDS_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
