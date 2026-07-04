const FALLBACK_IMAGE = '/images/sample.jpg';

// Replaces a broken product image with the sample placeholder.
// Guards against looping if the placeholder itself fails to load.
const imageFallback = (e) => {
  if (!e.currentTarget.src.endsWith(FALLBACK_IMAGE)) {
    e.currentTarget.src = FALLBACK_IMAGE;
  }
};

export default imageFallback;
